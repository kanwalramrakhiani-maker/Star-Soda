// ============================================================
// STAR SODA - MAIN APPLICATION SCRIPT
// ============================================================
// This file handles all JavaScript functionality for the app.
// Move Claude API calls to backend for security.

// ============================================================
// CONFIGURATION & CONSTANTS
// ============================================================

const CONFIG = {
  colors: {
    deep: '#06030f',
    void: '#0d0820',
    gold: '#f5c842',
    rose: '#e8678a',
    aqua: '#5ae8d4',
    purple: '#9b6ef3',
    white: '#f5f0ff',
    dim: 'rgba(245,240,255,0.6)'
  },
  messages: {
    cartEmpty: 'Your cart is empty!',
    orderPlaced: '🌟 Order placed! We\'ll contact you shortly.',
    bookingConfirmed: '✦ Booking confirmed! Check your inbox.',
    selectBothSigns: 'Please select both zodiac signs first!',
    aiGenerationError: 'Could not generate art. Please try again!'
  }
};

const PRODUCTS = [
  { id: 1, name: 'Leo Tumbler', sign: '♌ Leo', price: 2499, emoji: '🥤', cat: 'drinkware', badge: 'Best Seller' },
  { id: 2, name: 'Scorpio Phone Cover', sign: '♏ Scorpio', price: 1299, emoji: '📱', cat: 'accessories', badge: 'New' },
  { id: 3, name: 'Aquarius Hoodie', sign: '♒ Aquarius', price: 5999, emoji: '🧥', cat: 'apparel', badge: '' },
  { id: 4, name: 'Pisces Water Bottle', sign: '♓ Pisces', price: 1899, emoji: '🍶', cat: 'drinkware', badge: '' },
  { id: 5, name: 'Gemini Tote Bag', sign: '♊ Gemini', price: 1499, emoji: '👜', cat: 'accessories', badge: '' },
  { id: 6, name: 'Aries Soda 6-Pack', sign: '♈ Aries', price: 999, emoji: '🥫', cat: 'soda', badge: 'Sale' },
  { id: 7, name: 'Libra Sticker Set', sign: '♎ Libra', price: 499, emoji: '🎨', cat: 'accessories', badge: '' },
  { id: 8, name: 'Capricorn Hoodie', sign: '♑ Capricorn', price: 5999, emoji: '👕', cat: 'apparel', badge: '' },
  { id: 9, name: 'Virgo Tumbler', sign: '♍ Virgo', price: 2499, emoji: '🧴', cat: 'drinkware', badge: '' },
  { id: 10, name: 'Sagittarius T-Shirt', sign: '♐ Sagittarius', price: 2999, emoji: '👚', cat: 'apparel', badge: 'New' },
  { id: 11, name: 'Taurus Coffee Mug', sign: '♉ Taurus', price: 1299, emoji: '☕', cat: 'drinkware', badge: '' },
  { id: 12, name: 'Cancer Soda 12-Pack', sign: '♋ Cancer', price: 1799, emoji: '🫙', cat: 'soda', badge: 'Popular' }
];

const ZODIAC_SYMBOLS = {
  'Aries': '♈', 'Taurus': '♉', 'Gemini': '♊', 'Cancer': '♋', 'Leo': '♌', 'Virgo': '♍',
  'Libra': '♎', 'Scorpio': '♏', 'Sagittarius': '♐', 'Capricorn': '♑', 'Aquarius': '♒', 'Pisces': '♓'
};

// ============================================================
// STATE MANAGEMENT
// ============================================================

let appState = {
  cart: [],
  chatOpen: false,
  notifications: []
};

// Initialize cart from localStorage if available
function initializeCart() {
  const savedCart = localStorage.getItem('starsoda_cart');
  if (savedCart) {
    try {
      appState.cart = JSON.parse(savedCart);
      updateCart();
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      appState.cart = [];
    }
  }
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem('starsoda_cart', JSON.stringify(appState.cart));
}

// ============================================================
// CURSOR ANIMATION
// ============================================================

function initCursor() {
  const cur = document.getElementById('cur');
  const cur2 = document.getElementById('cur2');
  
  if (!cur || !cur2) return;
  
  document.addEventListener('mousemove', (e) => {
    requestAnimationFrame(() => {
      cur.style.left = e.clientX + 'px';
      cur.style.top = e.clientY + 'px';
      cur2.style.left = e.clientX + 'px';
      cur2.style.top = e.clientY + 'px';
    });
  });
}

// ============================================================
// NAVIGATION
// ============================================================

