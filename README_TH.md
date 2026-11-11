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

*บอกลาการก๊อปปี้วาง URL แบบเดิมๆ เปิดลิงก์ที่ไฮไลต์ได้อย่างรวดเร็วทันใจในแบบเรียลไทม์*

</div>

---

## ✨ ฟีเจอร์เด่น (Features)

- **เปิดลิงก์และไฟล์ได้ทันที**: ตรวจจับข้อความที่เลือก (รองรับ URL, HTTP/HTTPS และลิงก์ไฟล์) แล้วเปิดใช้งานทันทีเพียงคลิกเดียวที่ไอคอน
- **ปรับแต่งโหมดการเปิดได้ตามต้องการ**: ตั้งค่าผ่านหน้า Options ได้ถึง 3 รูปแบบ:
  - 🌐 เปิดใน **แท็บใหม่** (ค่าเริ่มต้น)
  - 📄 เปิดใน **แท็บปัจจุบัน**
  - 🪟 เปิดใน **หน้าต่างใหม่**
- **ระบบแจ้งเตือนสุดล้ำ (Modern Tooltip)**: แจ้งเตือนแบบลอยตัวสวยงาม ทันทีหากยังไม่ได้เลือกข้อความ หรือข้อความที่เลือกไม่ใช่ลิงก์ที่ถูกต้อง
- **ปลอดภัย เป็นส่วนตัว**: ไม่มีระบบติดตาม (Zero tracking) ไม่เก็บข้อมูล และขอสิทธิ์น้อยที่สุด

---

## 📂 โครงสร้างโปรเจกต์ (Project Structure)

```text
quick-link-opener/
├── manifest.json       # ไฟล์คอนฟิกหลักของ Extension (Manifest V3)
├── background.js       # ระบบประมวลผลเบื้องหลังและการจัดการ Storage
├── options.html        # หน้าจอตั้งค่าการใช้งาน (Settings UI)
├── options.js          # สคริปต์บันทึกและโหลดการตั้งค่า
└── icon.png            # ไอคอนส่วนขยาย (ขนาด 16x16, 48x48, 128x128)

```

---

## 🛠️ วิธีการติดตั้ง (Installation)

1. ดาวน์โหลดหรือโคลน (Clone) โปรเจกต์นี้มาไว้ที่เครื่องของคุณ
2. เปิดเบราว์เซอร์ Google Chrome แล้วไปที่ URL: `chrome://extensions/`
3. เปิดสวิตช์ **Developer mode (โหมดผู้พัฒนา)** ที่มุมขวาบน
4. คลิกปุ่ม **Load unpacked (โหลดส่วนขยายที่ถอดรหัสแล้ว)** ที่มุมซ้ายบน
5. เลือกโฟลเดอร์โปรเจกต์ `quick-link-opener` ของคุณ
6. ปักหมุด (Pin) ไอคอน Extension ไว้ที่ Toolbar เพื่อความสะดวกรวดเร็ว

---

## ⚙️ วิธีการใช้งาน (How to Use)

1. **ไฮไลต์เลือกข้อความ** ที่เป็นลิงก์เว็บไซต์หรือไฟล์บนหน้าเว็บใดก็ได้
2. **คลิกที่ไอคอน Extension** บนแถบเครื่องมือ
3. ลิงก์จะเปิดขึ้นมาทันทีตามการตั้งค่าของคุณ (หากยังไม่เลือกข้อความ หรือไม่ใช่ลิงก์ จะมี Tooltip เตือนขึ้นมาแจ้งเตือนสวยๆ)

---

## 📜 บันทึกการเปลี่ยนแปลง (Changelog)

### [4.0.0] - 2026-11-11

* **เพิ่ม (Added)**: ระบบแจ้งเตือน Tooltip ลอยตัว เมื่อยังไม่ได้เลือกข้อความหรือลิงก์ไม่ถูกต้อง
* **เพิ่ม (Added)**: ตั้งค่าโหมดการเปิดลิงก์ได้ผ่านหน้า Options (แท็บใหม่, แท็บปัจจุบัน, หน้าต่างใหม่)
* **เพิ่ม (Added)**: ซิงค์การตั้งค่าผ่านบัญชี Google ด้วย `chrome.storage.sync`
* **ปรับเปลี่ยน (Changed)**: เปลี่ยนโครงสร้างการทำงานมาเป็นการคลิกที่ไอคอน Extension
* **ปรับเปลี่ยน (Changed)**: อัปเดตเอกสารและสคริปต์ภายในเป็นภาษาอังกฤษทั้งหมด

### [3.1.0] - 2026-11-10

* **เพิ่ม (Added)**: ทดลองระบบดักจับคีย์ลัดปุ่มเดียว (`O`) ผ่าน Content Scripts

### [2.0.0] - 2026-11-05

* **เพิ่ม (Added)**: รองรับโครงสร้าง Manifest V3 และสิทธิ์การใช้งาน Storage

### [1.0.0] - 2026-11-01

* **เพิ่ม (Added)**: เปิดตัวโปรเจกต์ Quick Selected Link Opener ครั้งแรก

---

## ☕ สนับสนุนผู้พัฒนา (Support the Project)

หาก **Quick Selected Link Opener** ช่วยประหยัดเวลา เพิ่มความคล่องตัว หรือทำให้การท่องเว็บของคุณลื่นไหลขึ้น คุณสามารถร่วมสนับสนุนกาแฟและเป็นกำลังใจให้ผมพัฒนาโปรเจกต์ดีๆ แบบนี้ต่อไปได้ครับ!

ทุกการสนับสนุนช่วยให้เราสามารถรักษาคุณภาพโค้ด อัปเดตฟีเจอร์ใหม่ๆ และคงความฟรีแบบ Open-Source ไว้ได้ 100%

<div align="center">

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://github.com/sponsors/nopphasinara)

*ทุกแก้วกาแฟของคุณ คือพลังงานชั้นดีในการสร้างสรรค์เครื่องมือเจ๋งๆ ออกมาอีกครับ* 🚀

</div>

---

## 👤 ผู้พัฒนา (Author)

**Sudprawat Atae**

---

## 📄 สิทธิ์การใช้งาน (License)

โปรเจกต์นี้เปิดให้ใช้งานภายใต้ MIT License
