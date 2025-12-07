// ==========================================
// PROFILE - JAVASCRIPT
// ==========================================

// Load purchases from localStorage
function loadPurchases() {
  const purchases = JSON.parse(localStorage.getItem('purchases') || '[]');
  const ticketsGrid = document.getElementById('ticketsGrid');
  const emptyTickets = document.getElementById('emptyTickets');
  
  if (purchases.length === 0) {
    ticketsGrid.style.display = 'none';
    emptyTickets.style.display = 'block';
    return;
  }
  
  ticketsGrid.style.display = 'grid';
  emptyTickets.style.display = 'none';
  
  let ticketsHTML = '';
  
  purchases.forEach((purchase, index) => {
    const seatsList = purchase.seats.map(seat => 
      `<span class="seat-badge ${seat.seatType}">${seat.seatLabel}</span>`
    ).join('');
    
    ticketsHTML += `
      <div class="ticket-card" onclick="showTicketDetail(${index})">
        <div class="ticket-header">
          <h3>${purchase.event}</h3>
          <p>${purchase.date}</p>
        </div>
        <div class="ticket-body">
          <div class="ticket-info">
            <div class="ticket-info-item">
              <i class="fas fa-map-marker-alt"></i>
              ${purchase.location}
            </div>
            <div class="ticket-info-item">
              <i class="fas fa-calendar"></i>
              Satın Alındı: ${new Date(purchase.purchaseDate).toLocaleDateString('tr-TR')}
            </div>
          </div>
          
          <div class="ticket-seats">
            <h4>Koltuklar (${purchase.seats.length} adet)</h4>
            <div class="seats-list">
              ${seatsList}
            </div>
          </div>
          
          <div class="ticket-footer">
            <div class="ticket-total">₺${purchase.total}</div>
            <button class="ticket-qr-btn" onclick="event.stopPropagation(); showTicketDetail(${index})">
              <i class="fas fa-qrcode"></i>
              QR Kod
            </button>
          </div>
        </div>
      </div>
    `;
  });
  
  ticketsGrid.innerHTML = ticketsHTML;
}

// Show ticket detail with QR code
function showTicketDetail(index) {
  const purchases = JSON.parse(localStorage.getItem('purchases') || '[]');
  const purchase = purchases[index];
  
  if (!purchase) return;
  
  const modal = document.getElementById('ticketModal');
  const modalBody = document.getElementById('modalBody');
  
  const seatsList = purchase.seats.map(seat => 
    `<span class="seat-badge ${seat.seatType}">${seat.seatLabel}</span>`
  ).join('');
  
  // Generate unique ticket ID
  const ticketId = `TICKET-${Date.now()}-${index}`;
  
  modalBody.innerHTML = `
    <div class="ticket-detail">
      <h3>${purchase.event}</h3>
      
      <div class="ticket-detail-info">
        <p><i class="far fa-calendar"></i> ${purchase.date}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${purchase.location}</p>
        <p><i class="fas fa-chair"></i> Koltuklar: ${seatsList}</p>
        <p><i class="fas fa-money-bill-wave"></i> Toplam: ₺${purchase.total}</p>
      </div>
      
      <div class="qr-code-container" id="qrcode-${index}"></div>
      
      <p class="ticket-detail-note">
        <i class="fas fa-info-circle"></i>
        Bu QR kodu etkinlik girişinde gösteriniz
      </p>
    </div>
  `;
  
  modal.classList.add('active');
  
  // Generate QR code
  setTimeout(() => {
    const qrContainer = document.getElementById(`qrcode-${index}`);
    if (!qrContainer) return;
    
    qrContainer.innerHTML = ''; // Clear previous QR code
    
    try {
        if (typeof QRCode === 'undefined') {
            qrContainer.innerHTML = '<div style="color: red; padding: 20px; border: 1px dashed red;">QR Kodu Kütüphanesi Yüklenemedi</div>';
            console.error('QRCode library is not loaded!');
            return;
        }

        // Use a guaranteed sample text as requested
        const qrText = ticketId || "SAMPLE-TICKET-12345678";

        new QRCode(qrContainer, {
        text: qrText,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
        });
    } catch (e) {
        console.error('QR Code generation error:', e);
        qrContainer.innerHTML = '<div style="padding: 20px;">QR Kod Oluşturulamadı</div>';
    }
  }, 100);
}

// Close modal
const modalClose = document.getElementById('modalClose');
const modal = document.getElementById('ticketModal');

if (modalClose) {
  modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
  });
}

// Close modal on outside click
if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
}

// Initialize
loadPurchases();

// Clear all tickets
function clearTickets() {
  const purchases = JSON.parse(localStorage.getItem('purchases') || '[]');
  
  if (purchases.length === 0) {
    alert('Silinecek biletiniz bulunmuyor.');
    return;
  }

  if (confirm('Tüm biletlerinizi silmek istediğinize emin misiniz? Bu işlem geri alınamaz.')) {
    localStorage.removeItem('purchases');
    loadPurchases();
    // Show success message (optional)
  }
}

// Make functions global
window.showTicketDetail = showTicketDetail;
window.clearTickets = clearTickets;
