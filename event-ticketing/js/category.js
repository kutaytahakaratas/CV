// ==========================================
// CATEGORY PAGE - JAVASCRIPT
// Kategori sayfası için etkinlik filtreleme
// ==========================================

// Kategori bilgileri
const categoryInfo = {
    'konser': {
        name: 'Konser',
        icon: 'fas fa-music',
        subtitle: 'En popüler konserler ve canlı müzik etkinlikleri',
        color: '#ff6b35'
    },
    'tiyatro': {
        name: 'Tiyatro',
        icon: 'fas fa-theater-masks',
        subtitle: 'Sahnede drama, komedi ve müzikal gösteriler',
        color: '#9b59b6'
    },
    'standup': {
        name: 'Stand-up',
        icon: 'fas fa-laugh',
        subtitle: 'Kahkahaların durmadığı komedi geceleri',
        color: '#f39c12'
    },
    'spor': {
        name: 'Spor',
        icon: 'fas fa-futbol',
        subtitle: 'Futbol, basketbol ve diğer spor etkinlikleri',
        color: '#27ae60'
    },
    'futbol': {
        name: 'Futbol',
        icon: 'fas fa-futbol',
        subtitle: 'Süper Lig ve uluslararası futbol maçları',
        color: '#27ae60'
    },
    'basketbol': {
        name: 'Basketbol',
        icon: 'fas fa-basketball-ball',
        subtitle: 'EuroLeague ve BSL basketbol maçları',
        color: '#e67e22'
    },
    'rock': {
        name: 'Rock',
        icon: 'fas fa-guitar',
        subtitle: 'Rock ve alternatif müzik konserleri',
        color: '#c0392b'
    },
    'rap': {
        name: 'Rap',
        icon: 'fas fa-microphone-alt',
        subtitle: 'Türkçe Rap ve Hip-Hop konserleri',
        color: '#8e44ad'
    },
    'elektronik': {
        name: 'Elektronik',
        icon: 'fas fa-headphones',
        subtitle: 'DJ performansları ve elektronik müzik partileri',
        color: '#3498db'
    },
    'festival': {
        name: 'Festival',
        icon: 'fas fa-campground',
        subtitle: 'Açık hava festivalleri ve özel etkinlikler',
        color: '#1abc9c'
    },
    'sergi': {
        name: 'Sergi',
        icon: 'fas fa-paint-brush',
        subtitle: 'Sanat sergileri ve müze etkinlikleri',
        color: '#e74c3c'
    },
    'teknoloji': {
        name: 'Teknoloji',
        icon: 'fas fa-laptop-code',
        subtitle: 'Tech konferansları ve gaming etkinlikleri',
        color: '#2980b9'
    },
    'opera': {
        name: 'Opera',
        icon: 'fas fa-music',
        subtitle: 'Klasik opera ve bale gösterileri',
        color: '#9b59b6'
    },
    'muzikal': {
        name: 'Müzikal',
        icon: 'fas fa-theater-masks',
        subtitle: 'Broadway tarzı müzikal gösteriler',
        color: '#e91e63'
    },
    'sinema': {
        name: 'Sinema',
        icon: 'fas fa-film',
        subtitle: 'Film gösterimleri ve sinema etkinlikleri',
        color: '#607d8b'
    }
};

