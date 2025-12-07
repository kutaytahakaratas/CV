// ==========================================
// EVENT DETAIL - JAVASCRIPT
// Güncellenmiş versiyon - Tüm etkinlikleri destekler
// ==========================================

// Kategori ikon eşlemeleri
const categoryIcons = {
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
    'Sinema': 'fas fa-film'
};

// Kategori varsayılan açıklamaları
const categoryDescriptions = {
    'Konser': "Muhteşem bir müzik deneyimi sizi bekliyor! Canlı performans, özel ışık şovu ve unutulmaz anlar için hazır olun.",
    'Rock': "Rock müziğin enerjisi ile dolu muhteşem bir gece! Sahne performansı, elektro gitarlar ve coşkulu kalabalık.",
    'Rap': "Türkçe Rap'in en iyi isimleri sahnede! Flow, beat ve sözlerle dolu enerji patlaması.",
    'Elektronik': "Dünya çapında DJ performansı! Bass, synth ve dans pistinde unutulmaz bir gece.",
    'Müzikal': "Broadway kalitesinde muhteşem bir müzikal! Şarkılar, dans ve drama bir arada.",
    'Tiyatro': "Sahnede yaşanan dram ve komedi! Profesyonel oyunculuk ve etkileyici hikayeler.",
    'Opera': "Klasik müziğin en görkemli formu! Güçlü sesler, orkestra ve duygusal hikayeler.",
    'Bale': "Zarafet ve güzelliğin dansı! Klasik bale performansı muhteşem koreografilerle.",
    'Stand-up': "Kahkahaların durmadığı bir gece! Türkiye'nin en komik isimleri sahnede.",
    'Futbol': "Tribünlerin coşkusu, maçın heyecanı! Takımınızı desteklemek için hazır olun.",
    'Basketbol': "Parkede gerilim dorukta! Basketbolun en heyecanlı anları sizi bekliyor.",
    'Festival': "Müzik, eğlence ve dostluk! Açık havada unutulmaz bir festival deneyimi.",
    'Teknoloji': "Geleceğin teknolojileri burada! Konferanslar, workshoplar ve networking.",
    'Gaming': "E-spor heyecanı! Turnuvalar, oyun deneyimleri ve gaming kültürü.",
    'Sergi': "Sanatın büyülü dünyası! Görsel şölen ve interaktif deneyimler.",
    'Sinema': "Beyaz perdede büyü! Film gösterimleri, galalar ve sinema keyfi."
};

