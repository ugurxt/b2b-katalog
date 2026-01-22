import Link from "next/link";
import { LayoutDashboard, Package, Tag, Settings, LogOut } from "lucide-react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 text-white flex-shrink-0 hidden md:flex flex-col">
                <div className="h-16 flex items-center px-6 font-bold text-xl border-b border-slate-800">
                    NEXEN<span className="text-blue-500">ADMIN</span>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    <Link href="/admin" className="flex items-center gap-3 px-4 py-3 bg-blue-600 rounded-lg text-white font-medium">
                        <LayoutDashboard className="h-5 w-5" />
                        Dashboard
                    </Link>
                    <Link href="/admin/products" className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800 rounded-lg transition-colors">
                        <Package className="h-5 w-5" />
                        Ürün Yönetimi
                    </Link>
                    <Link href="/admin/categories" className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800 rounded-lg transition-colors">
                        <Tag className="h-5 w-5" />
                        Kategoriler
                    </Link>
                    <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800 rounded-lg transition-colors">
                        <Settings className="h-5 w-5" />
                        Ayarlar
                    </Link>
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <button className="flex items-center gap-3 w-full px-4 py-3 text-red-400 hover:bg-slate-800 rounded-lg transition-colors">
                        <LogOut className="h-5 w-5" />
                        Çıkış Yap
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col">
                <header className="h-16 bg-white border-b flex items-center justify-between px-6">
                    <h1 className="font-semibold text-lg">Yönetim Paneli</h1>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Admin User</span>
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">A</div>
                    </div>
                </header>
                <div className="p-6 overflow-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
