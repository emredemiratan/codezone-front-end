## Codezone Vaka Çalışması – Rapkology Frontend

Bu repo, Codezone tarafından iletilen vaka çalışmasının frontend uygulamasını içerir. Proje, Figma tasarımına olabildiğince yakın, responsive (masaüstü/mobil) arayüz, Swiper tabanlı slider ve mock verinin (JSON) doğrudan import edilerek kullanımı gereksinimlerine uygun geliştirilmiştir. Teslim tarihi hedefi: 22 Eylül 2025.

### Canlı Demo ve Kod

-  Canlı Demo (Vercel/Netlify): https://codezone-front-end.vercel.app
-  GitHub Repository: https://github.com/emredemiratan/codezone-front-end.git

## Teknolojiler

-  Next.js 15 (App Router) + React 19
-  TypeScript
-  Tailwind CSS v4 + tailwindcss-animate
-  Swiper 12 (slider)
-  clsx, tailwind-merge

## Kurulum ve Çalıştırma

Önkoşullar: Node.js >= 18.18 (önerilen 20+)

```bash
# bağımlılıkları kurun
npm install

# geliştirme
npm run dev

# prod build
npm run build
npm start

# lint
npm run lint
```

Geliştirme sunucusu: `http://localhost:3000`

## Proje Mimarisi (Özet)

-  `src/app` App Router sayfaları
   -  `page.tsx`: Ana sayfa, `Desktop` ekranını render eder
   -  `blog/page.tsx`, `blog/[slug]/page.tsx`: Blog liste ve detay
-  `src/screens` ekran/seksiyon kompozisyonları
   -  `Desktop/sections/HeroSection/HeroSection.tsx`: Swiper slider + JSON destekli slaytlar
   -  `BlogPage/sections/ExploreSection/ExploreSection.tsx`: JSON’dan blog öne çıkan ve liste
-  `src/components/Header/Header.tsx`: Sticky, scroll-aware, mobil menülü header
-  `src/data.json`: Mock veri kaynağı (doğrudan import edilir)
-  `tailwind.config.ts`: Renk/font değişkenleri ve arka plan görselleri
-  `next.config.ts`: `images.remotePatterns` (Cloudinary görsellerine izin)

## Özellikler

-  Figma’ya yakın, responsive arayüz (header, hero, blog grid)
-  Swiper ile hero slider (loop, navigation, pagination benzeri dot kontrolleri)
-  Mock data (`src/data.json`) doğrudan import edilerek içerik besleme
-  Erişilebilirlik odakları: `aria-label`, `role`, `aria-expanded`, `Escape` ile mobil menü kapatma
-  Performans için Turbopack tabanlı dev/build komutları

## Teknik Tercihler ve Gerekçeler

-  Next.js 15 + React 19: En güncel App Router mimarisi, server-first yetenekler, yerleşik performans optimizasyonları.
-  Mock veri importu: Case gereği hızlı geliştirme ve network bağımsızlığı için `src/data.json` doğrudan import edilmiştir. Örnek kullanım:
   -  `HeroSection` ve `ExploreSection` içinde `createdAt` alanına göre sıralama, son içerikler öne çıkarılır.
-  Swiper 12: Hero slider için stabilized API, modüler kullanım (`Navigation`, `Pagination`), mobil/desktop farklılaştırmaları.
-  Tailwind CSS v4: Tasarıma yakın spacing/typography; değişken tabanlı renk ve font tanımları (`--blackblack`, `--yellow`, `--font-saira*`).
-  Görseller: Cloudinary ve statik `public/*` kullanımı. `next.config.ts` ile güvenli harici kaynak izni.

## Veri Yapısı ve İçerik Yönetimi

-  Kaynak: `src/data.json` (dizi)
-  Kullanılan alanlar: `attributes.title`, `attributes.desc`, `attributes.img`, `attributes.slug`, `createdAt`
-  Sıralama: Yeni içerikler önce gelecek şekilde `createdAt` azalan sıralama
-  Öne çıkan içerik: `ExploreSection` ilk öğeyi hero kartı olarak kullanır; sonraki 4 öğe yan listede gösterilir

İçerik eklemek için `src/data.json` sonuna aynı şema ile yeni obje eklemeniz yeterlidir. `slug` alanı varsa detay rota: `/blog/[slug]`.

## Erişilebilirlik (A11y)

-  Header: Klavye ile kapanan mobil menü (`Escape`), `aria-expanded`, `aria-controls`
-  Navigasyon ve butonlar: Anlamlı `aria-label` ve `role` kullanımı
-  Slider dot’ları: `aria-current` ile aktif durum bildirimi

## Performans Notları

-  Geliştirmede Turbopack (Next 15 default) kullanıldı
-  Görsel arkaplanlarında bazı yerlerde `img` tercih edilerek layout kontrolü sağlandı; içerik görsellerinde `next/image` kullanımı yaygınlaştırılabilir
-  Cloudinary görselleri uzak kaynaktan, izinli pattern ile yüklenir

## Deploy

### Vercel

-  Framework Preset: Next.js
-  Build Command: `npm run build`
-  Output: Otomatik (App Router)
-  Node.js: 20.x

### Netlify

-  Next.js Runtime ile otomatik yapılandırma desteklenir
-  Build Command: `npm run build`
-  Publish: `.next`

## Geliştirme Notları ve Sınırlar

-  Bu proje bir vaka çalışmasıdır; gerçek backend yoktur
-  Login butonu ve arama ikonu görseldir; fonksiyonellik placeholder’dır
-  Blog detay sayfaları temel şablonla yapılandırılmıştır; SEO/OG zenginleştirmesi minimaldir

## Yol Haritası (Öneri)

-  `img` → `next/image` geçişini tamamlayıp `blurDataURL` eklemek
-  Blog detay sayfalarında dinamik metadata ve OG görselleri
-  `data.json` yerine SSR/ISR ile API’dan veri besleme
-  `sitemap.xml`, `robots.txt` ve `Open Graph` geliştirmeleri
-  Erişilebilirlik iyileştirmeleri (kontrast, odak halkaları, skip links)

## Katkı ve Lisans

-  PR’lar memnuniyetle karşılanır
-  Lisans: — (talebe göre eklenecektir)

## Hızlı Bakış (Dosya Yapısı)

```
src/
  app/
    blog/
      [slug]/page.tsx
      page.tsx
    layout.tsx
    page.tsx
  components/
    Header/Header.tsx
  screens/
    Desktop/sections/HeroSection/HeroSection.tsx
    BlogPage/sections/ExploreSection/ExploreSection.tsx
  data.json
```

İletişim: Sorularınız için benimle iletişime geçebilirsiniz. İyi çalışmalar!
