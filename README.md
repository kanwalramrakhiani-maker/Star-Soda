# 🌟 Star Soda — Sip Your Sign

A cosmic, zodiac-inspired e-commerce platform featuring 12 unique sparkling sodas, custom merchandise, and an AI-powered couple print studio.

**Live Demo:** [Star Soda](https://starsoda.pk)  
**Created by:** [@kanwalramrakhiani-maker](https://github.com/kanwalramrakhiani-maker)

---

## ✨ Features

### 🥤 Twelve Zodiac Flavors
- **Aries:** Blazing Raspberry Chili
- **Taurus:** Velvet Rose Vanilla
- **Gemini:** Citrus & Lychee Twist
- **Cancer:** Coconut Moonberry
- **Leo:** Golden Mango Passion
- **Virgo:** Cucumber Mint Clarity
- **Libra:** Peach Hibiscus Bloom
- **Scorpio:** Dark Cherry Obsidian
- **Sagittarius:** Tropical Wanderlust
- **Capricorn:** Smoked Caramel Earth
- **Aquarius:** Electric Blue Yuzu
- **Pisces:** Dreamy Lavender Mist

### 🛍️ Cosmic Merchandise
- Phone covers, tumblers, water bottles
- Hoodies, t-shirts, apparel
- Stickers, tote bags, accessories
- All customizable with zodiac signs

### 🤖 AI Couple Studio
- Generate custom cosmic artwork for any two zodiac signs
- Multiple art styles: Cosmic Art Nouveau, Watercolor, Retro Poster, Galaxy Fantasy, Minimalist
- Print custom designs on merchandise
- Powered by Claude AI (secure backend integration)

### 📅 Events & Experiences
- Zodiac Tasting Nights
- Couples Print Pop-Ups
- Launch parties and sign-specific mixers
- VIP packages and corporate events

### 💬 Live Chat Support
- Real-time customer support
- Automated responses for common questions
- Available 24/7

---

## 🚀 Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Design:** Custom CSS with gradients, animations, and glassmorphism
- **AI Integration:** Claude API (Anthropic) - **Backend secure integration**
- **Fonts:** Google Fonts (Cinzel Decorative, Cormorant Garamond, Space Mono)
- **Storage:** LocalStorage for cart persistence
- **Responsive:** Mobile-first design, tested on all devices

---

## 📦 Project Structure

```
Star-Soda/
├── index.html          # Single-page application (HTML + CSS)
├── app.js              # Main application script (refactored & secure)
├── README.md           # Project documentation
└── assets/             # (Future: images, icons)
```

---

## 🛠️ Installation & Setup

### Quick Start
1. Clone the repository:
   ```bash
   git clone https://github.com/kanwalramrakhiani-maker/Star-Soda.git
   cd Star-Soda
   ```

2. Open in browser:
   ```bash
   open index.html
   # or
   python -m http.server 8000
   # then visit http://localhost:8000
   ```

### Backend Setup (Required for AI Features)
You need a backend endpoint to securely handle Claude API calls:

**Example with Node.js/Express:**
```javascript
// server.js
require('dotenv').config();
const express = require('express');
const app = express();

app.post('/api/generate-art', async (req, res) => {
  try {
    const { sign1, sign2, style, prompt } = req.body;
    
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.CLAUDE_API_KEY}`
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: `Generate cosmic artwork for ${sign1} and ${sign2}...`
        }]
      })
    });
    
    const data = await response.json();
    res.json({ description: data.content[0].text });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate art' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

---

## 🎨 Design Highlights

### Color Palette
- **Deep:** `#06030f` (background)
- **Gold:** `#f5c842` (primary accent)
- **Rose:** `#e8678a` (secondary accent)
- **Aqua:** `#5ae8d4` (tertiary accent)
- **Purple:** `#9b6ef3` (AI section)

### Key Design Features
- Custom cursor animation
- Smooth scroll behavior
- Intersection Observer animations
- Glassmorphism effects
- Responsive grid layouts
- Mobile hamburger menu

---

## 📝 Cart System

- **localStorage Support:** Cart persists across browser sessions
- **Quantity Management:** Add/remove/adjust item quantities
- **Real-time Totals:** Instant price calculation
- **Checkout:** Order confirmation with notification

**Usage:**
```javascript
addToCart(productId);    // Add item to cart
changeQty(productId, 1); // Increase quantity
removeItem(productId);   // Remove item
checkout();              // Place order
```

---

## 🤖 AI Studio Features

