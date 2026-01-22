export interface Product {
    id: string;
    slug: string;
    name: string;
    brand: string;
    category: string;
    categorySlug: string; // Added for filtering
    description: string;
    specs: Record<string, string>;
    stockStatus: "Stokta" | "Tükendi" | "Sipariş Üzerine";
    images: string[];
    price?: string;
    sku: string;
}

export const PRODUCTS: Product[] = [
    {
        id: "1",
        name: "GSR 180-LI Akülü Delme/Vidalama Makinesi",
        slug: "gsr-180-li-akulu-delme-vidalama",
        brand: "Bosch Professional",
        category: "Elektrikli El Aletleri",
        categorySlug: "elektrikli-el-aletleri",
        description: "<p>Bosch kalitesiyle uygun fiyatlı <b>GSR 180-Li</b>, değiştirilebilir kömür fırçaları ile motorun kullanım ömrünü uzatır. Dayanıklı gövde tasarımı ve hücre koruması sayesinde zorlu şantiye koşullarına dayanıklıdır.</p>",
        specs: {
            "Akü Gerilimi": "18.0 V",
            "Tork (yumuşak/sert)": "21/54 Nm",
            "Rölanti Devir Sayısı": "0 – 500 / 0 – 1.900 dev/dak",
            "Ağırlık (Akü hariç)": "1.6 kg",
            "Mandren Çapı": "13 mm"
        },
        stockStatus: "Stokta",
        sku: "BOSCH-06019F8109",
        images: [
            "https://images.unsplash.com/photo-1622033663740-1c73ad75f56b?w=800&q=80",
            "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80"
        ]
    },
    {
        id: "2",
        name: "DHR242Z Şarjlı Kırıcı Delici",
        slug: "dhr242z-sarjli-kirici-delici",
        brand: "Makita",
        category: "Elektrikli El Aletleri",
        categorySlug: "elektrikli-el-aletleri",
        description: "<p>Kömürsüz motor teknolojisi ile daha uzun çalışma süresi. Toz emme sistemi takılabilir. Titreşim önleyici gövde yapısı ile konforlu kullanım.</p>",
        specs: {
            "Kapasite (Beton)": "24 mm",
            "Kapasite (Çelik)": "13 mm",
            "Darbe Gücü": "2.0 J",
            "Ağırlık": "3.3 kg",
            "Motor Tipi": "BL (Kömürsüz)"
        },
        stockStatus: "Sipariş Üzerine",
        sku: "MAKITA-DHR242Z",
        images: [
            "https://images.unsplash.com/photo-1540652674932-d17dc80a37b1?w=800&q=80"
        ]
    },
    {
        id: "3",
        name: "3M 6200 Yarım Yüz Gaz Maskesi",
        slug: "3m-6200-yarim-yuz-gaz-maskesi",
        brand: "3M",
        category: "İş Güvenliği & KKD",
        categorySlug: "is-guvenligi",
        description: "<p>Hafif, dengeli ve konforlu tasarım. Çift filtre sistemi sayesinde düşük solunum direnci sağlar. Farklı gaz ve buhar filtreleri ile kullanılabilir.</p>",
        specs: {
            "Boyut": "Orta (M)",
            "Malzeme": "Termoplastik Elastomer",
            "Standart": "EN 140:1998",
            "Filtre Bağlantısı": "Bayonet"
        },
        stockStatus: "Stokta",
        sku: "3M-6200M",
        images: [
            "https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=800&q=80"
        ]
    },
    {
        id: "4",
        name: "İzeltaş Kombine Anahtar Takımı (12 Parça)",
        slug: "izeltas-kombine-anahtar-takimi-12",
        brand: "İzeltaş",
        category: "Mekanik Aletler",
        categorySlug: "mekanik-baglanti",
        description: "<p>Yüksek kaliteli krom vanadyum çeliğinden üretilmiştir. Sıcak dövme teknolojisi ile ekstra dayanıklılık. Nikel üzeri krom kaplama korozyona karşı korur.</p>",
        specs: {
            "Parça Sayısı": "12",
            "Ölçüler": "6-22 mm",
            "Standart": "TS 3794 DIN 3113",
            "Malzeme": "Krom Vanadyum"
        },
        stockStatus: "Stokta",
        sku: "IZELTAS-032001112",
        images: [
            "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&q=80"
        ]
    },
    {
        id: "5",
        name: "Fluke 179 True-RMS Dijital Multimetre",
        slug: "fluke-179-true-rms-dijital-multimetre",
        brand: "Fluke",
        category: "Ölçüm Cihazları",
        categorySlug: "olcum-cihazlari",
        description: "<p>Endüstriyel standartlarda hassas ölçüm. True-RMS özelliği sayesinde bozuk dalga formlarında bile doğru ölçüm yapar. Sıcaklık ölçüm probu dahildir.</p>",
        specs: {
            "AC Gerilim": "1000 V",
            "DC Gerilim": "1000 V",
            "Direnç": "50 MΩ",
            "Ekran": "6000 Sayım, Aydınlatmalı"
        },
        stockStatus: "Stokta",
        sku: "FLUKE-179",
        images: [
            "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
        ]
    },
    {
        id: "6",
        name: "Würth Fren Balata Temizleyici 500ml",
        slug: "wurth-fren-balata-temizleyici-500ml",
        brand: "Würth",
        category: "Kimyasallar",
        categorySlug: "kimyasallar",
        description: "<p>Fren sistemlerindeki toz, yağ, gres ve kirleri hızla temizler. Kalıntı bırakmaz. Montaj ve tamir işlemlerinde parça temizliği için idealdir.</p>",
        specs: {
            "Hacim": "500 ml",
            "Koku": "Karakteristik",
            "Renk": "Şeffaf",
            "AOX İçeriği": "Hayır"
        },
        stockStatus: "Stokta",
        sku: "WURTH-08901087",
        images: [
            "https://images.unsplash.com/photo-1600438318182-16e7887fa83d?w=800&q=80"
        ]
    },
    {
        id: "7",
        name: "Stanley FatMax Şerit Metre 5m",
        slug: "stanley-fatmax-serit-metre-5m",
        brand: "Stanley",
        category: "Ölçüm Cihazları",
        categorySlug: "olcum-cihazlari",
        description: "<p>32mm genişliğinde şerit, 3.35 metreye kadar kırılmadan uzayabilir. BladeArmor kaplama sayesinde şeridin ilk 10cm'si kırılmaya karşı ekstra korumalıdır.</p>",
        specs: {
            "Uzunluk": "5 m",
            "Şerit Genişliği": "32 mm",
            "Gövde": "Bi-material",
            "Hassasiyet": "Sınıf II"
        },
        stockStatus: "Stokta",
        sku: "STANLEY-0-33-720",
        images: [
            "https://images.unsplash.com/photo-1574620027734-70678d49cc8b?w=800&q=80"
        ]
    },
    {
        id: "8",
        name: "Knipex Kombine Pense 180mm",
        slug: "knipex-kombine-pense-180mm",
        brand: "Knipex",
        category: "Mekanik Aletler",
        categorySlug: "mekanik-baglanti",
        description: "<p>Özel takım çeliğinden dövme, yağda sertleştirilmiş. Kesici ağızlar ayrıca indüksiyonla sertleştirilmiştir (sertlik yakl. 60 HRC).</p>",
        specs: {
            "Uzunluk": "180 mm",
            "Kesme Kapasitesi (Sert)": "2.2 mm",
            "Sap": "Çok bileşenli kılıf",
            "Standart": "DIN ISO 5746"
        },
        stockStatus: "Stokta",
        sku: "KNIPEX-0302180",
        images: [
            "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=800&q=80"
        ]
    }
];
