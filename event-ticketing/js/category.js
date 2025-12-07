// ==========================================
// CATEGORY PAGE - JAVASCRIPT
// Kategori sayfasi icin etkinlik filtreleme
// ==========================================

// Kategori bilgileri
const categoryInfo = {
    'konser': {
        name: 'Konser',
        icon: 'fas fa-music',
        subtitle: 'En populer konserler ve canli muzik etkinlikleri',
        color: '#ff6b35'
    },
    'tiyatro': {
        name: 'Tiyatro',
        icon: 'fas fa-theater-masks',
        subtitle: 'Sahnede drama, komedi ve muzikal gosteriler',
        color: '#9b59b6'
    },
    'standup': {
        name: 'Stand-up',
        icon: 'fas fa-laugh',
        subtitle: 'Kahkahalarin durmadigi komedi geceleri',
        color: '#f39c12'
    },
    'spor': {
        name: 'Spor',
        icon: 'fas fa-futbol',
        subtitle: 'Futbol, basketbol ve diger spor etkinlikleri',
        color: '#27ae60'
    },
    'futbol': {
        name: 'Futbol',
        icon: 'fas fa-futbol',
        subtitle: 'Super Lig ve uluslararasi futbol maclari',
        color: '#27ae60'
    },
    'basketbol': {
        name: 'Basketbol',
        icon: 'fas fa-basketball-ball',
        subtitle: 'EuroLeague ve BSL basketbol maclari',
        color: '#e67e22'
    },
    'rock': {
        name: 'Rock',
        icon: 'fas fa-guitar',
        subtitle: 'Rock ve alternatif muzik konserleri',
        color: '#c0392b'
    },
    'rap': {
        name: 'Rap',
        icon: 'fas fa-microphone-alt',
        subtitle: 'Turkce Rap ve Hip-Hop konserleri',
        color: '#8e44ad'
    },
    'elektronik': {
        name: 'Elektronik',
        icon: 'fas fa-headphones',
        subtitle: 'DJ performanslari ve elektronik muzik partileri',
        color: '#3498db'
    },
    'festival': {
        name: 'Festival',
        icon: 'fas fa-campground',
        subtitle: 'Acik hava festivalleri ve ozel etkinlikler',
        color: '#1abc9c'
    },
    'sergi': {
        name: 'Sergi',
        icon: 'fas fa-paint-brush',
        subtitle: 'Sanat sergileri ve muze etkinlikleri',
        color: '#e74c3c'
    },
    'teknoloji': {
        name: 'Teknoloji',
        icon: 'fas fa-laptop-code',
        subtitle: 'Tech konferanslari ve gaming etkinlikleri',
        color: '#2980b9'
    },
    'opera': {
        name: 'Opera',
        icon: 'fas fa-music',
        subtitle: 'Klasik opera ve bale gosterileri',
        color: '#9b59b6'
    },
    'muzikal': {
        name: 'Muzikal',
        icon: 'fas fa-theater-masks',
        subtitle: 'Broadway tarzi muzikal gosteriler',
        color: '#e91e63'
    },
    'sinema': {
        name: 'Sinema',
        icon: 'fas fa-film',
        subtitle: 'Film gosterimleri ve sinema etkinlikleri',
        color: '#607d8b'
    }
};

