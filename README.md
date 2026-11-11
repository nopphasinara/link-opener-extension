# 🛡️ Quick Selected Link Opener — Smart Link & File Launcher

<div align="center">

<p>
  <a href="README.md">English (EN)</a> | <a href="README_TH.md">ภาษาไทย (TH)</a>
</p>

<p>
  <img src="https://img.shields.io/badge/version-4.0-374151?style=flat-square" alt="Version 4.0">
  <img src="https://img.shields.io/badge/License-MIT-16a34a?style=flat-square" alt="License MIT">
  <img src="https://img.shields.io/badge/platform-Chrome-0284c7?style=flat-square" alt="Platform Chrome">
  <img src="https://img.shields.io/badge/sync-Google%20Account-ea580c?style=flat-square" alt="Sync Google Account">
</p>

*Say goodbye to manually copying and pasting URLs. Instantly launch selected text into action in real-time.*

</div>

---

## ✨ Features

- **Instant URL & File Opening**: Automatically detects selected text (URLs, HTTP/HTTPS, and local files) and opens it instantly with a single click on the extension icon.
- **Customizable Opening Modes**: Tailor how your links open via the dedicated settings page:
  - 🌐 Open in a **New Tab** (Default)
  - 📄 Open in the **Current Tab**
  - 🪟 Open in a **New Window**
- **Modern Toast Notifications**: Clean, non-intrusive floating UI tooltips alert you instantly if no text is selected or if the selection is invalid.
- **Privacy-First**: Zero tracking, zero external data collection, and requires minimal permissions.

---

## 📂 Project Structure

```text
quick-link-opener/
├── manifest.json       # Extension configuration (Manifest V3)
├── background.js       # Core event handling and storage logic
├── options.html        # Settings page user interface
├── options.js          # Settings management script
└── icon.png            # Extension icon (16x16, 48x48, 128x128)

```

---

## 🛠️ Installation & Setup (Developer Mode)

1. **Download or Clone** this repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** using the toggle switch in the top-right corner.
4. Click the **Load unpacked** button in the top-left corner.
5. Select the `quick-link-opener` project folder.
6. Pin the extension to your browser toolbar for quick access!

---

## ⚙️ How to Use

1. **Highlight/Select** any URL or file link text on any web page.
2. **Click** the extension icon in your browser toolbar.
3. The link will open instantly based on your preferences. If no text is selected or the text is not a valid URL/file link, a modern notification tooltip will appear.

---

## 📜 Changelog

### [4.0.0] - 2026-11-11

* **Added**: Modern floating toast notifications for unselected text or invalid links.
* **Added**: Customizable opening modes (New Tab, Current Tab, New Window) via options page.
* **Added**: User preferences synchronization using `chrome.storage.sync`.
* **Changed**: Refactored event workflow to extension icon click action.
* **Changed**: Standardized all internal scripts and text documentation to strict English.

### [3.1.0] - 2026-11-10

* **Added**: Early single-key shortcut (`O`) listening via content scripts.

### [2.0.0] - 2026-11-05

* **Added**: Manifest V3 structure and storage configuration support.

### [1.0.0] - 2026-11-01

* **Added**: Initial release of Quick Selected Link Opener.

---

## ☕ Support the Project

If **Quick Selected Link Opener** saves your time, boosts your productivity, or simply makes your daily browsing workflow smoother, consider fueling its development!

Your support helps maintain code quality, push regular updates, and keep this tool 100% free and open-source.

<div align="center">

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://github.com/sponsors/nopphasinara)

*Every little coffee helps write cleaner code and build better tools.* 🚀

</div>

---

## 👤 Author

**Sudprawat Atae**

---

## 📄 License

This project is open-source and available under the MIT License.