// Tüm etkinlikler veritabanı (main.js'den kopyalandı)
const allEvents = [
    // ===== BUGÜN =====
    { id: 200, name: "Tarkan - Mega Konser", date: "2025-12-07", venue: "İstanbul - Volkswagen Arena", price: "₺850", image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400", category: "Konser" },
    { id: 201, name: "Duman - Kış Konseri", date: "2025-12-07", venue: "İstanbul - Küçükçiftlik", price: "₺650", image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400", category: "Rock" },
    { id: 202, name: "Ceza Rap Night", date: "2025-12-07", venue: "Ankara - Congresium", price: "₺400", image: "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?w=400", category: "Rap" },
    { id: 203, name: "Cem Yılmaz Show", date: "2025-12-07", venue: "İstanbul - Zorlu PSM", price: "₺700", image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800", category: "Stand-up" },
    { id: 204, name: "Fenerbahçe vs Galatasaray", date: "2025-12-07", venue: "İstanbul - Kadıköy", price: "₺900", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400", category: "Futbol" },
    { id: 205, name: "Van Gogh Dijital Sergi", date: "2025-12-07", venue: "İstanbul - Pera", price: "₺220", image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=400", category: "Sergi" },
    { id: 206, name: "Martin Garrix DJ Set", date: "2025-12-07", venue: "Bodrum - Beach Club", price: "₺1100", image: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=400", category: "Elektronik" },
    { id: 207, name: "Hamlet - Tiyatro", date: "2025-12-07", venue: "İstanbul - DT Sahne", price: "₺280", image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=400", category: "Tiyatro" },
    
    // ===== KONSERLER =====
    { id: 1, name: "Tarkan - Yeni Albüm Turnesi", date: "2025-12-08", venue: "İstanbul - Volkswagen Arena", price: "₺750", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400", category: "Konser" },
    { id: 2, name: "Sertab Erener - Evgit Gel", date: "2025-12-09", venue: "İzmir - İzmir Arena", price: "₺450", image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400", category: "Konser" },
    { id: 3, name: "Mabel Matiz Konseri", date: "2025-12-10", venue: "İstanbul - Bostancı", price: "₺550", image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400", category: "Konser" },
    { id: 4, name: "Ajda Pekkan Gala", date: "2025-12-11", venue: "İstanbul - Harbiye", price: "₺1200", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400", category: "Konser" },
    { id: 5, name: "Sezen Aksu - 40 Yıl", date: "2025-12-12", venue: "İstanbul - TT Stadyumu", price: "₺900", image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400", category: "Konser" },
    { id: 6, name: "Hadise - Aşk Turnesi", date: "2025-12-13", venue: "Antalya - Aspendos", price: "₺650", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400", category: "Konser" },
    { id: 7, name: "Kenan Doğulu Live", date: "2025-12-14", venue: "İstanbul - Jolly Joker", price: "₺400", image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=400", category: "Konser" },
    { id: 8, name: "Gülşen - Bangır Tour", date: "2025-12-15", venue: "Bodrum - Antik Tiyatro", price: "₺800", image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=400", category: "Konser" },
    { id: 9, name: "Sıla - Sahne Programı", date: "2025-12-16", venue: "Ankara - Congresium", price: "₺550", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400", category: "Konser" },
    { id: 10, name: "Teoman - Akustik", date: "2025-12-17", venue: "İstanbul - Zorlu PSM", price: "₺600", image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400", category: "Konser" },
    
    // ===== ROCK =====
    { id: 26, name: "Duman - 25. Yıl", date: "2025-12-08", venue: "İstanbul - Küçükçiftlik", price: "₺700", image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400", category: "Rock" },
    { id: 27, name: "Mor ve Ötesi", date: "2025-12-10", venue: "İzmir - Kültürpark", price: "₺400", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400", category: "Rock" },
    { id: 28, name: "Athena Rock Fest", date: "2025-12-12", venue: "İstanbul - Parkorman", price: "₺350", image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400", category: "Rock" },
    { id: 29, name: "Şebnem Ferah", date: "2025-12-14", venue: "Bursa - Açık Hava", price: "₺450", image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=400", category: "Rock" },
    { id: 30, name: "maNga Konseri", date: "2025-12-16", venue: "Ankara - ODTÜ", price: "₺300", image: "https://images.unsplash.com/photo-1508973379184-7517410fb0bc?w=400", category: "Rock" },
    
    // ===== RAP =====
    { id: 41, name: "Sagopa Kajmer", date: "2025-12-09", venue: "İstanbul - Harbiye", price: "₺500", image: "https://images.unsplash.com/photo-1571609710324-5a8bf0b14c18?w=400", category: "Rap" },
    { id: 42, name: "Ceza & Killa Hakan", date: "2025-12-11", venue: "Ankara - Congresium", price: "₺350", image: "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?w=400", category: "Rap" },
    { id: 43, name: "Ben Fero Tour", date: "2025-12-13", venue: "İstanbul - IF", price: "₺400", image: "https://images.unsplash.com/photo-1559519530-a6a5c33edea1?w=400", category: "Rap" },
    { id: 44, name: "Ezhel Live", date: "2025-12-15", venue: "Antalya - Expo", price: "₺450", image: "https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=400", category: "Rap" },
    { id: 45, name: "Şehinşah", date: "2025-12-17", venue: "İzmir - Fuar", price: "₺350", image: "https://images.unsplash.com/photo-1547355253-ff0740f6e8c1?w=400", category: "Rap" },
    
    // ===== ELEKTRONİK =====
    { id: 56, name: "David Guetta", date: "2025-12-31", venue: "Antalya - Regnum", price: "₺1500", image: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=400", category: "Elektronik" },
    { id: 57, name: "Martin Garrix", date: "2025-12-08", venue: "Bodrum - Beach Club", price: "₺1200", image: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=400", category: "Elektronik" },
    { id: 58, name: "Tiësto Club Life", date: "2025-12-12", venue: "İstanbul - Klein", price: "₺800", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400", category: "Elektronik" },
    { id: 59, name: "Calvin Harris", date: "2025-12-16", venue: "İstanbul - Life Park", price: "₺1000", image: "https://images.unsplash.com/photo-1504680177321-2e6a879aac86?w=400", category: "Elektronik" },
    { id: 60, name: "Deadmau5 Live", date: "2025-12-20", venue: "İstanbul - Zorlu", price: "₺900", image: "https://images.unsplash.com/photo-1485872299829-c673f5194813?w=400", category: "Elektronik" },
    
    // ===== TİYATRO =====
    { id: 68, name: "Müslüm Baba Müzikali", date: "2025-12-09", venue: "Ankara - CSO Ada", price: "₺400", image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=400", category: "Tiyatro" },
    { id: 69, name: "Hisseli Harikalar", date: "2025-12-11", venue: "İstanbul - Zorlu PSM", price: "₺350", image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=400", category: "Tiyatro" },
    { id: 70, name: "Kral Lear", date: "2025-12-13", venue: "Ankara - DT Sahne", price: "₺250", image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=400", category: "Tiyatro" },
    { id: 71, name: "Notre Dame Kamburu", date: "2025-12-15", venue: "İstanbul - Maximum", price: "₺500", image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=400", category: "Tiyatro" },
    { id: 72, name: "Cats Broadway", date: "2025-12-17", venue: "İstanbul - Zorlu", price: "₺600", image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=400", category: "Tiyatro" },
    
    // ===== STAND-UP =====
    { id: 88, name: "Cem Yılmaz Diamond", date: "2025-12-08", venue: "İstanbul - VW Arena", price: "₺600", image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800", category: "Stand-up" },
    { id: 89, name: "Ata Demirer Show", date: "2025-12-12", venue: "Ankara - Congresium", price: "₺400", image: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=800", category: "Stand-up" },
    { id: 90, name: "Güldür Güldür", date: "2025-12-16", venue: "İstanbul - MEB", price: "₺250", image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800", category: "Stand-up" },
    { id: 91, name: "Şahan Gökbakar", date: "2025-12-20", venue: "İzmir - Arena", price: "₺450", image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800", category: "Stand-up" },
    { id: 92, name: "Tolga Çevik", date: "2025-12-24", venue: "İstanbul - Zorlu", price: "₺350", image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800", category: "Stand-up" },
    
    // ===== FUTBOL =====
    { id: 98, name: "Galatasaray vs Fenerbahçe", date: "2025-12-08", venue: "İstanbul - RAMS Park", price: "₺800", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400", category: "Futbol" },
    { id: 99, name: "Fenerbahçe vs Beşiktaş", date: "2025-12-12", venue: "İstanbul - Kadıköy", price: "₺600", image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400", category: "Futbol" },
    { id: 100, name: "Beşiktaş vs Trabzon", date: "2025-12-16", venue: "İstanbul - Tüpraş", price: "₺500", image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=400", category: "Futbol" },
    { id: 101, name: "GS vs Trabzonspor", date: "2025-12-20", venue: "İstanbul - RAMS", price: "₺550", image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400", category: "Futbol" },
    { id: 102, name: "FB vs Galatasaray", date: "2025-12-24", venue: "İstanbul - Kadıköy", price: "₺900", image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400", category: "Futbol" },
    
    // ===== BASKETBOL =====
    { id: 108, name: "Fenerbahçe vs Efes", date: "2025-12-09", venue: "İstanbul - Ülker", price: "₺300", image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400", category: "Basketbol" },
    { id: 109, name: "Galatasaray vs FB", date: "2025-12-13", venue: "İstanbul - Sinan Erdem", price: "₺400", image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=400", category: "Basketbol" },
    { id: 110, name: "Efes vs Real Madrid", date: "2025-12-17", venue: "İstanbul - Sinan Erdem", price: "₺500", image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=400", category: "Basketbol" },
    { id: 111, name: "FB vs Barcelona", date: "2025-12-21", venue: "İstanbul - Ülker", price: "₺550", image: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?w=400", category: "Basketbol" },
    
    // ===== SERGİ =====
    { id: 132, name: "Van Gogh Immersive", date: "2025-12-08", venue: "İstanbul - Pera", price: "₺200", image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=400", category: "Sergi" },
    { id: 133, name: "Picasso Dijital", date: "2025-12-15", venue: "İstanbul - Tersane", price: "₺180", image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=400", category: "Sergi" },
    { id: 134, name: "Contemporary Art", date: "2025-12-22", venue: "İstanbul - Modern", price: "₺150", image: "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=400", category: "Sergi" },
    { id: 135, name: "Monet Experience", date: "2025-12-29", venue: "Ankara - CerModern", price: "₺220", image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=400", category: "Sergi" },
    
    // ===== FESTİVAL =====
    { id: 116, name: "Yılbaşı Festivali", date: "2025-12-31", venue: "İstanbul - KüçükÇiftlik", price: "₺350", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400", category: "Festival" },
    { id: 117, name: "Kış Festivali", date: "2025-12-15", venue: "Uludağ - Ski Center", price: "₺500", image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400", category: "Festival" },
    { id: 118, name: "Aralık Festivali", date: "2025-12-20", venue: "Antalya - Expo", price: "₺400", image: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?w=400", category: "Festival" },
    { id: 119, name: "Müzik Festivali", date: "2025-12-25", venue: "İzmir - Fuarizm", price: "₺450", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400", category: "Festival" }
];

// URL'den kategori al
function getCategoryFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('cat') || 'konser';
}

// Tarihi formatla
function formatDate(isoDate) {
    const date = new Date(isoDate);
    const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

// Kategori sayfasını yükle
function loadCategoryPage() {
    const categoryKey = getCategoryFromUrl().toLowerCase();
    const info = categoryInfo[categoryKey] || categoryInfo['konser'];
    
    // Hero bölümünü güncelle
    document.getElementById('categoryIcon').innerHTML = `<i class="${info.icon}"></i>`;
    document.getElementById('categoryTitle').textContent = info.name;
    document.getElementById('categorySubtitle').textContent = info.subtitle;
    document.title = `${info.name} Etkinlikleri - KolayBilet`;
    
    // Etkinlikleri filtrele
    let filteredEvents;
    
    // Spor kategorisi için Futbol ve Basketbol'u birleştir
    if (categoryKey === 'spor') {
        filteredEvents = allEvents.filter(e => 
            e.category.toLowerCase() === 'futbol' || 
            e.category.toLowerCase() === 'basketbol'
        );
    } else if (categoryKey === 'standup' || categoryKey === 'stand-up') {
        // Stand-up için özel filtreleme
        filteredEvents = allEvents.filter(e => 
            e.category.toLowerCase() === 'stand-up'
        );
    } else {
        filteredEvents = allEvents.filter(e => 
            e.category.toLowerCase() === categoryKey ||
            e.category.toLowerCase().includes(categoryKey) ||
            categoryKey.includes(e.category.toLowerCase())
        );
    }
    
    // Etkinlik sayısını güncelle
    document.getElementById('eventCount').textContent = `${filteredEvents.length} Etkinlik`;
    
    // Etkinlikleri göster
    const grid = document.getElementById('eventsGrid');
    
    if (filteredEvents.length === 0) {
        grid.innerHTML = `
            <div class="no-events-card">
                <i class="far fa-calendar-times"></i>
                <h3>Bu Kategoride Etkinlik Bulunamadı</h3>
                <p>Daha sonra tekrar kontrol edin veya başka bir kategori seçin</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = filteredEvents.map(event => `
        <a href="event-detail.html?id=${event.id}" class="category-event-card">
            <div class="category-event-image">
                <img src="${event.image}" alt="${event.name}" onerror="this.src='https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400'">
                <span class="category-event-badge">${event.category}</span>
            </div>
            <div class="category-event-content">
                <h3 class="category-event-title">${event.name}</h3>
                <div class="category-event-info">
                    <span><i class="far fa-calendar"></i> ${formatDate(event.date)}</span>
                    <span><i class="fas fa-map-marker-alt"></i> ${event.venue}</span>
                </div>
                <div class="category-event-footer">
                    <span class="category-event-price">${event.price}'den</span>
                    <span class="category-event-btn">Detaylar</span>
                </div>
            </div>
        </a>
    `).join('');
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', loadCategoryPage);

console.log('🎫 Kategori sayfası yüklendi');
