// Tayyabi Stores - Common Functions

// Theme management
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeIcon();
}

function updateThemeIcon() {
  const isDark = document.documentElement.classList.contains('dark');
  const themeBtn = document.querySelector('.theme-toggle');
  if (themeBtn) {
    themeBtn.innerHTML = isDark ? 
      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>` :
      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  }
}

// Render navbar with theme toggle
function renderNavbar(activePage = '') {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  
  const isDark = document.documentElement.classList.contains('dark');
  const themeIcon = isDark ? 
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>` :
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  
  navbar.innerHTML = `
    <nav class="navbar">
      <div class="container">
        <a href="index.html" class="logo">
          Tayyabi Stores
          <span>Premium Bath Solutions</span>
        </a>
        <ul class="nav-links">
          <li><a href="index.html" class="${activePage === 'home' ? 'active' : ''}">Home</a></li>
          <li><a href="products.html" class="${activePage === 'products' ? 'active' : ''}">Products</a></li>
          <li><a href="brands.html" class="${activePage === 'brands' ? 'active' : ''}">Brands</a></li>
          <li><a href="gallery.html" class="${activePage === 'gallery' ? 'active' : ''}">Gallery</a></li>
          <li><a href="contact.html" class="${activePage === 'contact' ? 'active' : ''}">Contact</a></li>
        </ul>
        <div class="nav-actions">
          <button class="theme-toggle" onclick="toggleTheme()" title="Toggle dark mode">
            ${themeIcon}
          </button>
          <a href="tel:+919419002090" class="call-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Call Now
          </a>
        </div>
      </div>
    </nav>
  `;
}

// Render footer
function renderFooter() {
  const footer = document.getElementById('footer');
  if (!footer) return;
  
  footer.innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <h4>About Us</h4>
            <p style="color: rgba(255,255,255,0.7); font-size: 0.875rem; line-height: 1.6;">
              Tayyabi Stores is your trusted destination for premium sanitary ware and plumbing solutions. 
              Authorized dealers for top brands since 1990.
            </p>
          </div>
          <div class="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="products.html">Products</a></li>
              <li><a href="brands.html">Our Brands</a></li>
              <li><a href="gallery.html">Gallery</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Our Brands</h4>
            <ul>
              <li><a href="brand-detail.html?brand=jaquar">Jaquar</a></li>
              <li><a href="brand-detail.html?brand=artize">Artize</a></li>
              <li><a href="brand-detail.html?brand=essco">Essco</a></li>
              <li><a href="brand-detail.html?brand=astral">Astral</a></li>
              <li><a href="brand-detail.html?brand=zoloto">Zoloto</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contact Info</h4>
            <ul>
              <li style="color: rgba(255,255,255,0.7);">Tayyabi Stores</li>
              <li style="color: rgba(255,255,255,0.7);">Fateh Kadal, Srinagar</li>
              <li style="color: rgba(255,255,255,0.7);">Jammu & Kashmir, India</li>
              <li><a href="tel:+919419002090">+91 9419002090</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} Tayyabi Stores. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
}

