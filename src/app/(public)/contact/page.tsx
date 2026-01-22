import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Bu komponent yoksa textarea tag kullanırım
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="container py-16 md:py-24">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">Bize Ulaşın</h1>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    Sorularınız, teklif talepleriniz veya işbirliği önerileriniz için aşağıdaki formu doldurabilir veya iletişim kanallarımızdan bize ulaşabilirsiniz.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="bg-slate-50 p-8 rounded-2xl space-y-6">
                        <h3 className="text-xl font-bold mb-6">İletişim Bilgileri</h3>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white rounded-lg shadow-sm text-blue-600">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <span className="block font-semibold text-slate-900">Adres</span>
                                <span className="text-slate-600">İkitelli OSB, Metal İş Sanayi Sitesi, 14. Blok No:22<br />Başakşehir / İstanbul</span>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white rounded-lg shadow-sm text-blue-600">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <span className="block font-semibold text-slate-900">Telefon</span>
                                <span className="text-slate-600">+90 (212) 444 88 99</span>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white rounded-lg shadow-sm text-blue-600">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <span className="block font-semibold text-slate-900">E-Posta</span>
                                <span className="text-slate-600">destek@nexendigital.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Map Embed */}
                    <div className="h-64 bg-slate-200 rounded-2xl overflow-hidden shadow-sm">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.358567295106!2d28.80209597658735!3d41.06103301614778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa5606d397d83%3A0xc369222c81373977!2s%C4%B0kitelli%20OSB%2C%20Ba%C5%9Fak%C5%9Fehir%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1706037800000!5m2!1str!2str"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white p-8 rounded-2xl border shadow-sm">
                    <h3 className="text-xl font-bold mb-6">İletişim Formu</h3>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Adınız</label>
                                <Input placeholder="Ad" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Soyadınız</label>
                                <Input placeholder="Soyad" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">E-Posta Adresi</label>
                            <Input type="email" placeholder="ornek@sirket.com" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Telefon</label>
                            <Input type="tel" placeholder="+90 555 ..." />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Konu</label>
                            <Input placeholder="Teklif, Ürün Bilgisi vb." />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Mesajınız</label>
                            <textarea
                                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="Mesajınızı buraya yazın..."
                            />
                        </div>

                        <Button type="submit" className="w-full text-lg h-12">Mesaj Gönder</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
