import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Users, Globe2, Building } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative py-24 bg-slate-900 border-b border-slate-800 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')] bg-center bg-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />

                <div className="container relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
                        Endüstrinin Güçlü Tedarikçisi
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Nexen Digital, sanayi ve üretim sektörünün ihtiyaç duyduğu teknik ekipmanları en hızlı ve güvenilir şekilde tedarik etmek üzere kurulmuştur.
                    </p>
                </div>
            </section>

            {/* Vizyon/Misyon Grid */}
            <section className="py-20">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
                                alt="Nexen Digital Depo"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-slate-900">Çözüm Ortağınız Olmak İçin Buradayız</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                2020 yılında "Dijital Tedarik, Gerçek Çözümler" mottosuyla yola çıktık. Geleneksel hırdavatçılık anlayışını modern lojistik ve dijital yönetim sistemleriyle birleştirerek, iş ortaklarımızın satın alma süreçlerini optimize ediyoruz.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "15.000+ Kalem hazır stok",
                                    "Yetkili üretici garantili orijinal ürünler",
                                    "Türkiye'nin her yerine 24 saatte kargo",
                                    "Kurumsal cari hesap ve vadeli çalışma imkanı"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="py-16 bg-blue-600 text-white">
                <div className="container flex flex-wrap justify-center md:justify-between items-center gap-8 text-center">
                    <div className="flex-1 min-w-[150px]">
                        <div className="text-4xl font-black mb-1">10K+</div>
                        <div className="text-blue-100 text-sm font-bold uppercase">Mutlu Müşteri</div>
                    </div>
                    <div className="flex-1 min-w-[150px]">
                        <div className="text-4xl font-black mb-1">50+</div>
                        <div className="text-blue-100 text-sm font-bold uppercase">Global Marka</div>
                    </div>
                    <div className="flex-1 min-w-[150px]">
                        <div className="text-4xl font-black mb-1">24/7</div>
                        <div className="text-blue-100 text-sm font-bold uppercase">Teknik Destek</div>
                    </div>
                    <div className="flex-1 min-w-[150px]">
                        <div className="text-4xl font-black mb-1">%100</div>
                        <div className="text-blue-100 text-sm font-bold uppercase">Müşteri Memnuniyeti</div>
                    </div>
                </div>
            </section>

            {/* Team / Values */}
            <section className="py-20 bg-slate-50">
                <div className="container text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Değerlerimiz</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Bizi biz yapan ve sektörde öncü olmamızı sağlayan temel prensiplerimiz.
                    </p>
                </div>

                <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Award, title: "Kalite Odaklılık", text: "Portföyümüzde sadece kendini kanıtlamış, uluslararası kalite standartlarına sahip markalara yer veriyoruz." },
                        { icon: Users, title: "Uzman Kadro", text: "Sadece satış yapmıyor, teknik ekibimizle doğru ürün seçimi konusunda mühendislik desteği veriyoruz." },
                        { icon: Globe2, title: "Sürdürülebilirlik", text: "Tedarik zincirimizde çevreye duyarlı lojistik yöntemleri ve geri dönüştürülebilir ambalajlar kullanıyoruz." }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 mx-auto">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                            <p className="text-slate-500 leading-relaxed text-sm">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="container bg-slate-900 rounded-3xl p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                    <div className="relative z-10 max-w-2xl">
                        <h2 className="text-3xl font-bold text-white mb-4">Bizimle Çalışmaya Başlayın</h2>
                        <p className="text-slate-400 text-lg">
                            Tedarik süreçlerinizi profesyonel ellere bırakın, siz üretiminize odaklanın.
                        </p>
                    </div>
                    <div className="relative z-10 flex gap-4 shrink-0">
                        <Button size="lg" className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white font-bold" asChild>
                            <Link href="/contact">İletişime Geçin</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8 bg-transparent text-white border-slate-600 hover:bg-slate-800" asChild>
                            <Link href="/products">Kataloğu İncele</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
