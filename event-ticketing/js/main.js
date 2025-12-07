// ==========================================
// MAIN PAGE - JAVASCRIPT
// Local Event Search (No API Required)
// ==========================================

// ====== DOM ELEMENTS ======
const searchInput = document.getElementById('searchInput');
const searchDropdown = document.getElementById('searchDropdown');
const searchResults = document.getElementById('searchResults');
const searchLoading = document.getElementById('searchLoading');
const noResults = document.getElementById('noResults');
const searchBtn = document.getElementById('searchBtn');

// ====== DEBOUNCE FUNCTION ======
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ====== LOCAL EVENTS DATABASE (150+ Etkinlik - 2025-2026) ======
// Doğrulanmış Unsplash görsel URL'leri - her kategori için uygun görseller
const eventImages = {
    // Konser görselleri - kalabalık, sahne, ışıklar
    konser1: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400', // Konser kalabalığı
    konser2: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400', // Konser ışıkları
    konser3: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400', // Sahne performansı
    konser4: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400', // DJ ve ışıklar
    konser5: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400', // Konser sahne
    konser6: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400', // Parti ışıkları
    konser7: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=400', // Şarkıcı sahnede
    konser8: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=400', // Kalabalık konser
    // Rock görselleri - elektro gitar, rock sahne
    rock1: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=400', // Rock konser
    rock2: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400', // Elektro gitar
    rock3: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400', // Rock performans
    rock4: 'https://images.unsplash.com/photo-1508973379184-7517410fb0bc?w=400', // Rock band
    rock5: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400', // Rock kalabalık
    rock6: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=400', // Gitar close-up
    // Rap görselleri - mikrofon, hip-hop
    rap1: 'https://images.unsplash.com/photo-1571609710324-5a8bf0b14c18?w=400', // Mikrofon
    rap2: 'https://images.unsplash.com/photo-1499364615650-ec38552f4f34?w=400', // Rap performans
    rap3: 'https://images.unsplash.com/photo-1559519530-a6a5c33edea1?w=400', // Hip-hop artist
    rap4: 'https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=400', // Stage performans
    rap5: 'https://images.unsplash.com/photo-1547355253-ff0740f6e8c1?w=400', // Rapper sahnede
    // DJ/Elektronik görselleri - DJ ekipman, club
    dj1: 'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=400', // DJ mixer
    dj2: 'https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=400', // Club ışıkları
    dj3: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400', // Parti ışıkları
    dj4: 'https://images.unsplash.com/photo-1504680177321-2e6a879aac86?w=400', // DJ performans
    dj5: 'https://images.unsplash.com/photo-1485872299829-c673f5194813?w=400', // Neon ışıklar
    dj6: 'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=400', // DJ setup
    // Tiyatro görselleri - sahne, perde, tiyatro salonu
    tiyatro1: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=400', // Tiyatro salonu
    tiyatro2: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=400', // Sahne ışıkları
    tiyatro3: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=400', // Tiyatro perde
    tiyatro4: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=400', // Performans
    tiyatro5: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=400', // Sahne
    // Opera/Bale görselleri
    opera1: 'https://images.unsplash.com/photo-1580809361436-42a7ec204889?w=400', // Opera salonu
    opera2: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=400', // Opera sahne
    bale1: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=400', // Balerin
    bale2: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=400', // Bale performans
    // Stand-up görselleri - mikrofon, sahne
    standup1: 'https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=400', // Mikrofon sahne
    standup2: 'https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=400', // Stand-up sahne
    standup3: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=400', // Komedi sahne
    standup4: 'https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=400', // Stand-up
    standup5: 'https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=400', // Sahne ışıkları
    // Futbol görselleri - stadyum, top, maç
    futbol1: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400', // Stadyum
    futbol2: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400', // Futbol topu
    futbol3: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=400', // Futbol maç
    futbol4: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400', // Futbol stadyum
    futbol5: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400', // Futbol top
    // Basketbol görselleri - basket potası, maç
    basket1: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400', // Basketbol maç
    basket2: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=400', // Basket potası
    basket3: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?w=400', // Basketbol
    basket4: 'https://images.unsplash.com/photo-1518063319789-7217e6706b04?w=400', // NBA tarzı
    // Festival görselleri - kalabalık, açık hava
    fest1: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400', // Festival kalabalık
    fest2: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400', // Müzik festivali
    fest3: 'https://images.unsplash.com/photo-1472653431158-6364773b2a56?w=400', // Festival ışıkları
    fest4: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400', // Açık hava festival
    fest5: 'https://images.unsplash.com/photo-1496024840928-4c417adf211d?w=400', // Festival sahne
    // Teknoloji görselleri - konferans, sunum
    tech1: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400', // Tech konferans
    tech2: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400', // Sunum
    tech3: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400', // Konferans salonu
    tech4: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400', // Tech event
    // Gaming görselleri - oyun, e-spor
    game1: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400', // E-spor
    game2: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400', // Gaming setup
    game3: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400', // Oyun kontrolcü
    game4: 'https://images.unsplash.com/photo-1552820728-8b83bb6b2b0d?w=400', // Gaming
    // Sergi görselleri - müze, sanat
    sergi1: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=400', // Sanat galerisi
    sergi2: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=400', // Müze
    sergi3: 'https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=400', // Sergi
    sergi4: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=400', // Sanat eseri
    // Sinema görselleri - sinema salonu, film
    sinema1: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400', // Sinema salonu
    sinema2: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400', // Sinema perde
    sinema3: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400', // Film
    sinema4: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400' // Sinema koltukları
};