// Chatbot functionality
const chatbotKnowledge = {
  greeting: "Hello! Welcome to Tayyabi Stores. I'm here to help you find the perfect sanitary ware and plumbing products. How can I assist you today?",
  
  responses: {
    // Store info
    location: "We're located at Fateh Kadal, Srinagar, Jammu & Kashmir, India - 190001. Come visit us!",
    address: "We're located at Fateh Kadal, Srinagar, Jammu & Kashmir, India - 190001. Come visit us!",
    hours: "Our business hours are:\n- Monday to Saturday: 9:00 AM - 7:00 PM\n- Sunday: 10:00 AM - 2:00 PM",
    timing: "Our business hours are:\n- Monday to Saturday: 9:00 AM - 7:00 PM\n- Sunday: 10:00 AM - 2:00 PM",
    contact: "You can reach us at:\n- Phone: +91 9419002090 or +91 9419003090\n- Email: info@tayyabistore.com\n- Visit: Fateh Kadal, Srinagar",
    phone: "Call us at +91 9419002090 or +91 9419003090. We're happy to help!",
    
    // Brands
    brands: "We are authorized dealers for 10 premium brands:\n- Jaquar (Bathroom fittings)\n- Artize (Luxury sanitaryware)\n- Essco (Quality bath products)\n- Astral (Pipes & plumbing)\n- Zoloto (Valves)\n- Nirali (Kitchen sinks)\n- Faber (Kitchen appliances)\n- Wilo Pumps (Water pumps)\n- Ardex Endura (Building materials)\n- Zero B (Water purifiers)",
    jaquar: "Jaquar offers premium bathroom fittings including faucets, showers, sanitaryware, water heaters, whirlpools, bathtubs, spas, saunas, and shower enclosures. We have 15 product categories from Jaquar.",
    artize: "Artize is Jaquar's luxury brand featuring designer faucets, showers, sanitaryware, wellness products, and flushing systems. Born from art, these products combine aesthetics with functionality.",
    essco: "Essco offers quality bath products at economical prices - faucets, sanitaryware, showers, cisterns, bathroom accessories, and water heaters. Great value for your home!",
    astral: "Astral provides comprehensive piping solutions - UPVC/CPVC pipes, sewerage systems, water tanks, industrial pipes, fire sprinkler pipes, and solvent cement. All ISI certified!",
    zoloto: "Zoloto specializes in valves - globe valves, gate valves, ball valves, butterfly valves, check valves, pressure reducing valves, and more. Trusted for quality and durability.",
    nirali: "Nirali is India's No.1 kitchen sink brand. We stock their premium stainless steel sinks, floor drains, and kitchen accessories.",
    faber: "Faber offers kitchen appliances - chimneys, gas hobs, built-in ovens, dishwashers, water heaters, water purifiers, and small appliances.",
    wilo: "Wilo Pumps provides German-engineered pumping solutions for water supply, drainage, heating systems, and cooling applications.",
    ardex: "Ardex Endura offers professional building materials - tile adhesives, waterproofing systems, flooring solutions, and concrete repair products.",
    zerob: "Zero B is a leading water purification brand. We offer:\n- RO Water Purifiers\n- UV Water Purifiers\n- Iron Remover\n- Water Softeners\n- Non Electric Water Purifiers\n- Water Purifiers\n- Heat Pump\nClean, safe drinking water for your family!",
    "zero b": "Zero B is a leading water purification brand. We offer:\n- RO Water Purifiers\n- UV Water Purifiers\n- Iron Remover\n- Water Softeners\n- Non Electric Water Purifiers\n- Water Purifiers\n- Heat Pump\nClean, safe drinking water for your family!",
    purifier: "For water purifiers, we recommend Zero B - they offer RO, UV, iron remover, water softeners, non-electric purifiers, and heat pumps. Also check Faber water purifiers. All products ensure safe, clean drinking water.",
    
    // Categories
    bathroom: "For bathroom fittings, we recommend:\n- Jaquar for premium faucets & showers\n- Artize for luxury designs\n- Essco for value products\nWe have faucets, showers, sanitaryware, water heaters, bathtubs, and accessories.",
    kitchen: "For kitchen solutions:\n- Nirali for sinks & drains\n- Faber for chimneys & appliances\nWe stock kitchen sinks, chimneys, gas hobs, dishwashers, and more.",
    plumbing: "For plumbing needs:\n- Astral for pipes & fittings\n- Zoloto for valves\n- Wilo for water pumps\nAll ISI certified products available.",
    
    // Products
    faucets: "We have faucets from Jaquar, Artize, and Essco - ranging from luxury designer pieces to economical options. All with warranty!",
    showers: "Check out our shower collection - rainfall showers, hand showers, shower panels, and cloud showers from Jaquar and Artize.",
    toilets: "We stock premium sanitaryware (WCs, basins, urinals) from Jaquar, Artize, and Essco. Modern designs with easy maintenance.",
    sinks: "Nirali kitchen sinks are India's #1 choice. Premium stainless steel, rust-resistant, modern designs available.",
    pipes: "Astral pipes cover all needs - plumbing, sewerage, agriculture, industrial. UPVC/CPVC, ISI certified, long-lasting.",
    valves: "Zoloto valves for every application - globe, gate, ball, butterfly, check valves. Brass construction, leak-proof.",
    pumps: "Wilo water pumps for water supply, drainage, heating. Energy efficient, reliable German engineering.",
    
    // Services
    warranty: "All our products come with manufacturer warranty. Jaquar products typically have 7-15 year warranty. Please check specific product details.",
    delivery: "Yes, we offer delivery services in Srinagar and surrounding areas. Contact us for delivery options and charges.",
    installation: "We can recommend trusted plumbers and installers in Srinagar. Contact us for references.",
    
    // Pricing
    price: "Prices vary by product and brand. Jaquar/Artize are premium, while Essco offers budget-friendly options. Visit our store or call for specific pricing.",
    cost: "Prices vary by product and brand. Jaquar/Artize are premium, while Essco offers budget-friendly options. Visit our store or call for specific pricing.",
    
    // Help
    help: "I can help you with:\n- Finding products by category or brand\n- Store information (location, hours, contact)\n- Brand details and recommendations\n- General product inquiries\nWhat would you like to know?",
    
    // Default
    default: "I'm not sure about that, but I'd be happy to help with product information, store details, or brand recommendations. You can also call us at +91 9419002090 for specific queries."
  }
};