function toggleNav() {
  const navLinks = document.getElementById('navLinks');
  if (!navLinks) return;
  navLinks.classList.toggle('open');
}

// Close nav on link click
function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('navLinks')?.classList.remove('open');
    });
  });
}

// ============================================================
// FORM VALIDATION
// ============================================================

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone) {
  const phoneRegex = /^[\d\s\-\+\(\)]{7,}$/;
  return phoneRegex.test(phone);
}

function validateForm(formData) {
  const errors = [];
  
  if (!formData.firstName?.trim()) errors.push('First name is required');
  if (!formData.lastName?.trim()) errors.push('Last name is required');
  if (!validateEmail(formData.email)) errors.push('Valid email is required');
  if (!validatePhone(formData.phone)) errors.push('Valid phone number is required');
  
  return { isValid: errors.length === 0, errors };
}

// ============================================================
// PRODUCTS & CART
// ============================================================

function filterProducts(category, buttonElement) {
  try {
    // Update active button
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    buttonElement?.classList.add('active');
    
    // Filter and render
    const filtered = category === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === category);
    renderProducts(filtered);
  } catch (error) {
    console.error('Error filtering products:', error);
    showToast('Error filtering products');
  }
}

function renderProducts(productList) {
  try {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = productList.map(product => `
      <div class="product-card">
        <div class="product-img">
          ${product.emoji}
          ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        </div>
        <div class="product-info">
          <div class="product-name">${escapeHtml(product.name)}</div>
          <div class="product-sign">${product.sign}</div>
          <div class="product-price">PKR ${product.price.toLocaleString()}</div>
        </div>
        <div class="product-footer">
          <button class="add-cart" onclick="addToCart(${product.id})">Add to Cart</button>
          <button class="wishlist-btn" onclick="showToast('Added to wishlist ♥')">♡</button>
        </div>
      </div>
    `).join('');
  } catch (error) {
    console.error('Error rendering products:', error);
    showToast('Error loading products');
  }
}

function addToCart(productId) {
  try {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) {
      console.error('Product not found:', productId);
      return;
    }
    
    const existingItem = appState.cart.find(item => item.id === productId);
    if (existingItem) {
      existingItem.qty++;
    } else {
      appState.cart.push({ ...product, qty: 1 });
    }
    
    updateCart();
    saveCart();
    showToast(`${product.emoji} ${escapeHtml(product.name)} added!`);
  } catch (error) {
    console.error('Error adding to cart:', error);
    showToast('Error adding item to cart');
  }
}

function updateCart() {
  try {
    const count = appState.cart.reduce((sum, item) => sum + item.qty, 0);
    const total = appState.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    
    document.getElementById('cart-count').textContent = count;
    document.getElementById('cartTotal').textContent = 'PKR ' + total.toLocaleString();
    
    const cartItemsContainer = document.getElementById('cartItems');
    if (!cartItemsContainer) return;
    
    if (appState.cart.length === 0) {
      cartItemsContainer.innerHTML = '<div class="cart-empty">Your cart is empty.<br><br>Start shopping ✨</div>';
      return;
    }
    
    cartItemsContainer.innerHTML = appState.cart.map(item => `
      <div class="cart-item">
        <div class="ci-emoji">${item.emoji}</div>
        <div class="ci-info">
          <div class="ci-name">${escapeHtml(item.name)}</div>
          <div class="ci-price">PKR ${item.price.toLocaleString()}</div>
          <div class="ci-qty">
            <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
          </div>
        </div>
        <button class="ci-remove" onclick="removeItem(${item.id})">✕</button>
      </div>
    `).join('');
  } catch (error) {
    console.error('Error updating cart:', error);
  }
}

function changeQty(productId, delta) {
  try {
    const item = appState.cart.find(i => i.id === productId);
    if (item) {
      item.qty += delta;
      if (item.qty <= 0) {
        removeItem(productId);
      } else {
        updateCart();
        saveCart();
      }
    }
  } catch (error) {
    console.error('Error changing quantity:', error);
  }
}

function removeItem(productId) {
  try {
    appState.cart = appState.cart.filter(item => item.id !== productId);
    updateCart();
    saveCart();
  } catch (error) {
    console.error('Error removing item:', error);
  }
}

function openCart(event) {
  if (event) event.preventDefault();
  document.getElementById('cart-sidebar')?.classList.add('open');
  document.getElementById('overlay')?.classList.add('show');
}

function closeCart() {
  document.getElementById('cart-sidebar')?.classList.remove('open');
  document.getElementById('overlay')?.classList.remove('show');
}