const localEvents = [
    // ===== BUGÜN - 7 ARALIK 2025 =====
    { id: 200, name: "Tarkan - Mega Konser", date: "2025-12-07", venue: "İstanbul - Volkswagen Arena", price: "₺850", image: eventImages.konser5, category: "Konser" },
    { id: 201, name: "Duman - Kış Konseri", date: "2025-12-07", venue: "İstanbul - Küçükçiftlik", price: "₺650", image: eventImages.rock3, category: "Rock" },
    { id: 202, name: "Ceza Rap Night", date: "2025-12-07", venue: "Ankara - Congresium", price: "₺400", image: eventImages.rap2, category: "Rap" },
    { id: 203, name: "Cem Yılmaz Show", date: "2025-12-07", venue: "İstanbul - Zorlu PSM", price: "₺700", image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800", category: "Stand-up" },
    { id: 204, name: "Fenerbahçe vs Galatasaray", date: "2025-12-07", venue: "İstanbul - Kadıköy", price: "₺900", image: eventImages.futbol3, category: "Futbol" },
    { id: 205, name: "Van Gogh Dijital Sergi", date: "2025-12-07", venue: "İstanbul - Pera", price: "₺220", image: eventImages.sergi2, category: "Sergi" },
    { id: 206, name: "Martin Garrix DJ Set", date: "2025-12-07", venue: "Bodrum - Beach Club", price: "₺1100", image: eventImages.dj3, category: "Elektronik" },
    { id: 207, name: "Hamlet - Tiyatro", date: "2025-12-07", venue: "İstanbul - DT Sahne", price: "₺280", image: eventImages.tiyatro3, category: "Tiyatro" },
    // ===== KONSERLER (25 etkinlik) =====
    { id: 1, name: "Tarkan - Yeni Albüm Turnesi", date: "2025-12-08", venue: "İstanbul - Volkswagen Arena", price: "₺750", image: eventImages.konser5, category: "Konser" },
    { id: 2, name: "Sertab Erener - Evgit Gel", date: "2025-12-09", venue: "İzmir - İzmir Arena", price: "₺450", image: eventImages.konser2, category: "Konser" },
    { id: 3, name: "Mabel Matiz Konseri", date: "2025-12-10", venue: "İstanbul - Bostancı", price: "₺550", image: eventImages.konser3, category: "Konser" },
    { id: 4, name: "Ajda Pekkan Gala", date: "2025-12-11", venue: "İstanbul - Harbiye", price: "₺1200", image: eventImages.konser4, category: "Konser" },
    { id: 5, name: "Sezen Aksu - 40 Yıl", date: "2025-12-12", venue: "İstanbul - TT Stadyumu", price: "₺900", image: eventImages.konser5, category: "Konser" },
    { id: 6, name: "Hadise - Aşk Turnesi", date: "2025-12-13", venue: "Antalya - Aspendos", price: "₺650", image: eventImages.konser2, category: "Konser" },
    { id: 7, name: "Kenan Doğulu Live", date: "2025-12-14", venue: "İstanbul - Jolly Joker", price: "₺400", image: eventImages.konser3, category: "Konser" },
    { id: 8, name: "Gülşen - Bangır Tour", date: "2025-12-15", venue: "Bodrum - Antik Tiyatro", price: "₺800", image: eventImages.konser4, category: "Konser" },
    { id: 9, name: "Sıla - Sahne Programı", date: "2025-12-16", venue: "Ankara - Congresium", price: "₺550", image: eventImages.konser5, category: "Konser" },
    { id: 10, name: "Teoman - Akustik", date: "2025-12-17", venue: "İstanbul - Zorlu PSM", price: "₺600", image: eventImages.konser2, category: "Konser" },
    { id: 11, name: "Nilüfer Konseri", date: "2025-12-18", venue: "Ankara - ATO", price: "₺500", image: eventImages.konser3, category: "Konser" },
    { id: 12, name: "Yıldız Tilbe Show", date: "2025-12-19", venue: "İstanbul - Harbiye", price: "₺700", image: eventImages.konser4, category: "Konser" },
    { id: 13, name: "Emre Aydın Live", date: "2025-12-20", venue: "İzmir - Kültürpark", price: "₺350", image: eventImages.konser5, category: "Konser" },
    { id: 14, name: "Fettah Can Akustik", date: "2025-12-21", venue: "Bursa - Merinos", price: "₺400", image: eventImages.konser2, category: "Konser" },
    { id: 15, name: "Simge Konseri", date: "2025-12-22", venue: "Antalya - Expo", price: "₺450", image: eventImages.konser3, category: "Konser" },
    { id: 16, name: "Gripin Live", date: "2025-12-23", venue: "İstanbul - Küçükçiftlik", price: "₺350", image: eventImages.konser4, category: "Konser" },
    { id: 17, name: "Aleyna Tilki Konseri", date: "2025-12-24", venue: "İstanbul - IF Performance", price: "₺500", image: eventImages.konser5, category: "Konser" },
    { id: 18, name: "Gökhan Türkmen", date: "2025-12-25", venue: "Ankara - Bilkent", price: "₺400", image: eventImages.konser2, category: "Konser" },
    { id: 19, name: "Oğuzhan Koç Konseri", date: "2025-12-26", venue: "İstanbul - Jolly Joker", price: "₺350", image: eventImages.konser3, category: "Konser" },
    { id: 20, name: "Hande Yener Show", date: "2025-12-27", venue: "Bodrum - Voyage", price: "₺600", image: eventImages.konser4, category: "Konser" },
    { id: 21, name: "Merve Özbey Live", date: "2025-12-28", venue: "İzmir - Arena", price: "₺450", image: eventImages.konser5, category: "Konser" },
    { id: 22, name: "Demet Akalın Party", date: "2025-12-29", venue: "Antalya - Regnum", price: "₺700", image: eventImages.konser2, category: "Konser" },
    { id: 23, name: "Ece Seçkin Konseri", date: "2025-12-30", venue: "İstanbul - Babylon", price: "₺400", image: eventImages.konser3, category: "Konser" },
    { id: 24, name: "Yılbaşı Konseri 2025", date: "2025-12-31", venue: "İstanbul - Harbiye", price: "₺1500", image: eventImages.konser4, category: "Konser" },
    { id: 25, name: "Tarkan Yılbaşı", date: "2026-01-01", venue: "Antalya - Belek", price: "₺2000", image: eventImages.konser5, category: "Konser" },
    // ===== ROCK & ALTERNATİF (15 etkinlik) =====
    { id: 26, name: "Duman - 25. Yıl", date: "2025-12-08", venue: "İstanbul - Küçükçiftlik", price: "₺700", image: eventImages.rock3, category: "Rock" },
    { id: 27, name: "Mor ve Ötesi", date: "2025-12-10", venue: "İzmir - Kültürpark", price: "₺400", image: eventImages.rock2, category: "Rock" },
    { id: 28, name: "Athena Rock Fest", date: "2025-12-12", venue: "İstanbul - Parkorman", price: "₺350", image: eventImages.rock3, category: "Rock" },
    { id: 29, name: "Şebnem Ferah", date: "2025-12-14", venue: "Bursa - Açık Hava", price: "₺450", image: eventImages.rock2, category: "Rock" },
    { id: 30, name: "maNga Konseri", date: "2025-12-16", venue: "Ankara - ODTÜ", price: "₺300", image: eventImages.rock3, category: "Rock" },
    { id: 31, name: "Pinhani Live", date: "2025-12-18", venue: "İstanbul - Babylon", price: "₺350", image: eventImages.rock2, category: "Rock" },
    { id: 32, name: "Kolpa Konseri", date: "2025-12-20", venue: "İzmir - Fuar", price: "₺300", image: eventImages.rock3, category: "Rock" },
    { id: 33, name: "Pentagram", date: "2025-12-22", venue: "İstanbul - Küçükçiftlik", price: "₺400", image: eventImages.rock2, category: "Rock" },
    { id: 34, name: "Model Konseri", date: "2025-12-24", venue: "Ankara - Congresium", price: "₺350", image: eventImages.rock3, category: "Rock" },
    { id: 35, name: "Hayko Cepkin", date: "2025-12-26", venue: "İstanbul - Zorlu PSM", price: "₺450", image: eventImages.rock2, category: "Rock" },
    { id: 36, name: "Kurban Live", date: "2025-12-28", venue: "İstanbul - IF", price: "₺400", image: eventImages.rock3, category: "Rock" },
    { id: 37, name: "Nekropsi", date: "2025-12-30", venue: "Ankara - Club", price: "₺350", image: eventImages.rock2, category: "Rock" },
    { id: 38, name: "Yüksek Sadakat", date: "2026-01-02", venue: "İzmir - Arena", price: "₺400", image: eventImages.rock3, category: "Rock" },
    { id: 39, name: "Kargo Konseri", date: "2026-01-04", venue: "İstanbul - Babylon", price: "₺350", image: eventImages.rock2, category: "Rock" },
    { id: 40, name: "Rashit Live", date: "2026-01-06", venue: "Bursa - Nilüfer", price: "₺300", image: eventImages.rock3, category: "Rock" },
    // ===== RAP & HIP-HOP (15 etkinlik) =====
    { id: 41, name: "Sagopa Kajmer", date: "2025-12-09", venue: "İstanbul - Harbiye", price: "₺500", image: eventImages.rap2, category: "Rap" },
    { id: 42, name: "Ceza & Killa Hakan", date: "2025-12-11", venue: "Ankara - Congresium", price: "₺350", image: eventImages.rap2, category: "Rap" },
    { id: 43, name: "Ben Fero Tour", date: "2025-12-13", venue: "İstanbul - IF", price: "₺400", image: eventImages.rap2, category: "Rap" },
    { id: 44, name: "Ezhel Live", date: "2025-12-15", venue: "Antalya - Expo", price: "₺450", image: eventImages.rap2, category: "Rap" },
    { id: 45, name: "Şehinşah", date: "2025-12-17", venue: "İzmir - Fuar", price: "₺350", image: eventImages.rap2, category: "Rap" },
    { id: 46, name: "Norm Ender", date: "2025-12-19", venue: "İstanbul - Babylon", price: "₺400", image: eventImages.rap2, category: "Rap" },
    { id: 47, name: "Aspova Konseri", date: "2025-12-21", venue: "Ankara - Club", price: "₺350", image: eventImages.rap2, category: "Rap" },
    { id: 48, name: "UZI Live", date: "2025-12-23", venue: "İstanbul - Klein", price: "₺500", image: eventImages.rap2, category: "Rap" },
    { id: 49, name: "Murda Tour", date: "2025-12-25", venue: "İzmir - Arena", price: "₺450", image: eventImages.rap2, category: "Rap" },
    { id: 50, name: "Contra Konseri", date: "2025-12-27", venue: "İstanbul - IF", price: "₺400", image: eventImages.rap2, category: "Rap" },
    { id: 51, name: "Motive Live", date: "2025-12-29", venue: "Ankara - Bilkent", price: "₺350", image: eventImages.rap2, category: "Rap" },
    { id: 52, name: "Ati242 Show", date: "2025-12-31", venue: "Bodrum - Party", price: "₺600", image: eventImages.rap2, category: "Rap" },
    { id: 53, name: "Blok3 Konseri", date: "2026-01-02", venue: "İstanbul - Zorlu", price: "₺400", image: eventImages.rap2, category: "Rap" },
    { id: 54, name: "Canbay & Wolker", date: "2026-01-04", venue: "İzmir - Fuarizm", price: "₺350", image: eventImages.rap2, category: "Rap" },
    { id: 55, name: "Heijan Live", date: "2026-01-06", venue: "Ankara - Arena", price: "₺400", image: eventImages.rap2, category: "Rap" },
    // ===== ELEKTRONİK & DJ (12 etkinlik) =====
    { id: 56, name: "David Guetta", date: "2025-12-31", venue: "Antalya - Regnum", price: "₺1500", image: eventImages.dj3, category: "Elektronik" },
    { id: 57, name: "Martin Garrix", date: "2025-12-08", venue: "Bodrum - Beach Club", price: "₺1200", image: eventImages.elektronik2, category: "Elektronik" },
    { id: 58, name: "Tiësto Club Life", date: "2025-12-12", venue: "İstanbul - Klein", price: "₺800", image: eventImages.dj3, category: "Elektronik" },
    { id: 59, name: "Calvin Harris", date: "2025-12-16", venue: "İstanbul - Life Park", price: "₺1000", image: eventImages.elektronik2, category: "Elektronik" },
    { id: 60, name: "Deadmau5 Live", date: "2025-12-20", venue: "İstanbul - Zorlu", price: "₺900", image: eventImages.dj3, category: "Elektronik" },
    { id: 61, name: "Marshmello Tour", date: "2025-12-24", venue: "Antalya - Belek", price: "₺1100", image: eventImages.elektronik2, category: "Elektronik" },
    { id: 62, name: "Steve Aoki", date: "2025-12-28", venue: "Bodrum - LUX", price: "₺950", image: eventImages.dj3, category: "Elektronik" },
    { id: 63, name: "Ilkay Sencan", date: "2025-12-10", venue: "İstanbul - Babylon", price: "₺400", image: eventImages.elektronik2, category: "Elektronik" },
    { id: 64, name: "DJ Snake", date: "2026-01-01", venue: "Antalya - Gloria", price: "₺1300", image: eventImages.dj3, category: "Elektronik" },
    { id: 65, name: "Mahmut Orhan", date: "2025-12-14", venue: "İstanbul - Klein", price: "₺500", image: eventImages.elektronik2, category: "Elektronik" },
    { id: 66, name: "Burak Yeter", date: "2025-12-18", venue: "Bodrum - Beach", price: "₺450", image: eventImages.dj3, category: "Elektronik" },
    { id: 67, name: "Çağrı Sinci", date: "2025-12-22", venue: "İzmir - Club", price: "₺350", image: eventImages.elektronik2, category: "Elektronik" },
    // ===== TİYATRO & MÜZİKAL (12 etkinlik) =====
    { id: 68, name: "Müslüm Baba Müzikali", date: "2025-12-09", venue: "Ankara - CSO Ada", price: "₺400", image: eventImages.tiyatro1, category: "Müzikal" },
    { id: 69, name: "Hisseli Harikalar", date: "2025-12-11", venue: "İstanbul - Zorlu PSM", price: "₺350", image: eventImages.tiyatro2, category: "Tiyatro" },
    { id: 70, name: "Kral Lear", date: "2025-12-13", venue: "Ankara - DT Sahne", price: "₺250", image: eventImages.tiyatro3, category: "Tiyatro" },
    { id: 71, name: "Notre Dame Kamburu", date: "2025-12-15", venue: "İstanbul - Maximum", price: "₺500", image: eventImages.tiyatro2, category: "Müzikal" },
    { id: 72, name: "Cats Broadway", date: "2025-12-17", venue: "İstanbul - Zorlu", price: "₺600", image: eventImages.tiyatro1, category: "Müzikal" },
    { id: 73, name: "Hamlet", date: "2025-12-19", venue: "Ankara - Opera", price: "₺300", image: eventImages.tiyatro2, category: "Tiyatro" },
    { id: 74, name: "Sevgili Doktor", date: "2025-12-21", venue: "İstanbul - Cevahir", price: "₺280", image: eventImages.tiyatro3, category: "Tiyatro" },
    { id: 75, name: "Phantom of Opera", date: "2025-12-23", venue: "İstanbul - CKSM", price: "₺700", image: eventImages.tiyatro2, category: "Müzikal" },
    { id: 76, name: "Othello", date: "2025-12-25", venue: "İzmir - Kültür", price: "₺250", image: eventImages.tiyatro3, category: "Tiyatro" },
    { id: 77, name: "Les Misérables", date: "2025-12-27", venue: "İstanbul - Harbiye", price: "₺650", image: eventImages.tiyatro2, category: "Müzikal" },
    { id: 78, name: "Romeo Juliet", date: "2025-12-29", venue: "Ankara - Sahne", price: "₺320", image: eventImages.tiyatro3, category: "Tiyatro" },
    { id: 79, name: "Mamma Mia", date: "2025-12-31", venue: "İstanbul - Zorlu", price: "₺800", image: eventImages.tiyatro2, category: "Müzikal" },
    // ===== OPERA & BALE (8 etkinlik) =====
    { id: 80, name: "Carmen Operası", date: "2025-12-10", venue: "İstanbul - Süreyya", price: "₺600", image: eventImages.opera1, category: "Opera" },
    { id: 81, name: "Romeo Juliet Bale", date: "2025-12-14", venue: "Ankara - Opera", price: "₺350", image: eventImages.bale1, category: "Bale" },
    { id: 82, name: "La Traviata", date: "2025-12-18", venue: "İstanbul - Zorlu", price: "₺400", image: eventImages.opera1, category: "Opera" },
    { id: 83, name: "Kuğu Gölü", date: "2025-12-22", venue: "İzmir - AKM", price: "₺300", image: eventImages.bale1, category: "Bale" },
    { id: 84, name: "Tosca", date: "2025-12-26", venue: "Ankara - Opera", price: "₺450", image: eventImages.opera1, category: "Opera" },
    { id: 85, name: "Fındıkkıran", date: "2025-12-30", venue: "İstanbul - Süreyya", price: "₺380", image: eventImages.bale1, category: "Bale" },
    { id: 86, name: "Madama Butterfly", date: "2026-01-03", venue: "İstanbul - CSO", price: "₺500", image: eventImages.opera1, category: "Opera" },
    { id: 87, name: "Giselle Balesi", date: "2026-01-07", venue: "Ankara - Bale", price: "₺320", image: eventImages.bale1, category: "Bale" },
    // ===== STAND-UP & KOMEDİ (10 etkinlik) =====
    { id: 88, name: "Cem Yılmaz Diamond", date: "2025-12-08", venue: "İstanbul - VW Arena", price: "₺600", image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800", category: "Stand-up" },
    { id: 89, name: "Ata Demirer Show", date: "2025-12-12", venue: "Ankara - Congresium", price: "₺400", image: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=800", category: "Stand-up" },
    { id: 90, name: "Güldür Güldür", date: "2025-12-16", venue: "İstanbul - MEB", price: "₺250", image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800", category: "Stand-up" },
    { id: 91, name: "Şahan Gökbakar", date: "2025-12-20", venue: "İzmir - Arena", price: "₺450", image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800", category: "Stand-up" },
    { id: 92, name: "Tolga Çevik", date: "2025-12-24", venue: "İstanbul - Zorlu", price: "₺350", image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800", category: "Stand-up" },
    { id: 93, name: "Cem Davran", date: "2025-12-28", venue: "Ankara - Bilkent", price: "₺300", image: eventImages.standup3, category: "Stand-up" },
    { id: 94, name: "Hasan Can Kaya", date: "2025-12-11", venue: "İstanbul - Babylon", price: "₺280", image: eventImages.standup3, category: "Stand-up" },
    { id: 95, name: "Doğu Demirkol", date: "2025-12-15", venue: "İstanbul - Hayal", price: "₺250", image: eventImages.standup3, category: "Stand-up" },
    { id: 96, name: "Yasemin Sakallıoğlu", date: "2025-12-19", venue: "Ankara - Club", price: "₺220", image: eventImages.standup3, category: "Stand-up" },
    { id: 97, name: "Pınar Fidan", date: "2025-12-23", venue: "İzmir - Kültür", price: "₺200", image: eventImages.standup3, category: "Stand-up" },
    // ===== FUTBOL (10 etkinlik) =====
    { id: 98, name: "Galatasaray vs Fenerbahçe", date: "2025-12-08", venue: "İstanbul - RAMS Park", price: "₺800", image: eventImages.futbol3, category: "Futbol" },
    { id: 99, name: "Fenerbahçe vs Beşiktaş", date: "2025-12-12", venue: "İstanbul - Kadıköy", price: "₺600", image: eventImages.futbol2, category: "Futbol" },
    { id: 100, name: "Beşiktaş vs Trabzon", date: "2025-12-16", venue: "İstanbul - Tüpraş", price: "₺500", image: eventImages.futbol3, category: "Futbol" },
    { id: 101, name: "GS vs Trabzonspor", date: "2025-12-20", venue: "İstanbul - RAMS", price: "₺550", image: eventImages.futbol2, category: "Futbol" },
    { id: 102, name: "FB vs Galatasaray", date: "2025-12-24", venue: "İstanbul - Kadıköy", price: "₺900", image: eventImages.futbol3, category: "Futbol" },
    { id: 103, name: "BJK vs Fenerbahçe", date: "2025-12-28", venue: "İstanbul - Tüpraş", price: "₺700", image: eventImages.futbol2, category: "Futbol" },
    { id: 104, name: "Türkiye vs Almanya", date: "2026-01-02", venue: "İstanbul - Atatürk", price: "₺400", image: eventImages.futbol3, category: "Futbol" },
    { id: 105, name: "Trabzon vs GS", date: "2026-01-06", venue: "Trabzon - Şenol Güneş", price: "₺450", image: eventImages.futbol2, category: "Futbol" },
    { id: 106, name: "Milli Maç Hazırlık", date: "2025-12-10", venue: "İstanbul - TT Arena", price: "₺350", image: eventImages.futbol3, category: "Futbol" },
    { id: 107, name: "Süper Kupa Finali", date: "2025-12-31", venue: "Riyad - Suudi", price: "₺1200", image: eventImages.futbol2, category: "Futbol" },
    // ===== BASKETBOL (8 etkinlik) =====
    { id: 108, name: "Fenerbahçe vs Efes", date: "2025-12-09", venue: "İstanbul - Ülker", price: "₺300", image: eventImages.basket3, category: "Basketbol" },
    { id: 109, name: "Galatasaray vs FB", date: "2025-12-13", venue: "İstanbul - Sinan Erdem", price: "₺400", image: eventImages.basket3, category: "Basketbol" },
    { id: 110, name: "Efes vs Real Madrid", date: "2025-12-17", venue: "İstanbul - Sinan Erdem", price: "₺500", image: eventImages.basket3, category: "Basketbol" },
    { id: 111, name: "FB vs Barcelona", date: "2025-12-21", venue: "İstanbul - Ülker", price: "₺550", image: eventImages.basket3, category: "Basketbol" },
    { id: 112, name: "All-Star Game", date: "2025-12-25", venue: "Ankara - Arena", price: "₺350", image: eventImages.basket3, category: "Basketbol" },
    { id: 113, name: "Milli Takım vs Fransa", date: "2025-12-29", venue: "İstanbul - Sinan", price: "₺280", image: eventImages.basket3, category: "Basketbol" },
    { id: 114, name: "Euroleague Final Four", date: "2026-01-03", venue: "Köln - Arena", price: "₺800", image: eventImages.basket3, category: "Basketbol" },
    { id: 115, name: "Beşiktaş vs Karşıyaka", date: "2025-12-11", venue: "İstanbul - Akatlar", price: "₺200", image: eventImages.basket3, category: "Basketbol" },
    // ===== FESTİVALLER (8 etkinlik) =====
    { id: 116, name: "Yılbaşı Festivali", date: "2025-12-31", venue: "İstanbul - KüçükÇiftlik", price: "₺350", image: eventImages.fest3, category: "Festival" },
    { id: 117, name: "Kış Festivali", date: "2025-12-15", venue: "Uludağ - Ski Center", price: "₺500", image: eventImages.festival2, category: "Festival" },
    { id: 118, name: "Aralık Festivali", date: "2025-12-20", venue: "Antalya - Expo", price: "₺400", image: eventImages.fest3, category: "Festival" },
    { id: 119, name: "Müzik Festivali", date: "2025-12-25", venue: "İzmir - Fuarizm", price: "₺450", image: eventImages.festival2, category: "Festival" },
    { id: 120, name: "Year End Party", date: "2025-12-28", venue: "Bodrum - Beach", price: "₺600", image: eventImages.fest3, category: "Festival" },
    { id: 121, name: "Ocak Fest 2025", date: "2026-01-05", venue: "İstanbul - Life Park", price: "₺380", image: eventImages.festival2, category: "Festival" },
    { id: 122, name: "Winter Wonderland", date: "2025-12-22", venue: "Ankara - ATO", price: "₺300", image: eventImages.fest3, category: "Festival" },
    { id: 123, name: "Countdown Party", date: "2025-12-30", venue: "İstanbul - Swissotel", price: "₺700", image: eventImages.festival2, category: "Festival" },
    // ===== TEKNOLOJİ & GAMING (8 etkinlik) =====
    { id: 124, name: "TechFest 2025", date: "2025-12-10", venue: "İstanbul - Lütfi Kırdar", price: "₺250", image: eventImages.tech2, category: "Teknoloji" },
    { id: 125, name: "Developer Summit", date: "2025-12-14", venue: "Ankara - Bilkent", price: "₺300", image: eventImages.tech2, category: "Teknoloji" },
    { id: 126, name: "Gaming Istanbul", date: "2025-12-18", venue: "İstanbul - ICEC", price: "₺150", image: eventImages.game2, category: "Gaming" },
    { id: 127, name: "AI Conference", date: "2025-12-22", venue: "İstanbul - Boğaziçi", price: "₺400", image: eventImages.tech2, category: "Teknoloji" },
    { id: 128, name: "E-Sports Turnuvası", date: "2025-12-26", venue: "İstanbul - Esports", price: "₺200", image: eventImages.game2, category: "Gaming" },
    { id: 129, name: "Startup Summit", date: "2025-12-30", venue: "İstanbul - Zorlu", price: "₺350", image: eventImages.tech2, category: "Teknoloji" },
    { id: 130, name: "Valorant Turnuvası", date: "2025-12-12", venue: "Ankara - Arena", price: "₺100", image: eventImages.game2, category: "Gaming" },
    { id: 131, name: "CS2 Championship", date: "2025-12-16", venue: "İstanbul - TechPark", price: "₺120", image: eventImages.game2, category: "Gaming" },
    // ===== SERGİ & SANAT (6 etkinlik) =====
    { id: 132, name: "Van Gogh Immersive", date: "2025-12-08", venue: "İstanbul - Pera", price: "₺200", image: eventImages.sergi2, category: "Sergi" },
    { id: 133, name: "Picasso Dijital", date: "2025-12-15", venue: "İstanbul - Tersane", price: "₺180", image: eventImages.sergi2, category: "Sergi" },
    { id: 134, name: "Contemporary Art", date: "2025-12-22", venue: "İstanbul - Modern", price: "₺150", image: eventImages.sergi2, category: "Sergi" },
    { id: 135, name: "Monet Experience", date: "2025-12-29", venue: "Ankara - CerModern", price: "₺220", image: eventImages.sergi2, category: "Sergi" },
    { id: 136, name: "Salvador Dali", date: "2026-01-05", venue: "İstanbul - Sakıp Sabancı", price: "₺250", image: eventImages.sergi2, category: "Sergi" },
    { id: 137, name: "Dijital Sanat", date: "2025-12-18", venue: "İstanbul - Borusan", price: "₺170", image: eventImages.sergi2, category: "Sergi" },
    // ===== SİNEMA & GALA (6 etkinlik) =====
    { id: 138, name: "Film Galası", date: "2025-12-10", venue: "İstanbul - Cinemaximum", price: "₺100", image: eventImages.sinema2, category: "Sinema" },
    { id: 139, name: "Yılın Filmleri", date: "2025-12-17", venue: "Ankara - Kinopark", price: "₺80", image: eventImages.sinema2, category: "Sinema" },
    { id: 140, name: "Marvel Premiere", date: "2025-12-24", venue: "İstanbul - Zorlu", price: "₺150", image: eventImages.sinema2, category: "Sinema" },
    { id: 141, name: "Türk Filmi Galası", date: "2025-12-31", venue: "İstanbul - Emek", price: "₺120", image: eventImages.sinema2, category: "Sinema" },
    { id: 142, name: "Yılbaşı Film Fest", date: "2026-01-01", venue: "İzmir - AFM", price: "₺90", image: eventImages.sinema2, category: "Sinema" },
    { id: 143, name: "Oscar Adayları", date: "2026-01-07", venue: "İstanbul - Cinemaximum", price: "₺110", image: eventImages.sinema2, category: "Sinema" }
];


// ====== SEARCH FUNCTION ======
function searchEvents(query) {
    if (!query || query.length < 2) {
        hideDropdown();
        return;
    }

    showLoading();
    
    // Simulate small delay for UX
    setTimeout(() => {
        const lowerQuery = query.toLowerCase();
        const results = localEvents.filter(event => 
            event.name.toLowerCase().includes(lowerQuery) ||
            event.venue.toLowerCase().includes(lowerQuery) ||
            event.category.toLowerCase().includes(lowerQuery)
        );

        if (results.length > 0) {
            displayResults(results);
        } else {
            showNoResults();
        }
    }, 300);
}

// ====== DISPLAY RESULTS ======
function displayResults(events) {
    hideLoading();
    hideNoResults();
    
    searchResults.innerHTML = events.map(event => `
        <a href="event-detail.html?id=${event.id}" class="search-result-item">
            <img src="${event.image}" alt="${event.name}" class="search-result-image" onerror="this.src='https://via.placeholder.com/60?text=🎫'">
            <div class="search-result-info">
                <div class="search-result-title">${event.name}</div>
                <div class="search-result-meta">
                    <span><i class="far fa-calendar"></i> ${event.date}</span>
                    <span><i class="fas fa-map-marker-alt"></i> ${event.venue}</span>
                </div>
            </div>
            <div class="search-result-price">${event.price}'den</div>
        </a>
    `).join('');

    showDropdown();
}

// ====== HELPER FUNCTIONS ======
function showDropdown() {
    if (searchDropdown) searchDropdown.classList.add('active');
}

function hideDropdown() {
    if (searchDropdown) searchDropdown.classList.remove('active');
}

function showLoading() {
    showDropdown();
    if (searchLoading) searchLoading.classList.add('active');
    if (noResults) noResults.classList.remove('active');
    if (searchResults) searchResults.innerHTML = '';
}

function hideLoading() {
    if (searchLoading) searchLoading.classList.remove('active');
}

function showNoResults() {
    hideLoading();
    if (noResults) noResults.classList.add('active');
    if (searchResults) searchResults.innerHTML = '';
    showDropdown();
}

function hideNoResults() {
    if (noResults) noResults.classList.remove('active');
}

// ====== EVENT LISTENERS ======
if (searchInput) {
    // Debounced search on input
    const debouncedSearch = debounce((query) => {
        searchEvents(query);
    }, 400);

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        if (query.length >= 2) {
            debouncedSearch(query);
        } else {
            hideDropdown();
        }
    });

    // Search on Enter key
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query.length >= 2) {
                searchEvents(query);
            }
        }
    });

    // Focus event
    searchInput.addEventListener('focus', () => {
        if (searchResults && searchResults.innerHTML && searchInput.value.length >= 2) {
            showDropdown();
        }
    });
}