function getBotResponse(message) {
  const msg = message.toLowerCase();
  const responses = chatbotKnowledge.responses;
  
  // Check for keywords
  if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
    return chatbotKnowledge.greeting;
  }
  if (msg.includes('location') || msg.includes('where') || msg.includes('address') || msg.includes('find you')) {
    return responses.location;
  }
  if (msg.includes('hour') || msg.includes('timing') || msg.includes('open') || msg.includes('close')) {
    return responses.hours;
  }
  if (msg.includes('contact') || msg.includes('reach') || msg.includes('email')) {
    return responses.contact;
  }
  if (msg.includes('phone') || msg.includes('call') || msg.includes('number')) {
    return responses.phone;
  }
  if (msg.includes('brand') || msg.includes('dealer')) {
    return responses.brands;
  }
  if (msg.includes('jaquar')) {
    return responses.jaquar;
  }
  if (msg.includes('artize')) {
    return responses.artize;
  }
  if (msg.includes('essco')) {
    return responses.essco;
  }
  if (msg.includes('astral')) {
    return responses.astral;
  }
  if (msg.includes('zoloto')) {
    return responses.zoloto;
  }
  if (msg.includes('nirali')) {
    return responses.nirali;
  }
  if (msg.includes('faber')) {
    return responses.faber;
  }
  if (msg.includes('wilo') || msg.includes('pump')) {
    return responses.wilo;
  }
  if (msg.includes('ardex') || msg.includes('endura')) {
    return responses.ardex;
  }
  if (msg.includes('zero b') || msg.includes('zerob')) {
    return responses.zerob;
  }
  if (msg.includes('purifier') || msg.includes('water filter') || msg.includes('ro ')) {
    return responses.purifier;
  }
  if (msg.includes('bathroom') || msg.includes('bath')) {
    return responses.bathroom;
  }
  if (msg.includes('kitchen')) {
    return responses.kitchen;
  }
  if (msg.includes('plumb') || msg.includes('pipe')) {
    return responses.plumbing;
  }
  if (msg.includes('faucet') || msg.includes('tap')) {
    return responses.faucets;
  }
  if (msg.includes('shower')) {
    return responses.showers;
  }
  if (msg.includes('toilet') || msg.includes('wc') || msg.includes('sanitaryware')) {
    return responses.toilets;
  }
  if (msg.includes('sink')) {
    return responses.sinks;
  }
  if (msg.includes('valve')) {
    return responses.valves;
  }
  if (msg.includes('warranty') || msg.includes('guarantee')) {
    return responses.warranty;
  }
  if (msg.includes('deliver') || msg.includes('shipping')) {
    return responses.delivery;
  }
  if (msg.includes('install')) {
    return responses.installation;
  }
  if (msg.includes('price') || msg.includes('cost') || msg.includes('rate')) {
    return responses.price;
  }
  if (msg.includes('help') || msg.includes('what can you')) {
    return responses.help;
  }
  if (msg.includes('thank')) {
    return "You're welcome! If you have any more questions, feel free to ask. You can also visit our store or call us at +91 9419002090.";
  }
  
  return responses.default;
}

