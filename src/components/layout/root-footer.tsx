import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function RootFooter() {
    return (
        // Changed to a solid black background with a clean flex structure
        // Removed relative positioning and z-index hacks, using pure flow
        <footer className="w-full bg-black text-gray-300 border-t border-gray-800">
            <div className="container py-16">
                <div className="flex flex-col lg:flex-row gap-12 justify-between">

                    {/* Brand Column */}
                    <div className="lg:w-1/3 space-y-6">
                        <div className="flex items-center gap-2">
                            {/* Brand Logo Text */}
                            <span className="text-2xl font-bold text-white tracking-tight">NEXEN DIGITAL</span>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                            Endüstriyel tedarik, hırdavat ve iş güvenliği ekipmanlarında güvenilir çözüm ortağınız.
                            Stoktan hızlı teslimat ve kurumsal faturalama imkanı.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <Link key={i} href="#" className="p-2 bg-gray-900 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                                    <Icon className="w-4 h-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:flex-1">
                        <div>
                            <h4 className="font-bold text-white mb-6">Kurumsal</h4>
                            <ul className="space-y-3 text-sm">
                                <li><Link href="/" className="hover:text-blue-500 transition-colors">Ana Sayfa</Link></li>
                                <li><Link href="/about" className="hover:text-blue-500 transition-colors">Hakkımızda</Link></li>
                                <li><Link href="/products" className="hover:text-blue-500 transition-colors">Ürünler</Link></li>
                                <li><Link href="/contact" className="hover:text-blue-500 transition-colors">İletişim</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-white mb-6">Kategoriler</h4>
                            <ul className="space-y-3 text-sm">
                                <li><Link href="/products" className="hover:text-blue-500 transition-colors">Elektrikli Aletler</Link></li>
                                <li><Link href="/products" className="hover:text-blue-500 transition-colors">İş Güvenliği</Link></li>
                                <li><Link href="/products" className="hover:text-blue-500 transition-colors">Hırdavat</Link></li>
                                <li><Link href="/products" className="hover:text-blue-500 transition-colors">Ölçüm Cihazları</Link></li>
                            </ul>
                        </div>

                        <div className="col-span-2 md:col-span-1">
                            <h4 className="font-bold text-white mb-6">İletişim</h4>
                            <ul className="space-y-4 text-sm">
                                <li className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
                                    <span>İkitelli OSB, Metal İş Sanayi Sitesi<br />Başakşehir / İSTANBUL</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-blue-600" />
                                    <span>+90 (212) 555 00 00</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-blue-600" />
                                    <span>info@nexendigital.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Nexen Digital B2B Platformu. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    );
}