// Search button click
if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query.length >= 2) {
            searchEvents(query);
        }
    });
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-bar')) {
        hideDropdown();
    }
});

// ====== SWIPER INITIALIZATION ======
const swiper = new Swiper('.events-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// ====== MOBILE MENU TOGGLE ======
const mobileToggle = document.getElementById('mobileToggle');
const nav = document.getElementById('nav');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// ====== CATEGORY CLICK HANDLERS ======
const categoryCards = document.querySelectorAll('.category-card');

categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.querySelector('h3').textContent;
        // Search for category
        if (searchInput) {
            searchInput.value = category;
            searchEvents(category);
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});

// ====== HERO BACKGROUND SLIDER ======
const heroSlides = document.querySelectorAll('.hero-bg-slide');
let currentSlide = 0;

function changeHeroBackground() {
    if (heroSlides.length === 0) return;
    
    // Remove active from current slide
    heroSlides[currentSlide].classList.remove('active');
    
    // Move to next slide
    currentSlide = (currentSlide + 1) % heroSlides.length;
    
    // Add active to new slide
    heroSlides[currentSlide].classList.add('active');
}

// Change background every 5 seconds
if (heroSlides.length > 0) {
    setInterval(changeHeroBackground, 5000);
}

// ====== HERO CAROUSEL INFINITE SCROLL ======
const carouselTrack = document.querySelector('.carousel-track');