// Ana sayfa etkinlik verileri (ID: 1-12)
const mainPageEvents = [
    {
        id: 1,
        title: "Tarkan - Yeni Albüm Turnesi 2025",
        category: "Konser",
        categoryIcon: "fas fa-music",
        date: "15 Ocak 2025",
        time: "21:00",
        location: "İstanbul - Volkswagen Arena",
        address: "Huzur Mah. Maslak Ayazağa Cad. No:4, Sarıyer/İstanbul",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
        priceMin: 750,
        priceMax: 3500,
        badge: "🔥 Çok Popüler",
        badgeType: "hot",
        description: "Türk Pop Müziğinin Megastarı Tarkan, yeni albümüyle muhteşem bir konser deneyimi sunuyor! 2025 yılının en büyük müzik etkinliklerinden birine hazır olun. Tarkan'ın efsanevi sahne performansı, yeni şarkıları ve klasik hitleri bir arada!",
        features: ["3 saatlik canlı performans", "Yeni albümden ilk kez çalınacak şarkılar", "Özel ışık ve lazer show", "VIP alanında özel ikramlar", "Meet & Greet imkanı (Premium bilet)"],
        doorTime: "Konserden 2 saat önce",
        ageLimit: "+7 yaş",
        availability: 35
    },
    {
        id: 2,
        title: "Müslüm Baba Müzikali",
        category: "Müzikal",
        categoryIcon: "fas fa-theater-masks",
        date: "22 Aralık 2025",
        time: "20:30",
        location: "Ankara - CSO Ada",
        address: "Talatpaşa Bulvarı No:38, Altındağ/Ankara",
        image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800",
        priceMin: 400,
        priceMax: 1200,
        badge: "⭐ Gişe Rekoru",
        badgeType: "featured",
        description: "Türk arabesk müziğinin efsane ismi Müslüm Gürses'in hayatını anlatan bu muhteşem müzikal, izleyicileri duygusal bir yolculuğa çıkarıyor.",
        features: ["50+ profesyonel oyuncu kadrosu", "Canlı orkestra eşliği", "Orijinal kostümler ve dekor", "2.5 saatlik gösterim"],
        doorTime: "Gösterimden 1 saat önce",
        ageLimit: "+12 yaş",
        availability: 45
    },
    {
        id: 3,
        title: "TechFest İstanbul 2025",
        category: "Teknoloji",
        categoryIcon: "fas fa-laptop-code",
        date: "10-12 Ocak 2025",
        time: "09:00 - 20:00",
        location: "İstanbul - Lütfi Kırdar",
        address: "Gümüşsuyu Mah. Harbiye, Şişli/İstanbul",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
        priceMin: 250,
        priceMax: 2000,
        badge: "🚀 Yeni",
        badgeType: "new",
        description: "Türkiye'nin en büyük teknoloji festivali! Yapay zeka, blockchain, siber güvenlik konularında dünya çapında konuşmacılar.",
        features: ["100+ konuşmacı", "AI, Blockchain panelleri", "Startup Demo Day", "Networking partisi"],
        doorTime: "Her gün 08:30",
        ageLimit: "+16 yaş",
        availability: 60
    },
    {
        id: 4,
        title: "Fenerbahçe vs Anadolu Efes - EuroLeague",
        category: "Basketbol",
        categoryIcon: "fas fa-basketball-ball",
        date: "28 Aralık 2025",
        time: "20:00",
        location: "İstanbul - Ülker Spor Arena",
        address: "Atatürk Mah. Alemdağ Asfaltı Üzeri, Ümraniye/İstanbul",
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800",
        priceMin: 300,
        priceMax: 1500,
        badge: "🏀 Derbi",
        badgeType: "hot",
        description: "EuroLeague'in en heyecanlı derbilerinden biri! İstanbul'un iki basketbol devi karşı karşıya.",
        features: ["EuroLeague karşılaşması", "Maç öncesi fan activities", "Taraftar koreografisi", "Özel maç hatırası"],
        doorTime: "Maçtan 2 saat önce",
        ageLimit: "Tüm yaşlara uygun",
        availability: 25
    },
    {
        id: 5,
        title: "Carmen - İstanbul Devlet Operası",
        category: "Opera",
        categoryIcon: "fas fa-music",
        date: "5 Ocak 2025",
        time: "20:00",
        location: "İstanbul - Zorlu PSM",
        address: "Levazım Mah. Koru Sokağı No:2, Beşiktaş/İstanbul",
        image: "https://images.unsplash.com/photo-1580809361436-42a7ec204889?w=800",
        priceMin: 600,
        priceMax: 2500,
        badge: "🎭 Klasik",
        badgeType: "featured",
        description: "Georges Bizet'nin ölümsüz eseri Carmen, İstanbul Devlet Opera ve Balesi tarafından yorumlanıyor.",
        features: ["4 perdelik orijinal yapım", "150 kişilik orkestra", "Uluslararası solist kadrosu"],
        doorTime: "Gösterimden 1 saat önce",
        ageLimit: "+10 yaş",
        availability: 50
    },
    {
        id: 6,
        title: "David Guetta - Yılbaşı Partisi 2025",
        category: "Elektronik",
        categoryIcon: "fas fa-headphones",
        date: "31 Aralık 2025",
        time: "22:00 - 05:00",
        location: "Antalya - Regnum Carya Beach",
        address: "Belek Turizm Merkezi, Serik/Antalya",
        image: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=800",
        priceMin: 1500,
        priceMax: 5000,
        badge: "💥 Son Biletler",
        badgeType: "hot",
        description: "Dünyaca ünlü DJ David Guetta ile 2025'e merhaba deyin! Yılbaşı gecesinin en büyük partisi.",
        features: ["6+ saatlik DJ performans", "Havai fişek gösterisi", "Premium bar hizmeti", "After party erişimi"],
        doorTime: "21:00",
        ageLimit: "+18 yaş",
        availability: 15
    },
    {
        id: 7,
        title: "Sagopa Kajmer - Son Şarkılar Turnesi",
        category: "Rap",
        categoryIcon: "fas fa-microphone-alt",
        date: "20 Şubat 2025",
        time: "21:00",
        location: "İstanbul - Harbiye Açıkhava",
        address: "Harbiye Mah. Darülbedai Cad., Şişli/İstanbul",
        image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800",
        priceMin: 500,
        priceMax: 2000,
        badge: "🎤 Rap",
        badgeType: "featured",
        description: "Türkçe Rap'in efsane ismi Sagopa Kajmer, hayranlarıyla buluşuyor!",
        features: ["3+ saatlik canlı performans", "Tüm klasik hitler", "Özel konuk sanatçılar"],
        doorTime: "Konserden 2 saat önce",
        ageLimit: "+16 yaş",
        availability: 40
    },
    {
        id: 8,
        title: "İstanbul Coffee Festival 2025",
        category: "Festival",
        categoryIcon: "fas fa-coffee",
        date: "15-17 Mart 2025",
        time: "10:00 - 22:00",
        location: "İstanbul - KüçükÇiftlik Park",
        address: "Maçka, Şişli/İstanbul",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
        priceMin: 150,
        priceMax: 500,
        badge: "☕ Festival",
        badgeType: "new",
        description: "Kahve tutkunları için kaçırılmayacak festival! 100'den fazla kahve markası.",
        features: ["100+ kahve markası standı", "Barista şampiyonası", "Canlı akustik müzik"],
        doorTime: "Her gün 09:30",
        ageLimit: "Tüm yaşlara uygun",
        availability: 70
    },
    {
        id: 9,
        title: "Galatasaray vs Beşiktaş - Süper Lig",
        category: "Futbol",
        categoryIcon: "fas fa-futbol",
        date: "5 Nisan 2025",
        time: "19:00",
        location: "İstanbul - RAMS Park",
        address: "Huzur Mah. Sarıyer/İstanbul",
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800",
        priceMin: 500,
        priceMax: 3000,
        badge: "⚽ Derbi",
        badgeType: "hot",
        description: "İstanbul'un asırlık rekabeti! Galatasaray evinde Beşiktaş'ı ağırlıyor.",
        features: ["Süper Lig maçı", "Tribün koreografisi", "Maç öncesi fan zone"],
        doorTime: "Maçtan 3 saat önce",
        ageLimit: "Tüm yaşlara uygun",
        availability: 20
    },
    {
        id: 10,
        title: "Cem Yılmaz - Diamond Elite Plus",
        category: "Stand-up",
        categoryIcon: "fas fa-laugh",
        date: "28 Şubat 2025",
        time: "21:00",
        location: "İstanbul - Volkswagen Arena",
        address: "Huzur Mah. Maslak Ayazağa Cad. No:4, Sarıyer/İstanbul",
        image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800",
        priceMin: 600,
        priceMax: 2500,
        badge: "😂 Komedi",
        badgeType: "featured",
        description: "Türkiye'nin en sevilen komedyeni Cem Yılmaz, yepyeni gösterisiyle sahnede!",
        features: ["2.5+ saat gösteri", "Yepyeni materyaller", "Sürpriz konuklar"],
        doorTime: "Gösterimden 1.5 saat önce",
        ageLimit: "+16 yaş",
        availability: 55
    },
    {
        id: 11,
        title: "Pera Müzesi - Van Gogh Immersive",
        category: "Sergi",
        categoryIcon: "fas fa-paint-brush",
        date: "1 Ocak - 30 Haziran 2025",
        time: "10:00 - 20:00",
        location: "İstanbul - Pera Müzesi",
        address: "Meşrutiyet Cad. No:65, Beyoğlu/İstanbul",
        image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800",
        priceMin: 200,
        priceMax: 400,
        badge: "🎨 Sanat",
        badgeType: "new",
        description: "Vincent Van Gogh'un başyapıtlarına tamamen yeni bir deneyimle dalın!",
        features: ["360° immersive deneyim", "VR sanal atölye", "Sesli rehber (8 dil)"],
        doorTime: "Tüm gün açık",
        ageLimit: "Tüm yaşlara uygun",
        availability: 80
    },
    {
        id: 12,
        title: "Sertab Erener - Evgit Gel Turnesi",
        category: "Konser",
        categoryIcon: "fas fa-music",
        date: "14 Şubat 2025",
        time: "21:00",
        location: "İzmir - İzmir Arena",
        address: "Konak/İzmir",
        image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800",
        priceMin: 450,
        priceMax: 1800,
        badge: "💕 Sevgililer Günü",
        badgeType: "featured",
        description: "Eurovision şampiyonu Sertab Erener, Sevgiler Günü'nde İzmir'de!",
        features: ["Sevgililer Günü özel seti", "Romantik düet performansları", "Çiftlere özel hediyeler"],
        doorTime: "Konserden 2 saat önce",
        ageLimit: "+7 yaş",
        availability: 35
    }
];

