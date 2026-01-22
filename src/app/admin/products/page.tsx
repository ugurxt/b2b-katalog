import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, MoreHorizontal, Edit, Trash } from "lucide-react";

export default function AdminProductsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Ürün Yönetimi</h1>
                <Button>
                    <Plus className="mr-2 h-4 w-4" /> Yeni Ürün Ekle
                </Button>
            </div>

            <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
                <div className="p-4 border-b flex items-center gap-4">
                    <div className="relative max-w-sm w-full">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Ürün adı, kod veya kategori ara..." className="pl-9" />
                    </div>
                    <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                        <option>Tüm Kategoriler</option>
                        <option>Aktif</option>
                        <option>Pasif</option>
                    </select>
                </div>

                <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm text-left">
                        <thead className="[&_tr]:border-b">
                            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Ürün Adı</th>
                                <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Kategori</th>
                                <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Durum</th>
                                <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Oluşturulma</th>
                                <th className="h-12 px-4 align-middle font-medium text-muted-foreground text-right">İşlemler</th>
                            </tr>
                        </thead>
                        <tbody className="[&_tr:last-child]:border-0">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <tr key={i} className="border-b transition-colors hover:bg-muted/50">
                                    <td className="p-4 align-middle font-medium">Sanayi Tipi Matkap X200</td>
                                    <td className="p-4 align-middle">Elektrikli Aletler</td>
                                    <td className="p-4 align-middle">
                                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-green-100 text-green-700 hover:bg-green-100/80">Aktif</span>
                                    </td>
                                    <td className="p-4 align-middle">22.01.2024</td>
                                    <td className="p-4 align-middle text-right">
                                        <Button variant="ghost" size="icon">
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-4 border-t flex justify-between items-center text-sm text-muted-foreground">
                    <div>Toplam 124 ürün gösteriliyor</div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" disabled>Önceki</Button>
                        <Button variant="outline" size="sm">Sonraki</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