// Tum etkinlikler veritabani
const allEvents = [
    // ===== BUGUN =====
    { id: 200, name: "Tarkan - Mega Konser", date: "2025-12-08", venue: "Istanbul - Volkswagen Arena", price: "₺850", image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400", category: "Konser" },
    { id: 201, name: "Duman - Kis Konseri", date: "2025-12-08", venue: "Istanbul - Kucukciftlik", price: "₺650", image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400", category: "Rock" },
    { id: 202, name: "Ceza Rap Night", date: "2025-12-08", venue: "Ankara - Congresium", price: "₺400", image: "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?w=400", category: "Rap" },
    { id: 203, name: "Cem Yilmaz Show", date: "2025-12-08", venue: "Istanbul - Zorlu PSM", price: "₺700", image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800", category: "Stand-up" },
    { id: 204, name: "Fenerbahce vs Galatasaray", date: "2025-12-08", venue: "Istanbul - Kadikoy", price: "₺900", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400", category: "Futbol" },
    { id: 205, name: "Van Gogh Dijital Sergi", date: "2025-12-08", venue: "Istanbul - Pera", price: "₺220", image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=400", category: "Sergi" },
    { id: 206, name: "Martin Garrix DJ Set", date: "2025-12-08", venue: "Bodrum - Beach Club", price: "₺1100", image: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=400", category: "Elektronik" },
    { id: 207, name: "Hamlet - Tiyatro", date: "2025-12-08", venue: "Istanbul - DT Sahne", price: "₺280", image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=400", category: "Tiyatro" },
    
    // ===== KONSERLER =====
    { id: 1, name: "Tarkan - Yeni Album Turnesi", date: "2025-12-09", venue: "Istanbul - Volkswagen Arena", price: "₺750", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400", category: "Konser" },
    { id: 2, name: "Sertab Erener - Evgit Gel", date: "2025-12-10", venue: "Izmir - Izmir Arena", price: "₺450", image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400", category: "Konser" },
    { id: 3, name: "Mabel Matiz Konseri", date: "2025-12-11", venue: "Istanbul - Bostanci", price: "₺550", image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400", category: "Konser" },
    { id: 4, name: "Ajda Pekkan Gala", date: "2025-12-12", venue: "Istanbul - Harbiye", price: "₺1200", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400", category: "Konser" },
    { id: 5, name: "Sezen Aksu - 40 Yil", date: "2025-12-13", venue: "Istanbul - TT Stadyumu", price: "₺900", image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400", category: "Konser" },
    { id: 6, name: "Hadise - Ask Turnesi", date: "2025-12-14", venue: "Antalya - Aspendos", price: "₺650", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400", category: "Konser" },
    { id: 7, name: "Kenan Dogulu Live", date: "2025-12-15", venue: "Istanbul - Jolly Joker", price: "₺400", image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=400", category: "Konser" },
    { id: 8, name: "Gulsen - Bangir Tour", date: "2025-12-16", venue: "Bodrum - Antik Tiyatro", price: "₺800", image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=400", category: "Konser" },
    { id: 9, name: "Sila - Sahne Programi", date: "2025-12-17", venue: "Ankara - Congresium", price: "₺550", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400", category: "Konser" },
    { id: 10, name: "Teoman - Akustik", date: "2025-12-18", venue: "Istanbul - Zorlu PSM", price: "₺600", image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400", category: "Konser" },
    
    // ===== ROCK =====
    { id: 26, name: "Duman - 25. Yil", date: "2025-12-09", venue: "Istanbul - Kucukciftlik", price: "₺700", image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400", category: "Rock" },
    { id: 27, name: "Mor ve Otesi", date: "2025-12-11", venue: "Izmir - Kulturpark", price: "₺400", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400", category: "Rock" },
    { id: 28, name: "Athena Rock Fest", date: "2025-12-13", venue: "Istanbul - Parkorman", price: "₺350", image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400", category: "Rock" },
    { id: 29, name: "Sebnem Ferah", date: "2025-12-15", venue: "Bursa - Acik Hava", price: "₺450", image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=400", category: "Rock" },
    { id: 30, name: "maNga Konseri", date: "2025-12-17", venue: "Ankara - ODTU", price: "₺300", image: "https://images.unsplash.com/photo-1508973379184-7517410fb0bc?w=400", category: "Rock" },
    
    // ===== RAP =====
    { id: 41, name: "Sagopa Kajmer", date: "2025-12-10", venue: "Istanbul - Harbiye", price: "₺500", image: "https://images.unsplash.com/photo-1571609710324-5a8bf0b14c18?w=400", category: "Rap" },
    { id: 42, name: "Ceza & Killa Hakan", date: "2025-12-12", venue: "Ankara - Congresium", price: "₺350", image: "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?w=400", category: "Rap" },
    { id: 43, name: "Ben Fero Tour", date: "2025-12-14", venue: "Istanbul - IF", price: "₺400", image: "https://images.unsplash.com/photo-1559519530-a6a5c33edea1?w=400", category: "Rap" },
    { id: 44, name: "Ezhel Live", date: "2025-12-16", venue: "Antalya - Expo", price: "₺450", image: "https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=400", category: "Rap" },
    { id: 45, name: "Sehinshah", date: "2025-12-18", venue: "Izmir - Fuar", price: "₺350", image: "https://images.unsplash.com/photo-1547355253-ff0740f6e8c1?w=400", category: "Rap" },
    
    // ===== ELEKTRONIK =====
    { id: 56, name: "David Guetta", date: "2025-12-31", venue: "Antalya - Regnum", price: "₺1500", image: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=400", category: "Elektronik" },
    { id: 57, name: "Martin Garrix", date: "2025-12-09", venue: "Bodrum - Beach Club", price: "₺1200", image: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=400", category: "Elektronik" },
    { id: 58, name: "Tiesto Club Life", date: "2025-12-13", venue: "Istanbul - Klein", price: "₺800", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400", category: "Elektronik" },
    { id: 59, name: "Calvin Harris", date: "2025-12-17", venue: "Istanbul - Life Park", price: "₺1000", image: "https://images.unsplash.com/photo-1504680177321-2e6a879aac86?w=400", category: "Elektronik" },
    { id: 60, name: "Deadmau5 Live", date: "2025-12-21", venue: "Istanbul - Zorlu", price: "₺900", image: "https://images.unsplash.com/photo-1485872299829-c673f5194813?w=400", category: "Elektronik" },
    
    // ===== TIYATRO =====
    { id: 68, name: "Muslum Baba Muzikali", date: "2025-12-10", venue: "Ankara - CSO Ada", price: "₺400", image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=400", category: "Tiyatro" },
    { id: 69, name: "Hisseli Harikalar", date: "2025-12-12", venue: "Istanbul - Zorlu PSM", price: "₺350", image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=400", category: "Tiyatro" },
    { id: 70, name: "Kral Lear", date: "2025-12-14", venue: "Ankara - DT Sahne", price: "₺250", image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=400", category: "Tiyatro" },
    { id: 71, name: "Notre Dame Kamburu", date: "2025-12-16", venue: "Istanbul - Maximum", price: "₺500", image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=400", category: "Tiyatro" },
    { id: 72, name: "Cats Broadway", date: "2025-12-18", venue: "Istanbul - Zorlu", price: "₺600", image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=400", category: "Tiyatro" },
    
    // ===== STAND-UP =====
    { id: 88, name: "Cem Yilmaz Diamond", date: "2025-12-09", venue: "Istanbul - VW Arena", price: "₺600", image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800", category: "Stand-up" },
    { id: 89, name: "Ata Demirer Show", date: "2025-12-13", venue: "Ankara - Congresium", price: "₺400", image: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=800", category: "Stand-up" },
    { id: 90, name: "Guldur Guldur", date: "2025-12-17", venue: "Istanbul - MEB", price: "₺250", image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800", category: "Stand-up" },
    { id: 91, name: "Sahan Gokbakar", date: "2025-12-21", venue: "Izmir - Arena", price: "₺450", image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800", category: "Stand-up" },
    { id: 92, name: "Tolga Cevik", date: "2025-12-25", venue: "Istanbul - Zorlu", price: "₺350", image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800", category: "Stand-up" },
    
    // ===== FUTBOL =====
    { id: 98, name: "Galatasaray vs Fenerbahce", date: "2025-12-09", venue: "Istanbul - RAMS Park", price: "₺800", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400", category: "Futbol" },
    { id: 99, name: "Fenerbahce vs Besiktas", date: "2025-12-13", venue: "Istanbul - Kadikoy", price: "₺600", image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400", category: "Futbol" },
    { id: 100, name: "Besiktas vs Trabzon", date: "2025-12-17", venue: "Istanbul - Tupras", price: "₺500", image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=400", category: "Futbol" },
    { id: 101, name: "GS vs Trabzonspor", date: "2025-12-21", venue: "Istanbul - RAMS", price: "₺550", image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400", category: "Futbol" },
    { id: 102, name: "FB vs Galatasaray", date: "2025-12-25", venue: "Istanbul - Kadikoy", price: "₺900", image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400", category: "Futbol" },
    
    // ===== BASKETBOL =====
    { id: 108, name: "Fenerbahce vs Efes", date: "2025-12-10", venue: "Istanbul - Ulker", price: "₺300", image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400", category: "Basketbol" },
    { id: 109, name: "Galatasaray vs FB", date: "2025-12-14", venue: "Istanbul - Sinan Erdem", price: "₺400", image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=400", category: "Basketbol" },
    { id: 110, name: "Efes vs Real Madrid", date: "2025-12-18", venue: "Istanbul - Sinan Erdem", price: "₺500", image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=400", category: "Basketbol" },
    { id: 111, name: "FB vs Barcelona", date: "2025-12-22", venue: "Istanbul - Ulker", price: "₺550", image: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?w=400", category: "Basketbol" },
    
    // ===== SERGI =====
    { id: 132, name: "Van Gogh Immersive", date: "2025-12-09", venue: "Istanbul - Pera", price: "₺200", image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=400", category: "Sergi" },
    { id: 133, name: "Picasso Dijital", date: "2025-12-16", venue: "Istanbul - Tersane", price: "₺180", image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=400", category: "Sergi" },
    { id: 134, name: "Contemporary Art", date: "2025-12-23", venue: "Istanbul - Modern", price: "₺150", image: "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=400", category: "Sergi" },
    { id: 135, name: "Monet Experience", date: "2025-12-30", venue: "Ankara - CerModern", price: "₺220", image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=400", category: "Sergi" },
    
    // ===== FESTIVAL =====
    { id: 116, name: "Yilbasi Festivali", date: "2025-12-31", venue: "Istanbul - KucukCiftlik", price: "₺350", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400", category: "Festival" },
    { id: 117, name: "Kis Festivali", date: "2025-12-16", venue: "Uludag - Ski Center", price: "₺500", image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400", category: "Festival" },
    { id: 118, name: "Aralik Festivali", date: "2025-12-21", venue: "Antalya - Expo", price: "₺400", image: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?w=400", category: "Festival" },
    { id: 119, name: "Muzik Festivali", date: "2025-12-26", venue: "Izmir - Fuarizm", price: "₺450", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400", category: "Festival" }
];

// URL'den kategori al
function getCategoryFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('cat') || 'konser';
}

// Tarihi formatla
function formatDate(isoDate) {
    const date = new Date(isoDate);
    const months = ['Ocak', 'Subat', 'Mart', 'Nisan', 'Mayis', 'Haziran', 'Temmuz', 'Agustos', 'Eylul', 'Ekim', 'Kasim', 'Aralik'];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

// Kategori sayfasini yukle
function loadCategoryPage() {
    const categoryKey = getCategoryFromUrl().toLowerCase();
    const info = categoryInfo[categoryKey] || categoryInfo['konser'];
    
    // Hero bolumunu guncelle
    document.getElementById('categoryIcon').innerHTML = `<i class="${info.icon}"></i>`;
    document.getElementById('categoryTitle').textContent = info.name;
    document.getElementById('categorySubtitle').textContent = info.subtitle;
    document.title = `${info.name} Etkinlikleri - KolayBilet`;
    
    // Etkinlikleri filtrele
    let filteredEvents;
    
    // Spor kategorisi icin Futbol ve Basketbol'u birlestir
    if (categoryKey === 'spor') {
        filteredEvents = allEvents.filter(e => 
            e.category.toLowerCase() === 'futbol' || 
            e.category.toLowerCase() === 'basketbol'
        );
    } else if (categoryKey === 'standup' || categoryKey === 'stand-up') {
        // Stand-up icin ozel filtreleme
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
    
    // Etkinlik sayisini guncelle
    document.getElementById('eventCount').textContent = `${filteredEvents.length} Etkinlik`;
    
    // Etkinlikleri goster
    const grid = document.getElementById('eventsGrid');
    
    if (filteredEvents.length === 0) {
        grid.innerHTML = `
            <div class="no-events-card">
                <i class="far fa-calendar-times"></i>
                <h3>Bu Kategoride Etkinlik Bulunamadi</h3>
                <p>Daha sonra tekrar kontrol edin veya baska bir kategori secin</p>
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

// Sayfa yuklendiginde
document.addEventListener('DOMContentLoaded', loadCategoryPage);

console.log('Kategori sayfasi yuklendi');

// ====== MOBILE MENU TOGGLE ======
const mobileToggle = document.getElementById('mobileToggle');
const nav = document.getElementById('nav');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}