function renderChatbot() {
  const chatbotHtml = `
    <div class="chatbot-container" id="chatbot">
      <div class="chatbot-window" id="chatbot-window">
        <div class="chatbot-header">
          <h3>Tayyabi Stores Assistant</h3>
          <button class="chatbot-close" onclick="toggleChatbot()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <div class="chatbot-messages" id="chat-messages">
          <div class="chat-message bot">${chatbotKnowledge.greeting}</div>
        </div>
        <div class="chat-suggestions" id="chat-suggestions">
          <button class="chat-suggestion" onclick="sendSuggestion('What brands do you sell?')">Our Brands</button>
          <button class="chat-suggestion" onclick="sendSuggestion('Where is your store located?')">Location</button>
          <button class="chat-suggestion" onclick="sendSuggestion('What are your business hours?')">Hours</button>
          <button class="chat-suggestion" onclick="sendSuggestion('Tell me about bathroom fittings')">Bathroom</button>
        </div>
        <div class="chatbot-input">
          <input type="text" id="chat-input" placeholder="Type your message..." onkeypress="handleChatKeypress(event)">
          <button onclick="sendChatMessage()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
            </svg>
          </button>
        </div>
      </div>
      <button class="chatbot-toggle" onclick="toggleChatbot()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </button>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', chatbotHtml);
}

function toggleChatbot() {
  const window = document.getElementById('chatbot-window');
  window.classList.toggle('open');
  if (window.classList.contains('open')) {
    document.getElementById('chat-input').focus();
  }
}

function sendChatMessage() {
  const input = document.getElementById('chat-input');
  const message = input.value.trim();
  if (!message) return;
  
  const messagesContainer = document.getElementById('chat-messages');
  
  // Add user message
  messagesContainer.innerHTML += `<div class="chat-message user">${escapeHtml(message)}</div>`;
  input.value = '';
  
  // Get bot response
  const response = getBotResponse(message);
  
  // Add bot response with slight delay
  setTimeout(() => {
    messagesContainer.innerHTML += `<div class="chat-message bot">${response.replace(/\n/g, '<br>')}</div>`;
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, 300);
  
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function sendSuggestion(text) {
  document.getElementById('chat-input').value = text;
  sendChatMessage();
}

function handleChatKeypress(event) {
  if (event.key === 'Enter') {
    sendChatMessage();
  }
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Render product card
function renderProductCard(product) {
  const productUrl = product.productUrl || brandWebsites[product.brand] || '#';
  console.log('Product:', product.name, 'URL:', productUrl, 'Has productUrl:', !!product.productUrl);
  return `
    <div class="product-card" data-product-id="${product.id}">
      <img src="${product.image}" alt="${product.name}" class="product-image" 
           onerror="this.outerHTML='<div class=\\'img-placeholder\\'>${product.name}</div>'">
      <div class="product-content">
        <span class="product-brand">${product.brand}</span>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-category">${product.category}</p>
        <div class="product-features">
          ${product.features.slice(0, 3).map(f => `<span class="feature-tag">${f}</span>`).join('')}
        </div>
        <a href="${productUrl}" target="_blank" rel="noopener noreferrer" class="brand-link-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
          View Product
        </a>
      </div>
    </div>
  `;
}

// Render brand card
function renderBrandCard(brand) {
  const productCount = getProductsByBrand(brand.name).length;
  return `
    <a href="brand-detail.html?brand=${brand.id}" class="brand-card">
      <img src="${brand.logo}" alt="${brand.name}" class="brand-logo"
           onerror="this.outerHTML='<div class=\\'brand-logo\\' style=\\'display:flex;align-items:center;justify-content:center;font-weight:bold;color:var(--primary)\\'>${brand.name.charAt(0)}</div>'">
      <div class="brand-info">
        <h3>${brand.name}</h3>
        <p>${brand.description}</p>
        <span class="brand-count">${productCount} Products</span>
      </div>
    </a>
  `;
}

// Get URL parameters
function getUrlParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Initialize page
function initPage(activePage) {
  initTheme();
  renderNavbar(activePage);
  renderFooter();
  renderChatbot();
}