if (carouselTrack) {
    // Clone carousel items for infinite scroll effect
    const carouselItems = carouselTrack.querySelectorAll('.carousel-item');
    carouselItems.forEach(item => {
        const clone = item.cloneNode(true);
        carouselTrack.appendChild(clone);
    });
}

console.log('🎫 KolayBilet - Hero slider ve carousel aktif');

// ====== DATE STRIP ======
const dateTrack = document.getElementById('dateTrack');
const datePrevBtn = document.getElementById('datePrev');
const dateNextBtn = document.getElementById('dateNext');
const selectedDateText = document.getElementById('selectedDateText');
const eventCountElement = document.getElementById('eventCount');
const swiperWrapper = document.querySelector('.events-slider .swiper-wrapper');

// Turkish day and month names
const dayNames = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'];
const monthNames = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'];
const monthNamesFull = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];

let dateOffset = 0;
const visibleDates = 10;
const totalDates = 30;

// Generate events for each date - filter by actual event dates
const dateEvents = {};

function assignEventsToDate(dateStr, dayIndex) {
    // Filter events that match this specific date
    const matchingEvents = localEvents.filter(event => event.date === dateStr);
    
    if (matchingEvents.length > 0) {
        // Use actual matching events for this date
        dateEvents[dateStr] = matchingEvents;
    } else {
        // If no events on this date, leave empty or show message
        dateEvents[dateStr] = [];
    }
}