// Dinamik etkinlikler için yardımcı fonksiyon
function createEventFromLocalData(id, name, date, venue, price, image, category, extraData = {}) {
    const priceNum = parseInt(price.replace(/[₺,']/g, '')) || 300;
    return {
        id: id,
        title: name,
        category: category,
        categoryIcon: categoryIcons[category] || 'fas fa-ticket-alt',
        date: formatDateForDisplay(date),
        time: extraData.time || "20:00",
        location: venue,
        address: extraData.address || venue + ", Türkiye",
        image: image || 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800',
        priceMin: priceNum,
        priceMax: extraData.priceMax || priceNum * 3,
        badge: extraData.badge || getCategoryBadge(category),
        badgeType: extraData.badgeType || "featured",
        description: extraData.description || categoryDescriptions[category] || "Harika bir etkinlik!",
        features: extraData.features || getDefaultFeatures(category),
        doorTime: extraData.doorTime || "Etkinlikten 1 saat önce",
        ageLimit: extraData.ageLimit || "Tüm yaşlara uygun",
        warning: extraData.warning || null,
        availability: extraData.availability || Math.floor(Math.random() * 50) + 20
    };
}

function formatDateForDisplay(isoDate) {
    if (!isoDate) return "Yakında";
    const date = new Date(isoDate);
    const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

function getCategoryBadge(category) {
    const badges = {
        'Konser': '🎵 Konser',
        'Rock': '🎸 Rock',
        'Rap': '🎤 Rap',
        'Elektronik': '🎧 DJ',
        'Müzikal': '🎭 Müzikal',
        'Tiyatro': '🎭 Tiyatro',
        'Opera': '🎼 Opera',
        'Bale': '💃 Bale',
        'Stand-up': '😂 Komedi',
        'Futbol': '⚽ Maç',
        'Basketbol': '🏀 Maç',
        'Festival': '🎉 Festival',
        'Teknoloji': '💻 Tech',
        'Gaming': '🎮 Gaming',
        'Sergi': '🎨 Sergi',
        'Sinema': '🎬 Sinema'
    };
    return badges[category] || '🎫 Etkinlik';
}

function getDefaultFeatures(category) {
    const features = {
        'Konser': ["Canlı performans", "Ses ve ışık şovu", "VIP alanı", "Meet & Greet imkanı"],
        'Rock': ["Elektro gitar şovu", "Canlı bant performansı", "Mosh pit alanı", "After party"],
        'Rap': ["Canlı rap performansı", "Beat showları", "Özel konuklar", "Freestyle session"],
        'Elektronik': ["DJ performansı", "Işık ve lazer show", "Premium bar", "VIP lounge"],
        'Müzikal': ["Profesyonel oyuncu kadrosu", "Canlı orkestra", "Özel kostümler", "Ara ikramı"],
        'Tiyatro': ["Profesyonel oyunculuk", "Orijinal dekor", "Ara ikramı", "Tiyatro lokali"],
        'Opera': ["Orkestra eşliği", "Uluslararası solistler", "Türkçe alt yazı", "VIP lounge"],
        'Bale': ["Klasik koreografi", "Canlı orkestra", "Ara büfesi", "Bale programı"],
        'Stand-up': ["Kesintisiz kahkaha", "Yeni materyaller", "Sürpriz konuklar", "After show"],
        'Futbol': ["Tribün coşkusu", "Maç programı", "Stadyum turu", "Fan zone"],
        'Basketbol': ["Tribün atmosferi", "Maç öncesi show", "Yarı zamanda aktiviteler", "Hatıra ürünleri"],
        'Festival': ["Açık hava eğlencesi", "Çoklu sahne", "Yiyecek standları", "Camping alanı"],
        'Teknoloji': ["Konferanslar", "Workshoplar", "Networking", "Demo alanları"],
        'Gaming': ["Turnuvalar", "Oyun alanları", "Cosplay yarışması", "Gaming gear"],
        'Sergi': ["İnteraktif deneyim", "Sesli rehber", "Fotoğraf alanları", "Hediye dükkanı"],
        'Sinema': ["Geniş ekran deneyimi", "Dolby ses sistemi", "Popcorn ikramı", "Film posteri"]
    };
    return features[category] || ["Harika bir deneyim", "Profesyonel organizasyon", "Kaliteli hizmet"];
}

// Tüm etkinlikleri içeren birleşik dizi
const eventsData = [...mainPageEvents];

// Get event ID from URL
function getEventIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id')) || 1;
}

// Dinamik etkinlik oluşturma (localEvents'ten gelen ID'ler için)
function getEventById(id) {
    // Her zaman createDynamicEvent'i kullan - fullEventDatabase'i önceliyor
    return createDynamicEvent(id);
}
function createDynamicEvent(id) {
    const fullEventDatabase = {
        // ===== KONSER ETKİNLİKLERİ (ID 1-10) =====
        1: { name: "Tarkan - Yeni Albüm Turnesi", category: "Konser", venue: "İstanbul - Volkswagen Arena", date: "2025-12-08", price: "₺750", image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800",
            time: "21:00", badge: "🔥 Mega Star", description: "Türk Pop'unun Megastarı Tarkan, yeni albümüyle sahne alıyor! 3 saatlik unutulmaz konser.",
            features: ["Yeni albüm şarkıları", "Işık ve lazer show", "VIP meet & greet", "Özel merchandise"],
            doorTime: "Konserden 2 saat önce", ageLimit: "+7 yaş", warning: "⚠️ Biletler çok hızlı tükeniyor!" },
        2: { name: "Sertab Erener - Evgit Gel", category: "Konser", venue: "İzmir - İzmir Arena", date: "2025-12-09", price: "₺450", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800",
            time: "20:30", badge: "🏆 Eurovision", description: "Eurovision şampiyonu Sertab Erener'den akustik ve pop şarkılarla dolu bir gece.",
            features: ["Akustik set", "Everyway That I Can canlı", "Sürpriz düetler", "Fotoğraf çekimi"],
            doorTime: "Konserden 1.5 saat önce", ageLimit: "Tüm yaşlar" },
        3: { name: "Mabel Matiz Konseri", category: "Konser", venue: "İstanbul - Bostancı", date: "2025-12-10", price: "₺550", image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800",
            time: "21:00", badge: "🌈 Alternatif", description: "Türk alternatif müziğinin yıldızı Mabel Matiz, tüm hitleriyle sahnede!",
            features: ["Gece Göçü şarkıları", "Özel bant performansı", "Samimi atmosfer", "Albüm satışı"],
            doorTime: "Konserden 1.5 saat önce", ageLimit: "+12 yaş" },
        4: { name: "Ajda Pekkan Gala", category: "Konser", venue: "İstanbul - Harbiye", date: "2025-12-11", price: "₺1200", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
            time: "20:00", badge: "👑 Süperstar", description: "Türk Pop'unun Kraliçesi Ajda Pekkan, özel gala gecesiyle izleyicilerle buluşuyor.",
            features: ["Orkestra eşliği", "Klasik şarkılar", "VIP kokteyl", "Özel kıyafet kodu"],
            doorTime: "Galadan 2 saat önce", ageLimit: "+16 yaş", warning: "⚠️ Resmi kıyafet zorunludur." },
        5: { name: "Sezen Aksu - 40. Yıl", category: "Konser", venue: "İstanbul - TT Stadyumu", date: "2025-12-12", price: "₺900", image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800",
            time: "20:00", badge: "⭐ Efsane", description: "Minik Serçe'nin 40 yıllık müzik yolculuğunu kutlayan dev konser! 50.000 kişilik stadyumda tarihi gece.",
            features: ["40 yılın şarkıları", "Sürpriz konuklar", "Dev sahne", "Havai fişek"],
            doorTime: "Konserden 3 saat önce", ageLimit: "Tüm yaşlar", warning: "⚠️ Tarihi gece için son biletler!" },
        6: { name: "Hadise - Aşk Turnesi", category: "Konser", venue: "Antalya - Aspendos", date: "2025-12-13", price: "₺650", image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800",
            time: "21:00", badge: "💃 Dans", description: "Hadise'nin enerjik şovuyla Aspendos Antik Tiyatro'da muhteşem gece!",
            features: ["Dans gösterileri", "Şik Şak Şok canlı", "Antik atmosfer", "Yıldızlar altında müzik"],
            doorTime: "Konserden 2 saat önce", ageLimit: "+7 yaş" },
        7: { name: "Kenan Doğulu Live", category: "Konser", venue: "İstanbul - Jolly Joker", date: "2025-12-14", price: "₺400", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",
            time: "22:00", badge: "🎤 Canlı", description: "Kenan Doğulu'nun samimi kulüp konseri! Yakın mesafeden performans keyfi.",
            features: ["Akustik düzenlemeler", "Seyirci istekleri", "After-party", "Sınırlı kontenjan"],
            doorTime: "Konserden 1 saat önce", ageLimit: "+18 yaş", warning: "⚠️ Sadece 500 kişilik kapasite!" },
        8: { name: "Gülşen - Bangır Tour", category: "Konser", venue: "Bodrum - Antik Tiyatro", date: "2025-12-15", price: "₺800", image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800",
            time: "21:30", badge: "💥 Bangır", description: "Gülşen'in yaz turnesi devam ediyor! Bodrum gecesinde Bangır Bangır!",
            features: ["Yaz hitleri", "Dans show", "VIP plaj partisi", "Özel DJ set"],
            doorTime: "Konserden 2 saat önce", ageLimit: "+16 yaş" },
        9: { name: "Sıla - Sahne Programı", category: "Konser", venue: "Ankara - Congresium", date: "2025-12-16", price: "₺550", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800",
            time: "20:00", badge: "🎵 Duygusal", description: "Sıla'nın büyülü sesi Ankara'da! Duygusal şarkılarla dolu bir akşam.",
            features: ["Akustik performanslar", "Piyano eşliği", "Fan buluşması", "Albüm imza"],
            doorTime: "Konserden 1.5 saat önce", ageLimit: "+7 yaş" },
        10: { name: "Teoman - Akustik Gece", category: "Konser", venue: "İstanbul - Zorlu PSM", date: "2025-12-17", price: "₺600", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800",
            time: "20:30", badge: "🎸 Akustik", description: "Teoman'ın en sevilen şarkıları akustik düzenlemelerle Zorlu PSM'de.",
            features: ["Akustik gitar", "Seyirci sohbetleri", "İstekler üzerine şarkılar", "Küçük salon atmosferi"],
            doorTime: "Konserden 1 saat önce", ageLimit: "+12 yaş" },
        
        // ===== BUGÜNKÜ ETKİNLİKLER (ID 200-207) =====
        200: { name: "Tarkan - Mega Konser", category: "Konser", venue: "İstanbul - Volkswagen Arena", date: "2025-12-07", price: "₺850", image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800" },
        201: { name: "Duman - Kış Konseri", category: "Rock", venue: "İstanbul - Küçükçiftlik", date: "2025-12-07", price: "₺650", image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800" },
        202: { name: "Ceza Rap Night", category: "Rap", venue: "Ankara - Congresium", date: "2025-12-07", price: "₺400", image: "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?w=800" },
        203: { name: "Cem Yılmaz Show", category: "Stand-up", venue: "İstanbul - Zorlu PSM", date: "2025-12-07", price: "₺700", image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800" },
        204: { name: "Fenerbahçe vs Galatasaray", category: "Futbol", venue: "İstanbul - Kadıköy", date: "2025-12-07", price: "₺900", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800" },
        205: { name: "Van Gogh Dijital Sergi", category: "Sergi", venue: "İstanbul - Pera", date: "2025-12-07", price: "₺220", image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800" },
        206: { name: "Martin Garrix DJ Set", category: "Elektronik", venue: "Bodrum - Beach Club", date: "2025-12-07", price: "₺1100", image: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800" },
        207: { name: "Hamlet - Tiyatro", category: "Tiyatro", venue: "İstanbul - DT Sahne", date: "2025-12-07", price: "₺280", image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800" },
        
        // ===== ROCK ETKİNLİKLERİ =====
        26: { name: "Duman - 25. Yıl", category: "Rock", venue: "İstanbul - Küçükçiftlik", date: "2025-12-08", price: "₺700", image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=800",
            time: "21:00", badge: "🎸 Efsane", description: "Türk Rock'ının efsane grubu Duman, 25. yıl özel konseriyle sahnede!",
            features: ["25 yılın şarkıları", "Özel konuklar", "Unplugged set", "VIP meet & greet"],
            doorTime: "Konserden 2 saat önce", ageLimit: "+12 yaş" },
        27: { name: "Mor ve Ötesi", category: "Rock", venue: "İzmir - Kültürpark", date: "2025-12-10", price: "₺400", image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800",
            time: "20:00", badge: "🎵 Alternatif", description: "Mor ve Ötesi İzmir'de! Tüm klasik şarkılarıyla açık hava konseri.",
            features: ["Cambaz canlı", "Açık hava atmosferi", "Food court", "Camping alanı"],
            doorTime: "Konserden 1.5 saat önce", ageLimit: "Tüm yaşlar" },
        28: { name: "Athena Rock Fest", category: "Rock", venue: "İstanbul - Parkorman", date: "2025-12-12", price: "₺350", image: "https://images.unsplash.com/photo-1508973379184-7517410fb0bc?w=800",
            time: "19:00", badge: "🤘 Ska-Rock", description: "Athena'nın enerjik ska-rock performansı! Her Şey Yolunda!",
            features: ["Canlı enerji", "Mosh pit alanı", "Sürpriz şarkılar", "After party"],
            doorTime: "Festivalden 2 saat önce", ageLimit: "+16 yaş" },
        29: { name: "Şebnem Ferah", category: "Rock", venue: "Bursa - Açık Hava", date: "2025-12-14", price: "₺450", image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800",
            time: "21:00", badge: "👑 Rock Kraliçesi", description: "Türk Rock'ının Kraliçesi Şebnem Ferah Bursa'da!",
            features: ["Klasik rock şarkıları", "Gitar solo performansı", "Fan buluşması"],
            doorTime: "Konserden 1.5 saat önce", ageLimit: "+12 yaş" },
        30: { name: "maNga Konseri", category: "Rock", venue: "Ankara - ODTÜ", date: "2025-12-16", price: "₺300", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800",
            time: "20:00", badge: "🏆 Eurovision", description: "Eurovision finalisti maNga ODTÜ'de! We Could Be The Same!",
            features: ["Eurovision şarkıları", "Öğrenci indirimi", "Kampüs atmosferi"],
            doorTime: "Konserden 1 saat önce", ageLimit: "Tüm yaşlar" },

        // ===== RAP ETKİNLİKLERİ =====
        41: { name: "Sagopa Kajmer", category: "Rap", venue: "İstanbul - Harbiye", date: "2025-12-09", price: "₺500", image: "https://images.unsplash.com/photo-1571609710324-5a8bf0b14c18?w=800",
            time: "21:00", badge: "🎤 Efsane MC", description: "Türkçe Rap'in efsanesi Sagopa Kajmer canlı performansıyla Harbiye'de!",
            features: ["Klasik parçalar", "Yeni albüm", "Beat showcase", "Freestyle session"],
            doorTime: "Konserden 2 saat önce", ageLimit: "+16 yaş" },
        42: { name: "Ceza & Killa Hakan", category: "Rap", venue: "Ankara - Congresium", date: "2025-12-11", price: "₺350", image: "https://images.unsplash.com/photo-1547355253-ff0740f6e8c1?w=800",
            time: "20:30", badge: "🔥 İkili Şov", description: "Türkçe Rap'in iki efsanesi tek sahnede! Ceza ve Killa Hakan Ankara'da!",
            features: ["Ortak şarkılar", "Solo performanslar", "Sürpriz düetler"],
            doorTime: "Konserden 1.5 saat önce", ageLimit: "+16 yaş", warning: "⚠️ Küfürlü içerik bulunmaktadır." },
        43: { name: "Ben Fero Tour", category: "Rap", venue: "İstanbul - IF", date: "2025-12-13", price: "₺400", image: "https://images.unsplash.com/photo-1559519530-a6a5c33edea1?w=800",
            time: "22:00", badge: "💥 Trap", description: "Ben Fero'nun bomba trap performansı IF Performance Hall'da!",
            features: ["Trap beats", "Light show", "VIP masa", "After party"],
            doorTime: "Partiden 1 saat önce", ageLimit: "+18 yaş" },
        44: { name: "Ezhel Live", category: "Rap", venue: "Antalya - Expo", date: "2025-12-15", price: "₺450", image: "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?w=800",
            time: "21:00", badge: "🌴 Yaz Konseri", description: "Ezhel Antalya'da! Felaket, Şehrimi Ara ve daha fazlası.",
            features: ["Hit şarkılar", "Açık hava", "DJ set", "Beach party"],
            doorTime: "Konserden 2 saat önce", ageLimit: "+16 yaş" },
        45: { name: "Şehinşah", category: "Rap", venue: "İzmir - Fuar", date: "2025-12-17", price: "₺350", image: "https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=800",
            time: "20:00", badge: "🎧 Underground", description: "Underground'un kralı Şehinşah İzmir'de!",
            features: ["Hardcore rap", "Fan meet", "Exclusive merch"],
            doorTime: "Gösteriden 1.5 saat önce", ageLimit: "+16 yaş" },
        
        // ===== ELEKTRONİK ETKİNLİKLERİ =====
        56: { name: "David Guetta", category: "Elektronik", venue: "Antalya - Regnum", date: "2025-12-31", price: "₺1500", image: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=800",
            time: "23:00", badge: "🎆 Yılbaşı", description: "Dünyaca ünlü DJ David Guetta ile 2026'ya merhaba! Yılbaşı partisi.",
            features: ["6 saat DJ set", "Havai fişek", "Premium bar", "Countdown party"],
            doorTime: "Partiden 3 saat önce", ageLimit: "+18 yaş", warning: "⚠️ Dress code: Elegant!" },
        57: { name: "Martin Garrix", category: "Elektronik", venue: "Bodrum - Beach Club", date: "2025-12-08", price: "₺1200", image: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800",
            time: "22:00", badge: "🔥 #1 DJ", description: "Dünyanın 1 numaralı DJ'i Martin Garrix Bodrum'da!",
            features: ["Animals canlı", "Lazer show", "VIP beach", "Pool party"],
            doorTime: "Partiden 2 saat önce", ageLimit: "+18 yaş" },
        58: { name: "Tiësto Club Life", category: "Elektronik", venue: "İstanbul - Klein", date: "2025-12-12", price: "₺800", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
            time: "23:00", badge: "⚡ Trance", description: "Tiësto'nun efsanevi Club Life partisi İstanbul'da!",
            features: ["Trance classics", "Club atmosferi", "State-of-art sound"],
            doorTime: "Kapı: 22:00", ageLimit: "+18 yaş" },
        59: { name: "Calvin Harris", category: "Elektronik", venue: "İstanbul - Life Park", date: "2025-12-16", price: "₺1000", image: "https://images.unsplash.com/photo-1504680177321-2e6a879aac86?w=800",
            time: "21:00", badge: "🎵 Pop-EDM", description: "Calvin Harris'in pop-EDM performansı açık havada!",
            features: ["Hit şarkılar", "Vocal performanslar", "Mega stage"],
            doorTime: "Etkinlikten 2 saat önce", ageLimit: "+16 yaş" },
        60: { name: "Deadmau5 Live", category: "Elektronik", venue: "İstanbul - Zorlu", date: "2025-12-20", price: "₺900", image: "https://images.unsplash.com/photo-1485872299829-c673f5194813?w=800",
            time: "22:00", badge: "🐭 Progressive", description: "Fare maskeli DJ Deadmau5 İstanbul'da!",
            features: ["İkonik mau5head", "Visual show", "Progressive house"],
            doorTime: "Gösteriden 1.5 saat önce", ageLimit: "+16 yaş" },
        
        // ===== TİYATRO ETKİNLİKLERİ =====
        68: { name: "Müslüm Baba Müzikali", category: "Tiyatro", venue: "Ankara - CSO Ada", date: "2025-12-09", price: "₺400", image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800",
            time: "20:00", badge: "🎭 Müzikal", description: "Müslüm Gürses'in hayatını anlatan duygusal müzikal.",
            features: ["50 oyunculu kadro", "Canlı orkestra", "Orijinal kostümler"],
            doorTime: "Gösterimden 1 saat önce", ageLimit: "+12 yaş" },
        69: { name: "Hisseli Harikalar Kumpanyası", category: "Tiyatro", venue: "İstanbul - Zorlu PSM", date: "2025-12-11", price: "₺350", image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800",
            time: "20:30", badge: "😊 Komedi", description: "Ferhan Şensoy'un efsane oyunu yeniden sahnede!",
            features: ["Klasik Türk tiyatrosu", "Kahkaha garantili", "Aile için uygun"],
            doorTime: "Gösterimden 45 dakika önce", ageLimit: "+7 yaş" },
        70: { name: "Kral Lear", category: "Tiyatro", venue: "Ankara - DT Sahne", date: "2025-12-13", price: "₺250", image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=800",
            time: "19:00", badge: "📚 Klasik", description: "Shakespeare'in ölümsüz trajedisi Devlet Tiyatrosu yorumuyla.",
            features: ["Profesyonel oyunculuk", "Klasik sahne", "Program kitapçığı"],
            doorTime: "Gösterimden 1 saat önce", ageLimit: "+12 yaş" },
        71: { name: "Notre Dame'ın Kamburu", category: "Tiyatro", venue: "İstanbul - Maximum Uniq", date: "2025-12-15", price: "₺500", image: "https://images.unsplash.com/photo-1580809361436-42a7ec204889?w=800",
            time: "20:00", badge: "🎶 Müzikal", description: "Victor Hugo'nun başyapıtı Broadway müzikali olarak!",
            features: ["Broadway prodüksiyonu", "Canlı orkestra", "Etkileyici dekor"],
            doorTime: "Gösterimden 1 saat önce", ageLimit: "+10 yaş" },
        72: { name: "Cats Broadway", category: "Tiyatro", venue: "İstanbul - Zorlu PSM", date: "2025-12-17", price: "₺600", image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=800",
            time: "20:30", badge: "⭐ Broadway", description: "Efsanevi Broadway müzikali Cats Türkiye'de!",
            features: ["Orijinal koreografi", "Memory şarkısı", "Kostüm şovu"],
            doorTime: "Gösterimden 1 saat önce", ageLimit: "Tüm yaşlar" },
        
        // ===== STAND-UP ETKİNLİKLERİ =====
        88: { name: "Cem Yılmaz Diamond", category: "Stand-up", venue: "İstanbul - VW Arena", date: "2025-12-08", price: "₺600", image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800", // Microphone
            time: "21:00", badge: "💎 Premium", description: "Türkiye'nin en sevilen komedyeni Cem Yılmaz, yepyeni 'Diamond' gösterisiyle sahnede! 3 saatlik kesintisiz kahkaha.",
            features: ["Yeni materyaller", "Sürpriz konuklar", "After-show meet & greet", "Özel merchandise"],
            doorTime: "Gösteriden 2 saat önce", ageLimit: "+16 yaş", warning: "⚠️ Gösteride küfürlü içerik bulunmaktadır." },
        89: { name: "Ata Demirer Show", category: "Stand-up", venue: "Ankara - Congresium", date: "2025-12-12", price: "₺400", image: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=800", // Stage/Artist
            time: "20:30", badge: "😂 Efsane", description: "Ata Demirer'in efsane karakterleri ve taklitleriyle unutulmaz bir gece! Tüm aile için uygun.",
            features: ["Klasik karakterler", "Müzikal performanslar", "Seyirci katılımı", "Fotoğraf çekimi"],
            doorTime: "Gösteriden 1.5 saat önce", ageLimit: "+7 yaş" },
        90: { name: "Güldür Güldür Show", category: "Stand-up", venue: "İstanbul - MEB", date: "2025-12-16", price: "₺250", image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800", // Theatre crowd/stage
            time: "20:00", badge: "📺 TV Favorisi", description: "Televizyonun en sevilen komedi programı canlı sahnede! Tüm ekip bir arada.",
            features: ["TV'den tanıdık sketçler", "Yeni sürpriz bölümler", "Ekip ile tanışma", "Selfie köşesi"],
            doorTime: "Gösteriden 1 saat önce", ageLimit: "Tüm yaşlar" },
        91: { name: "Şahan Gökbakar", category: "Stand-up", venue: "İzmir - Kültürpark", date: "2025-12-20", price: "₺450", image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800", // Microphone
            time: "21:00", badge: "🎬 Recep İvedik", description: "Recep İvedik'in yaratıcısı Şahan Gökbakar canlı performansıyla İzmir'de! Sınırsız kahkaha garantili.",
            features: ["Stand-up performansı", "Film anekdotları", "Seyirci soru-cevap", "İmza gecesi"],
            doorTime: "Gösteriden 1.5 saat önce", ageLimit: "+12 yaş" },
        92: { name: "Tolga Çevik Solo", category: "Stand-up", venue: "İstanbul - Zorlu PSM", date: "2025-12-24", price: "₺350", image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800", // Theatre empty stage
            time: "20:00", badge: "🎄 Yılbaşı Özel", description: "Yılbaşı öncesi son kahkahalar! Tolga Çevik'in özel yılbaşı gösterisi.",
            features: ["Yılbaşı temalı şakalar", "Sürpriz hediyeler", "Noel Baba skeçi", "After-party daveti"],
            doorTime: "Gösteriden 1 saat önce", ageLimit: "+12 yaş" },
        
        // ===== FUTBOL ETKİNLİKLERİ =====
        98: { name: "Galatasaray vs Fenerbahçe", category: "Futbol", venue: "İstanbul - RAMS Park", date: "2025-12-08", price: "₺800", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800",
            time: "20:00", badge: "🔥 Derbi", description: "Türkiye'nin en büyük derbisi! Aslan-Kanarya rekabeti RAMS Park'ta. 60.000 taraftar, eşsiz atmosfer.",
            features: ["Kale arkası tribünü", "Maç programı hediye", "Fan zone etkinlikleri", "Özel güvenlik"],
            doorTime: "Maçtan 3 saat önce", ageLimit: "+7 yaş", warning: "⚠️ Deplasman taraftarları giriş yapamaz. Kimlik kontrolü yapılacaktır." },
        99: { name: "Fenerbahçe vs Beşiktaş", category: "Futbol", venue: "İstanbul - Kadıköy", date: "2025-12-12", price: "₺600", image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800",
            time: "19:00", badge: "⚽ Klasik", description: "Kadıköy'de dev derbi! Sarı-Lacivert tribünlerin coşkusu Şükrü Saracoğlu'nda.",
            features: ["Tribün koreografisi", "Maç öncesi şov", "Stadyum turu imkanı", "Hatıra bileti"],
            doorTime: "Maçtan 2.5 saat önce", ageLimit: "Tüm yaşlar", warning: "⚠️ Alkollü içecek yasaktır. Metro ile ulaşım önerilir." },
        100: { name: "Beşiktaş vs Trabzonspor", category: "Futbol", venue: "İstanbul - Tüpraş", date: "2025-12-16", price: "₺500", image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800",
            time: "20:30", badge: "🦅 Kartal", description: "Tüpraş Stadyumu'nda Karadeniz fırtınası! İki takım arasında kritik puan mücadelesi.",
            features: ["Çarşı tribünü atmosferi", "Maç sonu oyuncu imza", "Beşiktaş Store indirimi"],
            doorTime: "Maçtan 2 saat önce", ageLimit: "+12 yaş" },
        101: { name: "Galatasaray vs Trabzonspor", category: "Futbol", venue: "İstanbul - RAMS Park", date: "2025-12-20", price: "₺550", image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800",
            time: "21:00", badge: "🏆 Şampiyonluk", description: "Şampiyonluk yarışının kritik maçı! Cimbom evinde 3 puan peşinde.",
            features: ["Ultra tribün deneyimi", "Maç öncesi konser", "VIP park alanı"],
            doorTime: "Maçtan 2 saat önce", ageLimit: "Tüm yaşlar" },
        102: { name: "Fenerbahçe vs Galatasaray", category: "Futbol", venue: "İstanbul - Kadıköy", date: "2025-12-24", price: "₺900", image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800",
            time: "19:00", badge: "💥 Yılın Maçı", description: "Yılın son derbisi Kadıköy'de! Tarihi rekabet, unutulmaz anlar için biletinizi şimdi alın.",
            features: ["Yılbaşı özel koreografisi", "Sınırlı sayıda VIP", "After-party daveti", "Özel maç forması şansı"],
            doorTime: "Maçtan 3 saat önce", ageLimit: "+7 yaş", warning: "⚠️ Son biletler! Sahte bilet uyarısı - sadece resmi kanallardan alın." },
        
        // ===== BASKETBOL ETKİNLİKLERİ =====
        108: { name: "Fenerbahçe vs Efes", category: "Basketbol", venue: "İstanbul - Ülker Arena", date: "2025-12-09", price: "₺300", image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800",
            time: "20:00", badge: "🏀 EuroLeague", description: "EuroLeague'in dev randevusu! İstanbul'un iki devi Ülker Arena'da kozlarını paylaşıyor.",
            features: ["Tribün şovu", "Yarı zaman gösterileri", "Maskot etkinlikleri", "FB Store indirimi"],
            doorTime: "Maçtan 1.5 saat önce", ageLimit: "Tüm yaşlar" },
        109: { name: "Galatasaray vs Fenerbahçe", category: "Basketbol", venue: "İstanbul - Sinan Erdem", date: "2025-12-13", price: "₺400", image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800",
            time: "19:00", badge: "🔥 Derbi", description: "Basketbol derbisi Sinan Erdem'de! Sarı-Kırmızı tribünler coşacak.",
            features: ["Dev ekran maç analizi", "Cheerleader şovu", "Ücretsiz park", "Taraftar paketleri"],
            doorTime: "Maçtan 2 saat önce", ageLimit: "+7 yaş", warning: "⚠️ Deplasman seyircisi alınmamaktadır." },
        110: { name: "Anadolu Efes vs Real Madrid", category: "Basketbol", venue: "İstanbul - Sinan Erdem", date: "2025-12-17", price: "₺500", image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800",
            time: "20:45", badge: "⭐ EuroLeague", description: "Avrupa'nın iki devi karşı karşıya! Real Madrid'in yıldızlarını canlı izleme şansı.",
            features: ["VIP karşılama", "Otograf imza saati", "Özel forma çekilişi", "Premium büfe"],
            doorTime: "Maçtan 2 saat önce", ageLimit: "Tüm yaşlar" },
        111: { name: "Fenerbahçe vs Barcelona", category: "Basketbol", venue: "İstanbul - Ülker Arena", date: "2025-12-21", price: "₺550", image: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?w=800",
            time: "20:00", badge: "🌟 Süper Maç", description: "EuroLeague klasiği! Barcelona'nın dünya yıldızları Ülker Arena'da.",
            features: ["Meet & Greet şansı", "Sınırlı VIP biletler", "Özel hatıra ürünleri", "Canlı yayın röportajları"],
            doorTime: "Maçtan 2 saat önce", ageLimit: "Tüm yaşlar", warning: "⚠️ Biletler hızla tükeniyor!" },
        
        // Sergi etkinlikleri
        132: { name: "Van Gogh Immersive", category: "Sergi", venue: "İstanbul - Pera", date: "2025-12-08", price: "₺200", image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800" },
        133: { name: "Picasso Dijital", category: "Sergi", venue: "İstanbul - Tersane", date: "2025-12-15", price: "₺180", image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=800" },
        134: { name: "Contemporary Art", category: "Sergi", venue: "İstanbul - Modern", date: "2025-12-22", price: "₺150", image: "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=800" },
        135: { name: "Monet Experience", category: "Sergi", venue: "Ankara - CerModern", date: "2025-12-29", price: "₺220", image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800" },
        
        // Festival etkinlikleri
        116: { name: "Yılbaşı Festivali", category: "Festival", venue: "İstanbul - KüçükÇiftlik", date: "2025-12-31", price: "₺350", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800" },
        117: { name: "Kış Festivali", category: "Festival", venue: "Uludağ - Ski Center", date: "2025-12-15", price: "₺500", image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800" },
        118: { name: "Aralık Festivali", category: "Festival", venue: "Antalya - Expo", date: "2025-12-20", price: "₺400", image: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?w=800" },
        119: { name: "Müzik Festivali", category: "Festival", venue: "İzmir - Fuarizm", date: "2025-12-25", price: "₺450", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800" }
    };
    
    // Veritabanında varsa kullan
    if (fullEventDatabase[id]) {
        const data = fullEventDatabase[id];
        return createEventFromLocalData(id, data.name, data.date, data.venue, data.price, data.image, data.category, data);
    }
    
    // Veritabanında yoksa kategori bazlı varsayılan oluştur
    let category, name;
    if (id >= 1 && id <= 25) { category = "Konser"; name = "Konser Etkinliği"; }
    else if (id >= 26 && id <= 40) { category = "Rock"; name = "Rock Konseri"; }
    else if (id >= 41 && id <= 55) { category = "Rap"; name = "Rap Konseri"; }
    else if (id >= 56 && id <= 67) { category = "Elektronik"; name = "DJ Performansı"; }
    else if (id >= 68 && id <= 79) { category = "Tiyatro"; name = "Tiyatro Gösterimi"; }
    else if (id >= 80 && id <= 87) { category = "Opera"; name = "Opera Gösterisi"; }
    else if (id >= 88 && id <= 97) { category = "Stand-up"; name = "Stand-up Gösterisi"; }
    else if (id >= 98 && id <= 107) { category = "Futbol"; name = "Futbol Maçı"; }
    else if (id >= 108 && id <= 115) { category = "Basketbol"; name = "Basketbol Maçı"; }
    else if (id >= 116 && id <= 123) { category = "Festival"; name = "Festival"; }
    else if (id >= 124 && id <= 131) { category = "Teknoloji"; name = "Tech Etkinliği"; }
    else if (id >= 132 && id <= 137) { category = "Sergi"; name = "Sanat Sergisi"; }
    else if (id >= 138 && id <= 143) { category = "Sinema"; name = "Film Gösterimi"; }
    else { category = "Konser"; name = "Etkinlik"; }
    
    return createEventFromLocalData(id, name, null, "Türkiye", "₺400", null, category);
}

// Load event details
function loadEventDetails() {
    const eventId = getEventIdFromUrl();
    const event = getEventById(eventId);

    // Debug log
    console.log('🎫 Yüklenen etkinlik ID:', eventId, '- Başlık:', event.title);

    // Update hero section
    document.getElementById('eventImage').src = event.image;
    document.getElementById('eventImage').alt = event.title;
    document.getElementById('eventTitle').textContent = event.title;
    document.getElementById('eventDate').textContent = event.date;
    document.getElementById('eventLocation').textContent = event.location;
    document.getElementById('eventTime').textContent = event.time;
    
    // Update category badge
    const categoryBadge = document.getElementById('eventCategory');
    categoryBadge.innerHTML = `<i class="${event.categoryIcon}"></i> ${event.category}`;

    // Update details
    document.getElementById('eventDescription').textContent = event.description;
    
    // Update features
    const featuresList = document.getElementById('eventFeatures');
    featuresList.innerHTML = event.features.map(f => 
        `<li><i class="fas fa-check-circle"></i> ${f}</li>`
    ).join('');

    // Update venue
    document.getElementById('venueName').textContent = event.location.split(' - ')[1] || event.location;
    document.getElementById('venueAddress').textContent = event.address;

    // Update important notes
    document.getElementById('doorTime').textContent = event.doorTime;
    document.getElementById('ageLimit').textContent = event.ageLimit;

    // Update price range
    document.getElementById('priceRange').textContent = `₺${event.priceMin} - ₺${event.priceMax}`;

    // Update availability
    const availabilityFill = document.querySelector('.availability-fill');
    const availabilityText = document.querySelector('.availability-text');
    const usedPercentage = 100 - event.availability;
    availabilityFill.style.width = usedPercentage + '%';
    
    if (event.availability <= 20) {
        availabilityText.textContent = `%${usedPercentage} doluluk - Son biletler!`;
        availabilityText.style.color = 'var(--color-danger)';
    } else if (event.availability <= 40) {
        availabilityText.textContent = `%${usedPercentage} doluluk - Biletler tükeniyor!`;
        availabilityText.style.color = 'var(--color-warning)';
    } else {
        availabilityText.textContent = `%${usedPercentage} doluluk - Biletler mevcut`;
        availabilityText.style.color = 'var(--color-success)';
    }

    // Load similar events
    loadSimilarEvents(event);
}

// Load similar events
function loadSimilarEvents(currentEvent) {
    const similarEvents = eventsData
        .filter(e => e.id !== currentEvent.id && e.category === currentEvent.category)
        .slice(0, 3);

    // If not enough similar events, add random ones
    if (similarEvents.length < 3) {
        const otherEvents = eventsData
            .filter(e => e.id !== currentEvent.id && !similarEvents.includes(e))
            .slice(0, 3 - similarEvents.length);
        similarEvents.push(...otherEvents);
    }

    const container = document.getElementById('similarEvents');
    container.innerHTML = similarEvents.map(event => `
        <a href="event-detail.html?id=${event.id}" class="event-card">
            <div class="event-image">
                <img src="${event.image}" alt="${event.title}">
                <div class="event-badge ${event.badgeType}">${event.badge}</div>
            </div>
            <div class="event-content">
                <div class="event-category">
                    <i class="${event.categoryIcon}"></i>
                    ${event.category}
                </div>
                <h3 class="event-title">${event.title}</h3>
                <div class="event-info">
                    <div class="event-date">
                        <i class="far fa-calendar"></i>
                        ${event.date}
                    </div>
                    <div class="event-location">
                        <i class="fas fa-map-marker-alt"></i>
                        ${event.location}
                    </div>
                </div>
                <div class="event-footer">
                    <div class="event-price">₺${event.priceMin}'den başlayan</div>
                    <span class="btn btn-primary btn-sm">Detaylar</span>
                </div>
            </div>
        </a>
    `).join('');
}

// Initialize
document.addEventListener('DOMContentLoaded', loadEventDetails);
 
 / /   = = = = = =   M O B I L E   M E N U   T O G G L E   = = = = = =  
 c o n s t   m o b i l e T o g g l e   =   d o c u m e n t . g e t E l e m e n t B y I d ( ' m o b i l e T o g g l e ' ) ;  
 c o n s t   n a v   =   d o c u m e n t . g e t E l e m e n t B y I d ( ' n a v ' ) ;  
  
 i f   ( m o b i l e T o g g l e )   {  
         m o b i l e T o g g l e . a d d E v e n t L i s t e n e r ( ' c l i c k ' ,   ( )   = >   {  
                 n a v . c l a s s L i s t . t o g g l e ( ' a c t i v e ' ) ;  
         } ) ;  
 }  
 