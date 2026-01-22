import { DashboardCard } from "@/components/admin/dashboard-card";
import { RecentProducts } from "@/components/admin/recent-products";
import { Package, ShoppingBag, Users, Activity } from "lucide-react";

export default function AdminDashboardPage() {
    return (
        <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <DashboardCard
                    title="Toplam Ürün"
                    value="1,240"
                    icon={Package}
                    trend="+12% geçen aydan"
                />
                <DashboardCard
                    title="Aktif Kategori"
                    value="45"
                    icon={ShoppingBag}
                />
                <DashboardCard
                    title="Toplam Ziyaret"
                    value="34,200"
                    icon={Users}
                    trend="+5% geçen aydan"
                />
                <DashboardCard
                    title="İletişim Talebi"
                    value="12"
                    icon={Activity}
                    description="Okunmamış 3 mesaj var"
                />
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-4 lg:col-span-4 bg-white p-6 rounded-xl border shadow-sm">
                    <h3 className="font-semibold mb-4 text-lg">Son Eklenen Ürünler</h3>
                    <RecentProducts />
                </div>
                <div className="col-span-3 lg:col-span-3 bg-white p-6 rounded-xl border shadow-sm">
                    <h3 className="font-semibold mb-4 text-lg">Hızlı İşlemler</h3>
                    <div className="space-y-3">
                        <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors text-sm font-medium">
                            + Yeni Ürün Ekle
                        </button>
                        <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors text-sm font-medium">
                            + Yeni Kategori Oluştur
                        </button>
                        <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors text-sm font-medium">
                 > İletişim Mesajlarını Oku
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
