# 🎫 EventHub - Etkinlik ve Biletleme Platformu

Modern, kullanıcı dostu etkinlik ve biletleme platformu. Biletix/Passo benzeri ama daha modern tasarım ve animasyonlarla.

## ✨ Özellikler

### Ana Sayfa
- 🎭 **Animasyonlu Etkinlik Slider**: Swiper.js ile smooth geçişler
- 🎨 **Popüler Kategoriler**: Konser, Tiyatro, Spor, Stand-up vb.
- 🔍 **Arama Özelliği**: Etkinlik, sanatçı veya mekan arama
- 📱 **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm

### Koltuk Seçim Ekranı (⭐ Öne Çıkan)
- 🎭 **Sahne Düzeni**: Görsel sahne ve koltuk haritası
- 🔍 **Zoom Efekti**: Koltuk tıklandığında büyüme animasyonu
- ✨ **Seçim Animasyonu**: Smooth transitions ve efektler
- 🛒 **Sepet Yönetimi**: Gerçek zamanlı sepet güncellemesi
- 💰 **Dinamik Fiyatlandırma**: Normal ve VIP koltuklar

### Profil Sayfası
- 🎫 **Biletlerim**: Satın alınan tüm biletler
- 📱 **QR Kod**: Her bilet için benzersiz QR kod
- 💾 **LocalStorage**: Veriler tarayıcıda saklanır

## 🚀 Kullanım

1. `index.html` dosyasını tarayıcıda açın
2. Etkinliklere göz atın
3. "Bilet Al" butonuna tıklayın
4. Koltukları seçin (tıklayınca zoom efekti!)
5. "Ödemeye Geç" ile satın alın
6. Profil sayfasından biletlerinizi ve QR kodlarını görün

## 📁 Dosya Yapısı

```
event-ticketing/
├── index.html              # Ana sayfa
├── seat-selection.html     # Koltuk seçimi
├── profile.html            # Profil sayfası
├── css/
│   ├── style.css          # Ana stil dosyası
│   ├── seat-selection.css # Koltuk seçim stilleri
│   └── profile.css        # Profil stilleri
└── js/
    ├── main.js            # Ana sayfa JS
    ├── seat-selection.js  # Koltuk seçim mantığı
    └── profile.js         # Profil ve QR kod
```

## 🎨 Teknolojiler

- **HTML5**: Semantic markup
- **CSS3**: Modern animations, Grid, Flexbox
- **Vanilla JavaScript**: Hafif ve hızlı
- **Swiper.js**: Slider animasyonları
- **QRCode.js**: QR kod oluşturma
- **Font Awesome**: İkonlar

## 🌐 Vercel Deployment

```bash
# Vercel CLI ile
vercel

# Veya GitHub üzerinden
1. GitHub'a push edin
2. Vercel Dashboard'da "New Project"
3. Repository'yi seçin
4. Deploy!
```

## 🎯 Öne Çıkan Özellikler

### Koltuk Zoom Animasyonu
```javascript
// Koltuk tıklandığında
seat.classList.add('zooming');
// CSS ile scale(1.8) animasyonu
```

### QR Kod Oluşturma
```javascript
new QRCode(container, {
  text: ticketId,
  width: 256,
  height: 256
});
```

### LocalStorage Entegrasyonu
```javascript
localStorage.setItem('purchases', JSON.stringify(purchases));
```

## 📱 Responsive Tasarım

- **Mobil**: Tek sütun layout, optimize edilmiş koltuk grid
- **Tablet**: 2 sütun layout
- **Desktop**: 3 sütun layout, tam özellikler

## 🎨 Renk Paleti

- **Primary**: #6366f1 (Indigo)
- **Secondary**: #8b5cf6 (Purple)
- **Success**: #10b981 (Green)
- **Warning**: #f59e0b (Gold - VIP)
- **Danger**: #ef4444 (Red - Dolu)

## 📝 Lisans

MIT

## 👨‍💻 Geliştirici

EventHub - Modern Etkinlik Platformu
