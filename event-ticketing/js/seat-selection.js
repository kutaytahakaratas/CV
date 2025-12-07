// ==========================================
// SEAT SELECTION - JAVASCRIPT
// ==========================================

// State
let selectedSeats = [];
let cart = [];

// Seat prices
const seatPrices = {
  normal: 350,
  vip: 650
};

// Generate seats
function generateSeats() {
  const seatsGrid = document.getElementById('seatsGrid');
  const rows = 10;
  const seatsPerRow = 12;
  
  for (let row = 0; row < rows; row++) {
    for (let seat = 0; seat < seatsPerRow; seat++) {
      const seatElement = document.createElement('div');
      const seatNumber = row * seatsPerRow + seat + 1;
      const rowLetter = String.fromCharCode(65 + row); // A, B, C, etc.
      const seatLabel = `${rowLetter}${seat + 1}`;
      
      // Determine seat type
      let seatType = 'normal';
      let seatClass = 'available';
      
      // VIP seats (first 3 rows)
      if (row < 3) {
        seatType = 'vip';
        seatClass = 'available vip';
      }
      
      // Random occupied seats
      if (Math.random() < 0.3) {
        seatClass = 'occupied';
      }
      
      seatElement.className = `seat ${seatClass}`;
      seatElement.dataset.seatNumber = seatNumber;
      seatElement.dataset.seatLabel = seatLabel;
      seatElement.dataset.seatType = seatType;
      seatElement.dataset.price = seatPrices[seatType];
      seatElement.textContent = seat + 1;
      
      // Add click event
      if (!seatElement.classList.contains('occupied')) {
        seatElement.addEventListener('click', handleSeatClick);
      }
      
      seatsGrid.appendChild(seatElement);
    }
  }
}

// Handle seat click
function handleSeatClick(e) {
  const seat = e.currentTarget;
  const seatNumber = seat.dataset.seatNumber;
  const seatLabel = seat.dataset.seatLabel;
  const seatType = seat.dataset.seatType;
  const price = parseInt(seat.dataset.price);
  
  // Add zoom animation
  seat.classList.add('zooming');
  setTimeout(() => {
    seat.classList.remove('zooming');
  }, 400);
  
  // Toggle selection
  if (seat.classList.contains('selected')) {
    // Deselect
    seat.classList.remove('selected');
    removeFromCart(seatNumber);
  } else {
    // Select
    seat.classList.add('selected');
    addToCart({
      seatNumber,
      seatLabel,
      seatType,
      price
    });
  }
}

// Add to cart
function addToCart(seatInfo) {
  cart.push(seatInfo);
  updateCart();
  
  // Add to cart animation
  animateAddToCart();
}

// Remove from cart
function removeFromCart(seatNumber) {
  cart = cart.filter(item => item.seatNumber !== seatNumber);
  updateCart();
}

// Update cart display
function updateCart() {
  const cartContent = document.getElementById('cartContent');
  const totalPrice = document.getElementById('totalPrice');
  const checkoutBtn = document.getElementById('checkoutBtn');
  
  if (cart.length === 0) {
    cartContent.innerHTML = `
      <div class="empty-cart">
        <i class="fas fa-ticket-alt"></i>
        <p>Henüz koltuk seçmediniz</p>
      </div>
    `;
    totalPrice.textContent = '₺0';
    checkoutBtn.disabled = true;
  } else {
    let cartHTML = '';
    let total = 0;
    
    cart.forEach(item => {
      total += item.price;
      cartHTML += `
        <div class="cart-item">
          <div class="cart-item-info">
            <h4>Koltuk ${item.seatLabel}</h4>
            <p>${item.seatType === 'vip' ? 'VIP' : 'Normal'}</p>
          </div>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <div class="cart-item-price">₺${item.price}</div>
            <button class="cart-item-remove" onclick="removeSeatFromCart('${item.seatNumber}')">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
      `;
    });
    
    cartContent.innerHTML = cartHTML;
    totalPrice.textContent = `₺${total}`;
    checkoutBtn.disabled = false;
  }
}

// Remove seat from cart (called from HTML)
function removeSeatFromCart(seatNumber) {
  const seat = document.querySelector(`[data-seat-number="${seatNumber}"]`);
  if (seat) {
    seat.classList.remove('selected');
  }
  removeFromCart(seatNumber);
}

// Animate add to cart
function animateAddToCart() {
  // Simple visual feedback
  const cartHeader = document.querySelector('.cart-header');
  cartHeader.style.transform = 'scale(1.1)';
  setTimeout(() => {
    cartHeader.style.transform = 'scale(1)';
  }, 200);
}

// Checkout
const checkoutBtn = document.getElementById('checkoutBtn');
if (checkoutBtn) {
  checkoutBtn.addEventListener('click', () => {
    if (cart.length > 0) {
      // Save to localStorage
      const purchase = {
        event: 'Sezen Aksu Konseri',
        date: '15 Aralık 2024 - 21:00',
        location: 'Volkswagen Arena, İstanbul',
        seats: cart,
        total: cart.reduce((sum, item) => sum + item.price, 0),
        purchaseDate: new Date().toISOString()
      };
      
      // Get existing purchases
      let purchases = JSON.parse(localStorage.getItem('purchases') || '[]');
      purchases.push(purchase);
      localStorage.setItem('purchases', JSON.stringify(purchases));
      
      // Show success message
      alert(`Biletleriniz başarıyla satın alındı!\nToplam: ₺${purchase.total}\nBiletlerinizi profil sayfanızdan görüntüleyebilirsiniz.`);
      
      // Redirect to profile
      window.location.href = 'profile.html';
    }
  });
}

// Initialize
generateSeats();

// Make removeSeatFromCart global
window.removeSeatFromCart = removeSeatFromCart;
