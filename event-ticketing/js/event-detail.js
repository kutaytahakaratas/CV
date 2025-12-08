// ==========================================
// EVENT DETAIL - SMART VERSION
// Reads from parent page's localEvents array
// ==========================================

// Get events data from main.js (loaded in parent page)
function getAllEvents() {
    // Try to get from parent window first (if in iframe)
    if (window.parent && window.parent.localEvents) {
        return window.parent.localEvents;
    }
    // Try to get from global scope
    if (typeof localEvents !== 'undefined') {
        return localEvents;
    }
    // Fallback - return empty array
    return [];
}

// Category-specific description templates
const categoryDescriptions = {
    'Konser': (name) => `${name.split(' - ')[0]} sahne alıyor! Tüm hit şarkıları, muhteşem sahne performansı ve unutulmaz bir gece sizi bekliyor. Canlı müziğin enerjisiyle dolu bu konser deneyimini kaçırmayın.`,
    'Rock': (name) => `${name.split(' - ')[0]} rock sahnesinde! Elektro gitarların şov, yüksek enerji ve rock'n'roll ruhuyla dolu bir gece. Tüm klasik şarkılar ve sahne performansı ile rock severleri bekliyor.`,
    'Rap': (name) => `${name.split(' - ')[0]} mikrofon başında! Türkçe rap'in en iyi flow'u, güçlü sözler ve sahne enerjisiyle unutulmaz bir gece. Hip-hop kültürünün zirvesinde bir performans.`,
    'Elektronik': (name) => `${name.split(' - ')[0]} DJ setinde! Elektronik müziğin en iyi beat'leri, bass ve dans pistinde sabaha kadar sürecek bir parti. Club atmosferi ve ışık gösterisi ile muhteşem bir gece.`,
    'Müzikal': (name) => `${name} sahneye geliyor! Profesyonel oyuncular, canlı orkestra eşliği ve görkemli prodüksiyon ile duygusal bir yolculuk. Müzik ve tiyatronun buluştuğu muhteşem bir gösterim.`,
    'Tiyatro': (name) => `${name} sahnede! Profesyonel oyunculuk, etkileyici hikaye ve sahne sanatının en güzel örneklerinden biri. Drama ve duygularla dolu bir tiyatro deneyimi sizi bekliyor.`,
    'Opera': (name) => `${name} opera sahnesi! Güçlü sesler, klasik orkestra ve görkemli kostümlerle opera sanatının zirvesi. Dünyaca ünlü aryalar ve unutulmaz bir kültürel deneyim.`,
    'Bale': (name) => `${name} bale performansı! Zarafet, güzellik ve şiirsel hareketlerle dans sanatının en üst seviyesi. Klasik bale koreografisi ve profesyonel dansçılar ile görsel bir şölen.`,
    'Stand-up': (name) => `${name} sahnede! Türkiye'nin en komik ismi, kahkaha dolu anlar ve güncel mizah ile unutulmaz bir gece. Stand-up komedinin en iyi örnekleri ile eğlence garantili.`,
    'Futbol': (name) => `${name} maçı! Stadyumda tribünlerin coşkusu, takım marşları ve 90 dakikalık heyecan. Futbolun tüm tutkusunu yaşayacağınız bir müsabaka sizi bekliyor.`,
    'Basketbol': (name) => `${name} basketbol karşılaşması! Parkede yüksek tempo, basketbol yıldızları ve adrenalin dolu anlar. Basketbolun heyecanını tribünlerde yaşayın.`,
    'Festival': (name) => `${name} festivali! Müzik, eğlence ve dostlukla dolu günler. Çok sayıda sahne, farklı sanatçılar ve unutulmaz festival atmosferi sizi bekliyor.`,
    'Teknoloji': (name) => `${name} tech event! Geleceğin teknolojileri, innovasyon ve networking fırsatları. Panel tartışmaları, workshop'lar ve teknoloji dünyasının öncüleriyle buluşma imkanı.`,
    'Gaming': (name) => `${name} gaming turnuvası! E-spor heyecanı, profesyonel oyuncular ve gaming kültürü. Turnuva, oyun deneyimleri ve oyunseverlerin buluşma noktası.`,
    'Sergi': (name) => `${name} sergisi! Sanat eserleri, görsel deneyim ve kültürel zenginlik. Müze atmosferinde sanatın farklı yönlerini keşfetme fırsatı.`,
    'Sinema': (name) => `${name} film gösterimi! Beyaz perdede sinema sanatı, özel gösterim ve film tutkunları için kaçırılmayacak bir deneyim.`
};