**Generate cosmic artwork by:**
1. Selecting two zodiac signs
2. Optionally describing your vision
3. Choosing an art style
4. Clicking "Generate Artwork"
5. Ordering a custom print or sending to Star Soda

**Supported Styles:**
- Cosmic Art Nouveau
- Celestial Watercolor
- Retro Zodiac Poster
- Dark Galaxy Fantasy
- Minimalist Constellation Line Art

---

## 🔐 Security Improvements Made

| Issue | Solution |
|-------|----------|
| **API Key Exposed** | Claude API calls now routed through secure backend endpoint |
| **No Form Validation** | Added `validateEmail()`, `validatePhone()`, `validateForm()` |
| **XSS Vulnerability** | Implemented `escapeHtml()` for all user input |
| **No Error Handling** | All functions wrapped with try-catch blocks |
| **Cart Lost on Refresh** | Implemented localStorage persistence |
| **Inline Event Handlers** | Refactoring to addEventListener (in progress) |

---

## 🐛 Known Issues & Improvements Needed

### 🔴 Critical
- [ ] Set up backend endpoint `/api/generate-art` for Claude API
- [ ] Configure environment variables for API keys
- [ ] Implement proper CORS handling
- [ ] Add form validation on all forms

### 🟡 High Priority
- [ ] Extract CSS to separate `styles.css` file
- [ ] Remove inline event handlers (onclick) → addEventListener
- [ ] Implement real payment gateway integration
- [ ] Add email notification service
- [ ] Set up WhatsApp integration for confirmations

### 🟢 Nice-to-Have
- [ ] Add accessibility attributes (ARIA labels, role attributes)
- [ ] Implement image lazy loading
- [ ] Create actual product images (currently using emojis)
- [ ] Add product search functionality
- [ ] Implement wishlist feature with persistence
- [ ] Add product reviews/ratings
- [ ] Create admin dashboard

---

## 📱 Responsive Design

Fully responsive across:
- ✅ Desktop (1920px+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 767px)

Media queries at `900px` breakpoint handle:
- Hamburger navigation
- Single-column layouts
- Adjusted spacing and padding

---

## 📊 Core Functions Reference

| Function | Purpose |
|----------|---------|
| `filterProducts(category)` | Filter merchandise by category |
| `addToCart(id)` | Add product to cart |
| `updateCart()` | Sync cart UI and localStorage |
| `generateAIArt()` | Call backend to generate artwork |
| `submitBooking()` | Validate and submit booking |
| `toggleChat()` | Open/close live chat |
| `showToast(message)` | Display notification |
| `validateEmail(email)` | Validate email format |
| `validatePhone(phone)` | Validate phone format |
| `escapeHtml(text)` | Prevent XSS attacks |

---

## 📞 Contact & Support

- **Email:** hello@starsoda.pk
- **WhatsApp:** +92 300 000 0000
- **Location:** Karachi, Pakistan
- **Instagram:** @starsoda_pk
- **TikTok:** @starsoda

---

## 📄 License

© 2025 Star Soda · All Rights Reserved

---

## 🚧 Roadmap

**Phase 1 (Q2 2025):**
- [ ] Backend API setup (Node.js/Express)
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Email notifications (SendGrid/Mailgun)

**Phase 2 (Q3 2025):**
- [ ] User authentication & accounts
- [ ] Order management system
- [ ] Payment gateway (Stripe/JazzCash)
- [ ] WhatsApp API integration

**Phase 3 (Q4 2025):**
- [ ] Admin dashboard
- [ ] Inventory management
- [ ] Analytics & reporting
- [ ] Mobile app (React Native)

**Phase 4 (2026):**
- [ ] Social features (sharing, reviews)
- [ ] Subscription service
- [ ] International expansion
- [ ] B2B corporate gifting

---

## 👨‍💻 Development

### Running Locally
```bash
# Install dependencies (if using Node backend)
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

### Code Quality
```bash
# Run ESLint
npm run lint

# Format code
npm run format

# Run tests
npm run test
```

---

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 🌍 Socials & Links

- **GitHub:** [@kanwalramrakhiani-maker](https://github.com/kanwalramrakhiani-maker)
- **Portfolio:** [kanwalramrakhiani.com](https://kanwalramrakhiani.com)
- **LinkedIn:** [Kanwal Ramrakhiani](https://linkedin.com/in/kanwalramrakhiani)

---

**Made with ✨ and cosmic energy from Karachi**

**Sip Your Sign. 🌟**
