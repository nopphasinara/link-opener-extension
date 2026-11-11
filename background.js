// Function to validate URL or file link
function isValidUrl(string) {
  try {
    const url = new URL(string);
    return ['http:', 'https:', 'file:'].includes(url.protocol);
  } catch (_) {
    return false;
  }
}

// Function to inject and display a modern tooltip on the current page
async function showTooltipOnTab(tabId, message) {
  try {
    await chrome.scripting.executeScript({
      target: { tabId: tabId },
      func: (msg) => {
        const existing = document.getElementById('quick-link-opener-tooltip');
        if (existing) existing.remove();

        const tooltip = document.createElement('div');
        tooltip.id = 'quick-link-opener-tooltip';
        tooltip.textContent = msg;

        Object.assign(tooltip.style, {
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          backgroundColor: '#202124',
          color: '#ffffff',
          padding: '12px 20px',
          borderRadius: '8px',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          fontSize: '14px',
          fontWeight: '500',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
          zIndex: '2147483647',
          opacity: '0',
          transition: 'opacity 0.25s ease, transform 0.25s ease',
          transform: 'translateY(10px)',
          pointerEvents: 'none'
        });

        document.body.appendChild(tooltip);
        requestAnimationFrame(() => {
          tooltip.style.opacity = '1';
          tooltip.style.transform = 'translateY(0)';
        });

        setTimeout(() => {
          tooltip.style.opacity = '0';
          tooltip.style.transform = 'translateY(10px)';
          setTimeout(() => tooltip.remove(), 250);
        }, 2500);
      },
      args: [message]
    });
  } catch (err) {
    console.error("Could not show tooltip:", err);
  }
}

// Handle clicks on the extension icon
chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.id) return;

  try {
    // Get text selection from the active page
    const results = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => window.getSelection().toString().trim()
    });

    const selectedText = results && results[0] ? results[0].result : "";

    if (!selectedText) {
      await showTooltipOnTab(tab.id, '⚠️ Please select a link text first.');
      return;
    }

    if (isValidUrl(selectedText)) {
      // Load user preferences for opening mode
      chrome.storage.sync.get({ openMode: 'newTab' }, (data) => {
        const openMode = data.openMode;

        if (openMode === 'currentTab') {
          chrome.tabs.update(tab.id, { url: selectedText });
        } else if (openMode === 'newWindow') {
          chrome.windows.create({ url: selectedText });
        } else {
          chrome.tabs.create({ url: selectedText });
        }
      });
    } else {
      await showTooltipOnTab(tab.id, '❌ Selected text is not a valid URL or file link.');
    }
  } catch (error) {
    console.error("Error processing selection:", error);
  }
});