// Generate unique features based on event details
function generateEventFeatures(basicEvent) {
    const category = basicEvent.category || 'Konser';
    const eventName = basicEvent.name;
    const eventId = basicEvent.id;
    
    // Base features by category
    const baseFeatures = {
        'Konser': [
            'Canlı performans',
            'Hit şarkılar',
            'Özel sahne tasarımı',
            'Profesyonel ses sistemi',
            'Işık gösterisi',
            'VIP alan seçenekleri',
            'Backstage meet & greet şansı',
            'Sahne efektleri',
            'Akustik deneyim',
            'Konser sonrası imza seansı'
        ],
        'Rock': [
            'Elektro gitar soloları',
            'Yüksek enerji performans',
            'Rock band formation',
            'Kalabalık etkileşimi',
            'Amfi ses sistemi',
            'Duvar of sound deneyimi',
            'Drum soloları',
            'Bass performansı',
            'Rock anthem şarkılar',
            'Açık hava sahnesi'
        ],
        'Rap': [
            'Canlı rap performansı',
            'Flow ve beat showcase',
            'Konuk rapperlar',
            'Hip-hop kültürü deneyimi',
            'DJ set performansı',
            'Freestyle bölümleri',
            'Rap battle atmosferi',
            'Underground sound',
            'Turntable performansı',
            'Beatbox gösterisi'
        ],
        'Elektronik': [
            'DJ performansı',
            'Bass ve synthesizer',
            'Işık gösterisi',
            'Dans pisti',
            'After party',
            'Lazer show',
            'VJ performansı',
            'EDM atmosferi',
            'Club sound system',
            'Gece yarısı seti'
        ],
        'Müzikal': [
            'Profesyonel oyuncu kadrosu',
            'Canlı orkestra eşliği',
            'Görkemli kostümler',
            'Koreografi',
            'Duygusal hikaye',
            'Sahne dekoru',
            'Broadway tarzı prodüksiyon',
            'Musical numbers',
            'Ara performansları',
            'Final perdesi'
        ],
        'Tiyatro': [
            'Profesyonel oyunculuk',
            'Sahne tasarımı',
            'Etkileyici senaryo',
            'Dramaturji',
            'Kültürel deneyim',
            'Klasik eser yorumu',
            'Modern sahneleme',
            'Kostüm tasarımı',
            'Sahne ışıklandırması',
            'Perde arası'
        ],
        'Opera': [
            'Canlı orkestra',
            'Opera solistleri',
            'Klasik müzik',
            'Görkemli sahneleme',
            'Kültürel zenginlik',
            'Aryalar',
            'Soprano performansı',
            'Tenor soloları',
            'Orkestra şefi',
            'Opera kültürü'
        ],
        'Bale': [
            'Profesyonel dansçılar',
            'Klasik koreografi',
            'Canlı müzik eşliği',
            'Sahne kostümleri',
            'Zarafet gösterisi',
            'Dans sanatı',
            'Bale tekniği',
            'Partnering performansı',
            'Pointework',
            'Grand jeté gösterileri'
        ],
        'Stand-up': [
            'Komedi gösterisi',
            'Doğaçlama anlar',
            'Güncel mizah',
            'Sürpriz konuklar',
            'Kahkaha garantisi',
            'Observational komedi',
            'Skeçler',
            'Hikaye anlatımı',
            'Crowd work',
            'Q&A bölümü'
        ],
        'Futbol': [
            'Süper Lig maçı',
            'Tribün atmosferi',
            'Taraftar koreografisi',
            'Maç öncesi etkinlikler',
            'Stadyum deneyimi',
            'Taraftar marşları',
            'Maç sonrası kutlama',
            'Forma satış standları',
            'Fan zone aktiviteleri',
            'Oyuncu ısınması'
        ],
        'Basketbol': [
            'Profesyonel basketbol',
            'Heyecan dolu maç',
            'Basketbol yıldızları',
            'Arena atmosferi',
            'Taraftar desteği',
            'Üç sayılık yarışması',
            'Smaç gösterileri',
            'Devre arası showlar',
            'Cheerleader performansı',
            'Mascot gösterileri'
        ],
        'Festival': [
            'Çoklu sahne',
            'Farklı sanatçılar',
            'Açık hava deneyimi',
            'Festival atmosferi',
            'Gıda standları',
            'Camping alanı',
            'Workshop alanları',
            'Sanat enstalasyonları',
            'Sosyal aktiviteler',
            'Festival hatıra ürünleri'
        ],
        'Teknoloji': [
            'Konferans panelleri',
            'Workshop oturumları',
            'Networking fırsatları',
            'Innovation showcase',
            'Tech demo',
            'Startup pitch',
            'Hackathon',
            'Keynote konuşmalar',
            'Ürün lansmanları',
            'Career fair'
        ],
        'Gaming': [
            'E-spor turnuvası',
            'Oyun deneyimleri',
            'Pro gamerlar',
            'Gaming setup',
            'Cosplay alanı',
            'Retro oyunlar',
            'VR deneyim',
            'Turnuva finali',
            'Meet & greet',
            'Gaming merchandise'
        ],
        'Sergi': [
            'Sanat eserleri',
            'İnteraktif deneyim',
            'Ses rehber',
            'Müze atmosferi',
            'Fotoğraf izni',
            'Sanatçı buluşması',
            'Workshop alanı',
            'Katalog hediye',
            'Rehberli tur',
            'Müze mağazası'
        ],
        'Sinema': [
            'Film gösterimi',
            'Sinema deneyimi',
            'Özel gösterim',
            'Q&A oturumu',
            'Premium ses',
            'IMAX deneyimi',
            '3D gösterim',
            'Yönetmen söyleşisi',
            'Film festivali',
            'Özel poster hediye'
        ]
    };
    
    // Get base features for category
    const categoryFeats = baseFeatures[category] || baseFeatures['Konser'];
    
    // Create unique combination for this event
    // Use event ID to deterministically select features
    const selectedFeatures = [];
    const featureIndices = [];
    
    // Select 5-6 features based on event ID
    const numFeatures = 5 + (eventId % 2); // 5 or 6 features
    const seed = eventId * 7; // Deterministic seed
    
    for (let i = 0; i < numFeatures; i++) {
        let index = (seed + i * 13) % categoryFeats.length;
        // Avoid duplicates
        while (featureIndices.includes(index)) {
            index = (index + 1) % categoryFeats.length;
        }
        featureIndices.push(index);
        selectedFeatures.push(categoryFeats[index]);
    }
    
    return selectedFeatures;
}

