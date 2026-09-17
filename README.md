# Bright Future Academy - Tuition Center Website

A complete, production-ready, modern static website built with React, Vite, and Framer Motion. This website is tailored for tuition centers and coaching institutes.

## Technologies
- React.js 18
- Vite
- Vanilla CSS with CSS Variables
- Framer Motion (Animations)
- React Icons
- No Backend / No Database

## Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run Development Server:**
   ```bash
   npm run dev
   ```

3. **Build for Production:**
   ```bash
   npm run build
   ```

4. **Preview Production Build:**
   ```bash
   npm run preview
   ```

---

## 🛠️ CLIENT CUSTOMIZATION

This project is built to be easily customizable by non-developers. All important information is centralized.

### 1. Change Academy Info (Name, Phone, WhatsApp, Email, Maps, etc.)
Open `src/utils/config.js`. You will find:
```javascript
export const academyConfig = {
  name: "Bright Future Academy",
  phone: "+91 98765 43210",
  whatsapp: "919876543210", // Country code + number (No spaces or +)
  email: "brightfutureacademy@example.com",
  // ...
};
```
Change the values here, and it will update everywhere on the website automatically.

### 2. Update Courses
Open `src/data/courses.js`. Edit the array of courses to match your offerings.

### 3. Update Teachers
Open `src/data/teachers.js`. You can replace the placeholder names, qualifications, and image URLs.

### 4. Update Gallery
Open `src/data/gallery.js`. Replace the image URLs with your actual tuition center photos. Ensure images are optimized for web.

### 5. Update Results & Testimonials
- For Results: Open `src/components/Results.jsx` and modify the `achievers` array. Ensure you replace the placeholder data with actual student results.
- For Testimonials: Open `src/data/testimonials.js` and edit the quotes.

### 6. Change Colors
Open `src/index.css`. At the top, you will see CSS variables:
```css
:root {
  --primary: #2563EB;
  --secondary: #7C3AED;
  --accent: #F59E0B;
  /* ... */
}
```
Modify these hex codes to match your brand colors.

## Deployment
Since this is a fully static website, it can be deployed on any static hosting provider.
1. Run `npm run build`
2. The output will be in the `dist/` folder.
3. Upload the contents of the `dist/` folder to Vercel, Netlify, or any shared hosting plan (Hostinger, GoDaddy, etc.).
