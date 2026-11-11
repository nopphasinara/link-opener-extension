// ฟังก์ชันเช็คว่าเป็น URL หรือลิงก์ไฟล์ที่ถูกต้องหรือไม่
function isValidUrl(string) {
  try {
    const url = new URL(string);
    return ['http:', 'https:', 'file:'].includes(url.protocol);
  } catch (_) {
    return false;
  }
}

// ฟังก์ชันแสดง Tooltip แจ้งเตือนสวยๆ บนหน้าเว็บ
function showNotificationTooltip(message) {
  // ลบ Tooltip อันเก่าออกก่อน (ถ้ามีค้างอยู่)
  const existingTooltip = document.getElementById('quick-link-opener-tooltip');
  if (existingTooltip) {
    existingTooltip.remove();
  }

  // สร้าง Element สำหรับ Tooltip
  const tooltip = document.createElement('div');
  tooltip.id = 'quick-link-opener-tooltip';
  tooltip.textContent = message;

  // จัดสไตล์แบบ Modern Floating Toast (ใช้ CSS แบบ Inline เพื่อไม่ให้กระทบกับเว็บหลัก)
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

  // สั่งให้แสดงขึ้นมาพร้อมอนิเมชัน
  requestAnimationFrame(() => {
    tooltip.style.opacity = '1';
    tooltip.style.transform = 'translateY(0)';
  });

  // ซ่อนและลบทิ้งหลังผ่านไป 2.5 วินาที
  setTimeout(() => {
    tooltip.style.opacity = '0';
    tooltip.style.transform = 'translateY(10px)';
    setTimeout(() => {
      tooltip.remove();
    }, 250);
  }, 2500);
}

// ดักจับการกดปุ่มบนหน้าเว็บ
document.addEventListener('keydown', (event) => {
  // เช็คว่าเป็นปุ่ม 'O' หรือ 'o' (และไม่ใช่ตอนกำลังพิมพ์อยู่ใน Input, Textarea หรือ ContentEditable)
  if (
    (event.key === 'o' || event.key === 'O') &&
    !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName) &&
    !document.activeElement.isContentEditable
  ) {
    const selectedText = window.getSelection().toString().trim();

    if (!selectedText) {
      showNotificationTooltip('⚠️ Please select a link text first.');
      return;
    }

    if (isValidUrl(selectedText)) {
      // ส่งข้อความไปบอก background.js ให้เปิดลิงก์
      chrome.runtime.sendMessage({
        action: "openLink",
        url: selectedText
      });
    } else {
      showNotificationTooltip('❌ Selected text is not a valid URL or file link.');
    }
  }
});