// Generate detailed event data from basic info
function enrichEventData(basicEvent) {
    const category = basicEvent.category || 'Konser';
    
    return {
        id: basicEvent.id,
        title: basicEvent.name,
        category: category,
        categoryIcon: getCategoryIcon(category),
        date: formatDate(basicEvent.date),
        time: "20:00", // Default
        location: basicEvent.venue,
        address: basicEvent.venue.split(' - ')[1] || basicEvent.venue,
        image: basicEvent.image,
        priceMin: parseInt(basicEvent.price.replace(/[^0-9]/g, '')),
        priceMax: parseInt(basicEvent.price.replace(/[^0-9]/g, '')) * 1.5,
        badge: getBadgeForEvent(basicEvent),
        badgeType: "featured",
        description: (categoryDescriptions[category] || categoryDescriptions['Konser'])(basicEvent.name),
        features: generateEventFeatures(basicEvent), // NOW GENERATES UNIQUE FEATURES!
        doorTime: getDoorTime(category),
        ageLimit: getAgeLimit(category),
        availability: Math.floor(Math.random() * 60) + 20
    };
}

function getCategoryIcon(category) {
    const icons = {
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
    return icons[category] || 'fas fa-ticket-alt';
}

function formatDate(isoDate) {
    const monthNames = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
    const date = new Date(isoDate);
    return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
}

function getBadgeForEvent(event) {
    const badges = ['🔥 Çok Popüler', '⭐ Öne Çıkan', '🎉 Yeni', '💎 Premium', '🎯 Özel'];
    return badges[event.id % badges.length];
}

function getDoorTime(category) {
    const times = {
        'Konser': 'Konserden 2 saat önce',
        'Rock': 'Konserden 2 saat önce',
        'Rap': 'Konserden 1.5 saat önce',
        'Elektronik': 'Partiden 1 saat önce',
        'Müzikal': 'Gösterimden 1 saat önce',
        'Tiyatro': 'Gösterimden 30 dakika önce',
        'Opera': 'Gösterimden 1 saat önce',
        'Bale': 'Gösterimden 45 dakika önce',
        'Stand-up': 'Gösterimden 1 saat önce',
        'Futbol': 'Maçtan 3 saat önce',
        'Basketbol': 'Maçtan 2 saat önce',
        'Festival': 'Tüm gün açık',
        'Teknoloji': 'Etkinlikten 1 saat önce',
        'Gaming': 'Turnuvadan 30 dakika önce',
        'Sergi': 'Tüm gün açık',
        'Sinema': 'Gösterimden 15 dakika önce'
    };
    return times[category] || 'Etkinlikten 1 saat önce';
}

function getAgeLimit(category) {
    const limits = {
        'Konser': '+7 yaş',
        'Rock': '+12 yaş',
        'Rap': '+14 yaş',
        'Elektronik': '+18 yaş',
        'Müzikal': '+7 yaş',
        'Tiyatro': '+10 yaş',
        'Opera': '+10 yaş',
        'Bale': 'Tüm yaşlar',
        'Stand-up': '+16 yaş',
        'Futbol': 'Tüm yaşlar',
        'Basketbol': 'Tüm yaşlar',
        'Festival': '+12 yaş',
        'Teknoloji': '+16 yaş',
        'Gaming': '+12 yaş',
        'Sergi': 'Tüm yaşlar',
        'Sinema': '+13 yaş'
    };
    return limits[category] || 'Tüm yaşlar';
}

// Get event ID from URL
function getEventIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id')) || 1;
}

