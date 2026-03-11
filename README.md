# TRIGERRUS Website

## 📁 Folder Structure

```
trigerrus/
├── index.html              ← Home Page
├── css/
│   └── style.css           ← All styles (dark cyberpunk theme)
├── js/
│   └── main.js             ← Navbar, animations, contact DB, CSV export
├── pages/
│   ├── courses.html        ← Courses with filter tabs
│   ├── pricing.html        ← Pricing with online/offline toggle + EMI
│   ├── features.html       ← Features + learning journey steps
│   ├── testimonials.html   ← Student success stories
│   └── contact.html        ← Contact form + Admin enquiry table
├── assets/
│   └── nav-footer.html     ← Reference snippet
└── README.md
```

## 🚀 How to Run

Simply open `index.html` in any modern browser — no server needed!

> For best results, use VS Code with the **Live Server** extension.

## 💾 Data Storage

Contact form submissions are stored in **browser localStorage** under the key `trigerrus_contacts`.

### Admin Panel (Contact Page)
- Scroll to bottom of `contact.html` to see the **Submitted Enquiries** table
- Click **Export CSV** to download all enquiries as a `.csv` file
- Open the CSV in **Microsoft Excel** or **Google Sheets**

## 🎨 Theme

- **Dark Cyberpunk** aesthetic — matches TRIGERRUS brand
- Colors: Cyan `#00f5d4`, Purple `#a855f7`, Dark BG `#020510`
- Fonts: **Orbitron** (headings) + **Rajdhani** (body)

## 📄 Pages

| Page | File | Description |
|------|------|-------------|
| Home | index.html | Hero, stats, featured courses, features, CTA |
| Courses | pages/courses.html | 6 courses with filter tabs (RPA/Python/FullStack) |
| Pricing | pages/pricing.html | 3 plans with online/offline toggle + EMI info |
| Features | pages/features.html | 9 platform features + learning journey steps |
| Testimonials | pages/testimonials.html | 6 student stories + stats |
| Contact | pages/contact.html | Booking form + admin table + CSV export |
