import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

export default function ProductsPage({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const categoryFilter = searchParams.cat as string;

    // Basit filtreleme
    const filteredProducts = categoryFilter
        ? PRODUCTS.filter(p => p.categorySlug === categoryFilter)
        : PRODUCTS;

    const CATEGORIES = [
        { name: "Tümü", slug: undefined },
        { name: "Elektrikli Aletler", slug: "elektrikli-el-aletleri" },
        { name: "İş Güvenliği", slug: "is-guvenligi" },
        { name: "Mekanik", slug: "mekanik-baglanti" },
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header / Filter Bar */}
            <div className="bg-white border-b sticky top-0 z-30">
                <div className="container py-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    <h1 className="text-xl font-bold text-slate-900">Ürün Kataloğu</h1>

                    <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
                        {CATEGORIES.map((cat, i) => (
                            <Link key={i} href={cat.slug ? `/products?cat=${cat.slug}` : '/products'}>
                                <Button
                                    variant={categoryFilter === cat.slug ? "default" : "outline"}
                                    size="sm"
                                    className="whitespace-nowrap rounded-full"
                                >
                                    {cat.name}
                                </Button>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            <div className="container py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <Link
                            key={product.id}
                            href={`/products/${product.slug}`}
                            className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all duration-300"
                        >
                            {/* Image Aspect Ratio Container */}
                            <div className="aspect-square bg-slate-100 relative p-6 flex items-center justify-center">
                                <img
                                    src={product.images[0]}
                                    alt={product.name}
                                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                />
                                {product.stockStatus === "in_stock" && (
                                    <span className="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded">
                                        STOKTA
                                    </span>
                                )}
                            </div>

                            <div className="p-4">
                                <div className="text-xs text-blue-600 font-bold mb-1 uppercase tracking-wider">{product.brand}</div>
                                <h3 className="font-bold text-slate-900 line-clamp-2 min-h-[2.5rem] mb-2 group-hover:text-blue-700 transition-colors">
                                    {product.name}
                                </h3>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-xs text-slate-500 font-mono bg-slate-100 px-2 py-1 rounded">
                                        {product.sku}
                                    </span>
                                    <span className="text-sm font-semibold text-blue-600 group-hover:underline">
                                        İncele &rarr;
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-slate-500 text-lg">Bu kategoride ürün bulunamadı.</p>
                        <Button variant="link" asChild className="mt-2">
                            <Link href="/products">Tüm ürünleri göster</Link>
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
