document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.sync.get({ openMode: 'newTab' }, (items) => {
    document.getElementById('openMode').value = items.openMode;
  });
});

document.getElementById('saveBtn').addEventListener('click', () => {
  const openMode = document.getElementById('openMode').value;

  chrome.storage.sync.set({ openMode: openMode }, () => {
    const status = document.getElementById('status');
    status.textContent = 'Settings saved successfully!';
    setTimeout(() => {
      status.textContent = '';
    }, 2000);
  });
});
