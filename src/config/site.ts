import {
    Hammer,
    ShieldCheck,
    Ruler,
    Component,
    Package,
    Truck,
    CheckCircle2,
    FileText,
    Users2,
    Factory
} from "lucide-react";

// Ana sayfadaki hizmet kutucukları (Services)
export const SITE_SERVICES = [
    {
        icon: FileText,
        title: "Online Teklif & Fiyatlandırma",
        text: "Proje listeleriniz için saniyeler içinde B2B sistemimizden resmi teklif oluşturun."
    },
    {
        icon: Users2,
        title: "Kurumsal Cari & Finans",
        text: "Şirketiniz için özel müşteri temsilcisi ve vadeli ödeme seçeneklerinden yararlanın."
    },
    {
        icon: Factory,
        title: "Sanayi & Şantiye Lojistiği",
        text: "Fabrika teslim ve şantiye teslim sevkiyat seçenekleri ile işiniz aksamasın."
    }
];

// Ana sayfadaki kategoriler (Categories)
export const SITE_CATEGORIES = [
    { name: "Elektrikli El Aletleri", icon: Hammer, slug: "elektrikli-el-aletleri" },
    { name: "İş Güvenliği & KKD", icon: ShieldCheck, slug: "is-guvenligi" },
    { name: "Test ve Ölçüm Cihazları", icon: Ruler, slug: "olcum-cihazlari" },
    { name: "Mekanik & Bağlantı", icon: Component, slug: "mekanik" },
    { name: "Depolama & Raf", icon: Package, slug: "depolama" },
    { name: "Teknik Hırdavat", icon: Hammer, slug: "hirdavat" },
    { name: "Yapı Kimyasalları", icon: CheckCircle2, slug: "kimyasallar" },
    { name: "Kaldırma Ekipmanları", icon: Truck, slug: "kaldirma" },
];

// Footer veya referanslar kısmındaki markalar
export const SITE_BRANDS = [
    "BOSCH",
    "MAKITA",
    "DEWALT",
    "3M",
    "IZELTAS",
    "STANLEY",
    "WURTH"
];