function checkout() {
  try {
    if (appState.cart.length === 0) {
      showToast(CONFIG.messages.cartEmpty);
      return;
    }
    
    showToast(CONFIG.messages.orderPlaced);
    appState.cart = [];
    updateCart();
    saveCart();
    closeCart();
  } catch (error) {
    console.error('Error during checkout:', error);
    showToast('Error processing checkout');
  }
}

// ============================================================
// BOOKING
// ============================================================

function submitBooking() {
  try {
    const form = document.querySelector('.booking-form');
    if (!form) return;
    
    const formData = {
      firstName: form.querySelector('input[type="text"]')?.value,
      lastName: form.querySelectorAll('input[type="text"]')[1]?.value,
      email: form.querySelector('input[type="email"]')?.value,
      phone: form.querySelector('input[type="tel"]')?.value
    };
    
    const validation = validateForm(formData);
    if (!validation.isValid) {
      showToast('Please fill all required fields correctly');
      return;
    }
    
    showToast(CONFIG.messages.bookingConfirmed);
    form.reset();
  } catch (error) {
    console.error('Error submitting booking:', error);
    showToast('Error submitting booking');
  }
}

// ============================================================
// AI GENERATOR - IMPORTANT SECURITY NOTE
// ============================================================
// DO NOT expose API keys in frontend code!
// This function should call your backend instead:
// POST /api/generate-art { sign1, sign2, style, prompt }

async function generateAIArt() {
  try {
    const sign1 = document.getElementById('sign1')?.value;
    const sign2 = document.getElementById('sign2')?.value;
    const prompt = document.getElementById('aiPrompt')?.value;
    const style = document.getElementById('aiStyle')?.value;
    
    if (!sign1 || !sign2) {
      showToast(CONFIG.messages.selectBothSigns);
      return;
    }
    
    showLoading(true);
    
    // BACKEND CALL (replace with your API endpoint)
    const response = await fetch('/api/generate-art', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sign1, sign2, style,
        prompt: prompt || 'a romantic, celestial couple portrait'
      })
    });
    
    if (!response.ok) throw new Error('API request failed');
    
    const data = await response.json();
    displayAIResult(data);
    
  } catch (error) {
    console.error('Error generating art:', error);
    showToast(CONFIG.messages.aiGenerationError);
  } finally {
    showLoading(false);
  }
}

function displayAIResult(data) {
  try {
    const sign1 = document.getElementById('sign1')?.value || '';
    const sign2 = document.getElementById('sign2')?.value || '';
    const style = document.getElementById('aiStyle')?.value || '';
    
    const sign1Name = sign1.replace(/[♈♉♊♋♌♍♎♏♐♑♒♓]\s*/, '');
    const sign2Name = sign2.replace(/[♈♉♊♋♌♍♎♏♐♑♒♓]\s*/, '');
    
    document.getElementById('aiArtEmoji').textContent = `${Object.values(ZODIAC_SYMBOLS)[Object.keys(ZODIAC_SYMBOLS).indexOf(sign1Name)] || '✨'} ${Object.values(ZODIAC_SYMBOLS)[Object.keys(ZODIAC_SYMBOLS).indexOf(sign2Name)] || '💫'}`;
    document.getElementById('aiArtTitle').textContent = `${sign1Name} × ${sign2Name} — ${style}`;
    document.getElementById('aiArtDesc').textContent = data.description || 'Your cosmic artwork';
    
    document.getElementById('aiResult')?.classList.add('visible');
  } catch (error) {
    console.error('Error displaying AI result:', error);
  }
}

function showLoading(isLoading) {
  document.getElementById('aiLoading')?.classList.toggle('visible', isLoading);
  document.getElementById('aiResult')?.classList.toggle('visible', !isLoading);
}

function orderPrint() {
  try {
    const items = [
      { e: '📱', n: 'Phone Cover', p: 'PKR 1,299' },
      { e: '🥤', n: 'Tumbler', p: 'PKR 2,499' },
      { e: '🍶', n: 'Water Bottle', p: 'PKR 1,899' },
      { e: '🧥', n: 'Hoodie', p: 'PKR 5,999' },
      { e: '👚', n: 'T-Shirt', p: 'PKR 2,999' }
    ];
    
    const printItems = document.getElementById('printItems');
    if (!printItems) return;
    
    printItems.innerHTML = items.map(item => `
      <div onclick="selectPrint(this)" style="background:var(--glass);border:1px solid var(--border);padding:1rem;text-align:center;cursor:pointer;transition:all .3s;border-radius:8px;">
        <div style="font-size:2rem;margin-bottom:.3rem;">${item.e}</div>
        <div style="font-family:'Cinzel Decorative',serif;font-size:.65rem;color:var(--white);margin-bottom:.2rem;">${item.n}</div>
        <div style="font-family:'Space Mono',monospace;font-size:.6rem;color:var(--gold);">${item.p}</div>
      </div>
    `).join('');
    
    document.getElementById('orderModal')?.classList.add('open');
  } catch (error) {
    console.error('Error opening print dialog:', error);
  }
}

