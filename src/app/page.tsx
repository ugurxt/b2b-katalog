import Link from "next/link";
import { getSiteSettings } from "@/actions/settings";
import { Button } from "@/components/ui/button";
import {
    ShieldCheck,
    Package,
    Truck,
    ArrowRight,
    Mail,
    Building2,
} from "lucide-react";
import { SITE_SERVICES, SITE_CATEGORIES, SITE_BRANDS } from "@/config/site";

export default async function HomePage() {
    const settings = await getSiteSettings();
    const getSetting = (key: string, fallback: string) =>
        settings.find(s => s.key === key)?.value || fallback;

    const heroTitle = getSetting("hero_title", "ENDÜSTRİYEL TEDARİK PLATFORMU");
    const heroSubtitle = getSetting("hero_subtitle", "Üretim, inşaat ve sanayi sektörleri için profesyonel çözüm ortağı.");

    return (
        <main className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-900 selection:text-white">

            <section className="relative w-full bg-[#0B1121] overflow-hidden border-b border-slate-800">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

                <div className="container relative z-10 py-20 md:py-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Metinler */}
                    <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                        {/* Rozet */}
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-900/30 border border-blue-800 rounded text-blue-400 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-sm">
                            <Building2 className="w-4 h-4" />
                            <span>B2B Kurumsal Çözümler</span>
                        </div>

                        {/* Başlık */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight">
                            {heroTitle}
                        </h1>

                        {/* Alt Başlık */}
                        <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed border-l-4 border-blue-700 pl-6">
                            {heroSubtitle}
                        </p>

                        {/* Buton Grubu */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button size="lg" className="h-14 px-8 bg-blue-700 hover:bg-blue-600 text-white text-base font-bold rounded-md shadow-lg transition-all" asChild>
                                <Link href="/products">ÜRÜN KATALOĞU</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="h-14 px-8 bg-transparent border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-500 text-base rounded-md transition-all" asChild>
                                <Link href="/contact">TEKLİF İSTEYİN</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Hero Sağ: İstatistik Paneli */}
                    <div className="grid grid-cols-2 gap-px bg-slate-800 border border-slate-700 rounded-lg overflow-hidden shadow-2xl w-full max-w-md lg:w-[480px]">
                        <StatsBox icon={Package} value="15.000+" label="Stok Kalemi" />
                        <StatsBox icon={Truck} value="24 Saat" label="Sevkiyat Süresi" />
                        <StatsBox icon={ShieldCheck} value="%100" label="Orijinal Ürün" />

                        {/* Daha Fazla Linki */}
                        <Link href="/about" className="bg-blue-900/20 p-8 flex flex-col justify-center items-center text-center cursor-pointer hover:bg-blue-900/30 transition-colors group">
                            <span className="text-blue-400 font-bold text-sm mb-2 group-hover:text-blue-300 transition-colors">Kurumsal</span>
                            <ArrowRight className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- HİZMETLER --- */}
            <section className="py-20 bg-white border-b border-slate-200">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                        {SITE_SERVICES.map((item, i) => (
                            <ServiceItem key={i} {...item} />
                        ))}
                    </div>
                </div>
            </section>

            {/* --- KATEGORİLER --- */}
            <section className="py-24 bg-slate-50">
                <div className="container">
                    <div className="flex justify-between items-center mb-12 border-l-4 border-blue-600 pl-4">
                        <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-tight">Ürün Grupları</h2>
                        <Link href="/products" className="text-sm font-bold text-blue-700 hover:text-blue-900 uppercase flex items-center gap-2 group">
                            Tüm Katalog <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                        {SITE_CATEGORIES.map((cat, i) => (
                            <CategoryCard key={i} {...cat} />
                        ))}
                    </div>
                </div>
            </section>

            {/* --- BÜLTEN / CTA --- */}
            <section className="bg-slate-900 py-16 border-t border-slate-800">
                <div className="container flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-bold text-white mb-2">Kurumsal Fiyat Listesi</h2>
                        <p className="text-slate-400">
                            Güncel stok listesi, iskonto oranları ve kampanya dosyalarını e-posta adresinize gönderelim.
                        </p>
                    </div>

                    {/* Newsletter Form */}
                    <div className="lg:w-1/2 flex w-full gap-0 shadow-lg">
                        <div className="relative flex-1">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="email"
                                placeholder="kurumsal@sirketiniz.com"
                                className="w-full h-14 pl-12 pr-4 bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 rounded-l-md transition-colors"
                            />
                        </div>
                        <Button className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-r-md rounded-l-none uppercase tracking-wider">
                            Listeyi İste
                        </Button>
                    </div>
                </div>
            </section>

            {/* --- MARKALAR --- */}
            <section className="py-16 bg-white border-b border-t border-slate-200 select-none">
                <div className="container text-center">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-10">Yetkili Satıcısı Olduğumuz Markalar</p>
                    <div className="flex flex-wrap justify-center gap-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        {SITE_BRANDS.map((brand) => (
                            <span key={brand} className="text-2xl font-black text-slate-800 cursor-default">
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

function StatsBox({ icon: Icon, value, label }: { icon: any, value: string, label: string }) {
    return (
        <div className="bg-[#111827] p-8 hover:bg-[#161f32] transition-colors group">
            <Icon className="w-8 h-8 text-blue-600 mb-4 group-hover:text-blue-500 transition-colors" />
            <div className="text-3xl font-bold text-white mb-1">{value}</div>
            <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">{label}</div>
        </div>
    );
}

function ServiceItem({ icon: Icon, title, text }: { icon: any, title: string, text: string }) {
    return (
        <div className="px-4 py-4 md:px-8 flex flex-col gap-4 group">
            <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Icon className="w-6 h-6" />
            </div>
            <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{text}</p>
            </div>
        </div>
    );
}

function CategoryCard({ name, icon: Icon, slug }: { name: string, icon: any, slug: string }) {
    return (
        <Link href={`/products?cat=${slug}`} className="group bg-white border border-slate-200 p-6 hover:border-blue-600 hover:shadow-md transition-all rounded-sm flex flex-col items-start gap-4 h-full">
            <Icon className="w-8 h-8 text-slate-400 group-hover:text-blue-600 transition-colors" />
            <div className="mt-auto">
                <h3 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors text-lg leading-tight">{name}</h3>
                <span className="text-xs text-slate-400 mt-2 block font-medium uppercase tracking-wider group-hover:text-blue-500">İncele &rarr;</span>
            </div>
        </Link>
    );
}