function generateDates() {
    if (!dateTrack) return;
    
    const today = new Date();
    dateTrack.innerHTML = '';
    
    for (let i = 0; i < totalDates; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        
        const dayName = dayNames[date.getDay()];
        const dayNum = date.getDate();
        const monthName = monthNames[date.getMonth()];
        const dateStr = date.toISOString().split('T')[0];
        
        // Assign events to this date
        assignEventsToDate(dateStr, i);
        
        const isToday = i === 0;
        const isActive = i === 0;
        const eventCount = dateEvents[dateStr]?.length || 0;
        
        const dateItem = document.createElement('div');
        dateItem.className = `date-item${isToday ? ' today' : ''}${isActive ? ' active' : ''}`;
        dateItem.dataset.date = dateStr;
        dateItem.dataset.dayIndex = i;
        dateItem.innerHTML = `
            <span class="date-weekday">${dayName}</span>
            <span class="date-day">${dayNum}</span>
            <span class="date-month">${monthName}</span>
        `;
        
        dateItem.addEventListener('click', () => selectDate(dateItem, date, i));
        dateTrack.appendChild(dateItem);
    }
    
    // Initialize with today's events
    const todayStr = today.toISOString().split('T')[0];
    updateEventDisplay(todayStr, today, 0);
}

function selectDate(selectedItem, date, dayIndex) {
    // Remove active from all items
    document.querySelectorAll('.date-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active to selected item  
    selectedItem.classList.add('active');
    
    // Get selected date
    const selectedDate = selectedItem.dataset.date;
    
    // Update event display
    updateEventDisplay(selectedDate, date, dayIndex);
}

function updateEventDisplay(dateStr, date, dayIndex) {
    const events = dateEvents[dateStr] || [];
    
    // Update selected date text
    if (selectedDateText) {
        if (dayIndex === 0) {
            selectedDateText.textContent = 'Bugün';
        } else if (dayIndex === 1) {
            selectedDateText.textContent = 'Yarın';
        } else {
            const dayNum = date.getDate();
            const monthName = monthNamesFull[date.getMonth()];
            selectedDateText.textContent = `${dayNum} ${monthName}`;
        }
    }
    
    // Update event count
    if (eventCountElement) {
        eventCountElement.textContent = `${events.length} etkinlik`;
    }
    
    // Update swiper with filtered events
    updateSwiperEvents(events);
    
    console.log(`📅 ${dateStr}: ${events.length} etkinlik`);
}

function updateSwiperEvents(events) {
    if (!swiperWrapper) return;
    
    // If no events, show a message
    if (events.length === 0) {
        swiperWrapper.innerHTML = `
            <div class="swiper-slide no-events-slide">
                <div class="no-events-message">
                    <i class="far fa-calendar-times"></i>
                    <h3>Bu Tarihte Etkinlik Yok</h3>
                    <p>Başka bir tarih seçerek etkinlikleri keşfedin</p>
                </div>
            </div>
        `;
        if (typeof swiper !== 'undefined' && swiper) {
            swiper.update();
        }
        return;
    }
    
    // Format date for display (convert ISO to Turkish format)
    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        const day = date.getDate();
        const month = monthNamesFull[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    };
    
    // Generate new event cards
    const eventCards = events.map(event => `
        <div class="swiper-slide">
            <a href="event-detail.html?id=${event.id}" class="event-card">
                <div class="event-image">
                    <img src="${event.image}" alt="${event.name}" onerror="this.src='https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400'">
                    <div class="event-badge">${getCategoryIcon(event.category)} ${event.category}</div>
                </div>
                <div class="event-content">
                    <div class="event-category">
                        <i class="${getCategoryIconClass(event.category)}"></i>
                        ${event.category}
                    </div>
                    <h3 class="event-title">${event.name}</h3>
                    <div class="event-info">
                        <div class="event-date">
                            <i class="far fa-calendar"></i>
                            ${formatDate(event.date)}
                        </div>
                        <div class="event-location">
                            <i class="fas fa-map-marker-alt"></i>
                            ${event.venue}
                        </div>
                    </div>
                    <div class="event-footer">
                        <div class="event-price">${event.price}'den başlayan</div>
                        <span class="btn btn-primary btn-sm">Detaylar</span>
                    </div>
                </div>
            </a>
        </div>
    `).join('');
    
    swiperWrapper.innerHTML = eventCards;
    
    // Reinitialize swiper
    if (typeof swiper !== 'undefined' && swiper) {
        swiper.update();
    }
}

function getCategoryIcon(category) {
    const icons = {
        'Konser': '🎵',
        'Rock': '🎸',
        'Rap': '🎤',
        'Elektronik': '🎧',
        'Müzikal': '🎭',
        'Tiyatro': '🎭',
        'Opera': '🎼',
        'Bale': '💃',
        'Stand-up': '😂',
        'Futbol': '⚽',
        'Basketbol': '🏀',
        'Festival': '🎉',
        'Teknoloji': '💻',
        'Gaming': '🎮',
        'Sergi': '🎨',
        'TV Şov': '📺'
    };
    return icons[category] || '🎫';
}

function getCategoryIconClass(category) {
    const classes = {
        'Konser': 'fas fa-music',
        'Rock': 'fas fa-guitar',
        'Rap': 'fas fa-microphone-alt',
        'Elektronik': 'fas fa-headphones',
        'Müzikal': 'fas fa-theater-masks',
        'Tiyatro': 'fas fa-theater-masks',
        'Opera': 'fas fa-music',
        'Bale': 'fas fa-shoe-prints',
        'Stand-up': 'fas fa-laugh',
        'Futbol': 'fas fa-futbol',
        'Basketbol': 'fas fa-basketball-ball',
        'Festival': 'fas fa-campground',
        'Teknoloji': 'fas fa-laptop-code',
        'Gaming': 'fas fa-gamepad',
        'Sergi': 'fas fa-paint-brush',
        'TV Şov': 'fas fa-tv'
    };
    return classes[category] || 'fas fa-ticket-alt';
}

function scrollDates(direction) {
    if (!dateTrack) return;
    
    const itemWidth = 78; // 70px min-width + 8px gap
    const maxOffset = -(totalDates - visibleDates) * itemWidth;
    
    if (direction === 'next') {
        dateOffset = Math.max(maxOffset, dateOffset - itemWidth * 3);
    } else {
        dateOffset = Math.min(0, dateOffset + itemWidth * 3);
    }
    
    dateTrack.style.transform = `translateX(${dateOffset}px)`;
    
    // Update button states
    if (datePrevBtn) datePrevBtn.disabled = dateOffset >= 0;
    if (dateNextBtn) dateNextBtn.disabled = dateOffset <= maxOffset;
}

// Initialize date strip
generateDates();

// Date navigation buttons
if (datePrevBtn) {
    datePrevBtn.addEventListener('click', () => scrollDates('prev'));
    datePrevBtn.disabled = true; // Initially disabled
}

if (dateNextBtn) {
    dateNextBtn.addEventListener('click', () => scrollDates('next'));
}

console.log('📅 Tarih şeridi aktif - Etkinlik filtreleme hazır');