function selectPrint(element) {
  try {
    document.querySelectorAll('#printItems > div').forEach(el => {
      el.style.borderColor = 'var(--border)';
      el.style.background = 'var(--glass)';
    });
    element.style.borderColor = 'var(--gold)';
    element.style.background = 'rgba(245,200,66,.1)';
  } catch (error) {
    console.error('Error selecting print:', error);
  }
}

function confirmPrintOrder() {
  try {
    closeModal('orderModal');
    showToast('🎉 Print order sent! We\'ll WhatsApp you within 24hrs.');
  } catch (error) {
    console.error('Error confirming print order:', error);
  }
}

function sendToUs() {
  showToast('📧 Artwork sent to hello@starsoda.pk!');
}

function closeModal(modalId) {
  document.getElementById(modalId)?.classList.remove('open');
}

// ============================================================
// LIVE CHAT
// ============================================================

const BOT_REPLIES = [
  { keys: ['hello', 'hi', 'hey'], reply: 'Hello, cosmic sipper! ⭐ How can I help you today?' },
  { keys: ['flavor', 'soda', 'drink', 'taste'], reply: 'We have 12 zodiac flavors! Each sign has its own unique taste.' },
  { keys: ['merch', 'merchandise', 'hoodie', 'shirt', 'tumbler'], reply: 'We have amazing merchandise! Phone covers, tumblers, hoodies, and more.' },
  { keys: ['order', 'buy', 'cart', 'purchase'], reply: 'Add items to cart from our Shop section and checkout!' },
  { keys: ['event', 'party', 'launch', 'pop-up'], reply: 'Check out our upcoming events in Karachi!' },
  { keys: ['book', 'reserve', 'reservation'], reply: 'Head to our Book Now section to reserve your spot!' }
];

function toggleChat() {
  try {
    appState.chatOpen = !appState.chatOpen;
    const chatWindow = document.getElementById('chat-window');
    if (!chatWindow) return;
    
    chatWindow.classList.toggle('open');
    document.querySelector('.chat-notif')?.style.property === 'display' ? 'none' : '';
  } catch (error) {
    console.error('Error toggling chat:', error);
  }
}

async function sendChat() {
  try {
    const input = document.getElementById('chatInput');
    if (!input) return;
    
    const message = input.value.trim();
    if (!message) return;
    
    addMessage(message, 'user');
    input.value = '';
    
    // Find appropriate bot reply
    const lowerMsg = message.toLowerCase();
    let reply = 'Great question! Email hello@starsoda.pk or WhatsApp +92 300 000 0000';
    
    for (const { keys, reply: botReply } of BOT_REPLIES) {
      if (keys.some(key => lowerMsg.includes(key))) {
        reply = botReply;
        break;
      }
    }
    
    setTimeout(() => addMessage(reply, 'bot'), 600);
  } catch (error) {
    console.error('Error sending chat:', error);
  }
}

function addMessage(text, type) {
  try {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;
    
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const messageEl = document.createElement('div');
    messageEl.className = `msg ${type}`;
    messageEl.innerHTML = `${escapeHtml(text)}<div class="msg-time">${time}</div>`;
    
    chatMessages.appendChild(messageEl);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  } catch (error) {
    console.error('Error adding message:', error);
  }
}

// ============================================================
// NOTIFICATIONS
// ============================================================

function showToast(message) {
  try {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => toast.classList.remove('show'), 3200);
  } catch (error) {
    console.error('Error showing toast:', error);
  }
}

// ============================================================
// SCROLL ANIMATIONS
// ============================================================

function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = `fadeUp .6s ease ${(index % 5) * 0.08}s both`;
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.flavor-card, .event-card, .booking-info-card, .gallery-item, .product-card').forEach(el => {
    observer.observe(el);
  });
}

// ============================================================
// UTILITY FUNCTIONS
// ============================================================

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ============================================================
// INITIALIZATION
// ============================================================

function initializeApp() {
  try {
    initCursor();
    initializeCart();
    setupNavigation();
    setupScrollAnimations();
    renderProducts(PRODUCTS);
    
    console.log('✨ Star Soda app initialized successfully');
  } catch (error) {
    console.error('Error initializing app:', error);
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