// Get event by ID
function getEventById(id) {
    const allEvents = getAllEvents();
    const basicEvent = allEvents.find(event => event.id === id);
    if (!basicEvent) {
        return allEvents.length > 0 ? enrichEventData(allEvents[0]) : null;
    }
    return enrichEventData(basicEvent);
}

// Load event details
function loadEventDetails() {
    const eventId = getEventIdFromUrl();
    const event = getEventById(eventId);

    if (!event) {
        console.error('Event not found:', eventId);
        document.body.innerHTML = '<h1 style="text-align:center;margin-top:100px;">Etkinlik bulunamadı</h1>';
        return;
    }

    // Update hero image
    const eventImageEl = document.getElementById('eventImage');
    if (eventImageEl) eventImageEl.src = event.image;
    
    // Update hero content
    const eventTitleEl = document.getElementById('eventTitle');
    if (eventTitleEl) eventTitleEl.textContent = event.title;
    
    const eventDateEl = document.getElementById('eventDate');
    if (eventDateEl) eventDateEl.textContent = event.date;
    
    const eventLocationEl = document.getElementById('eventLocation');
    if (eventLocationEl) eventLocationEl.textContent = event.location;
    
    const eventTimeEl = document.getElementById('eventTime');
    if (eventTimeEl) eventTimeEl.textContent = event.time;
    
    // Update category badge
    const categoryBadge = document.getElementById('eventCategory');
    if (categoryBadge) {
        categoryBadge.innerHTML = `<i class="${event.categoryIcon}"></i> ${event.category}`;
    }

    // Update description
    const descEl = document.getElementById('eventDescription');
    if (descEl) descEl.textContent = event.description;
    
    // Update features list
    const featuresList = document.getElementById('eventFeatures');
    if (featuresList) {
        featuresList.innerHTML = event.features.map(feature => 
            `<li><i class="fas fa-check-circle"></i> ${feature}</li>`
        ).join('');
    }

    // Update venue information
    const venueNameEl = document.getElementById('venueName');
    if (venueNameEl) {
        const venueParts = event.location.split(' - ');
        venueNameEl.textContent = venueParts[1] || event.location;
    }
    
    const venueAddressEl = document.getElementById('venueAddress');
    if (venueAddressEl) venueAddressEl.textContent = event.address;

    // Update important notes
    const doorTimeEl = document.getElementById('doorTime');
    if (doorTimeEl) doorTimeEl.textContent = event.doorTime;
    
    const ageLimitEl = document.getElementById('ageLimit');
    if (ageLimitEl) ageLimitEl.textContent = event.ageLimit;

    // Update price range
    const priceRangeEl = document.getElementById('priceRange');
    if (priceRangeEl) priceRangeEl.textContent = `₺${event.priceMin} - ₺${Math.round(event.priceMax)}`;

    // Update availability
    const availabilityFill = document.querySelector('.availability-fill');
    const availabilityText = document.querySelector('.availability-text');
    if (availabilityFill && availabilityText) {
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
    }

    // Load similar events
    loadSimilarEvents(event);
}

// Load similar events
function loadSimilarEvents(currentEvent) {
    const allEvents = getAllEvents();
    const enrichedEvents = allEvents.map(e => enrichEventData(e));
    
    const similarEvents = enrichedEvents
        .filter(e => e.id !== currentEvent.id && e.category === currentEvent.category)
        .slice(0, 3);

    // If not enough similar events, add random ones
    if (similarEvents.length < 3) {
        const otherEvents = enrichedEvents
            .filter(e => e.id !== currentEvent.id && !similarEvents.includes(e))
            .slice(0, 3 - similarEvents.length);
        similarEvents.push(...otherEvents);
    }

    const container = document.getElementById('similarEvents');
    if (!container) return;
    
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

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadEventDetails);
