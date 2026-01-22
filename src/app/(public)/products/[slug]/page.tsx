import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, FileText, Download, ShieldCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/data/products";

interface PageProps {
    params: { slug: string };
}

async function getProduct(slug: string) {
    return PRODUCTS.find(p => p.slug === slug);
}

// Dinamik Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const product = await getProduct(params.slug);

    if (!product) {
        return {
            title: "Ürün Bulunamadı | Nexen Digital",
        };
    }

    return {
        title: `${product.name} | Nexen Digital`,
        description: `${product.brand} ${product.name} teknik özellikleri ve toptan fiyat teklifi.`,
    };
}

export default async function ProductPage({ params }: PageProps) {
    const product = await getProduct(params.slug);

    if (!product) {
        return notFound();
    }

    return (
        <div className="container px-4 py-8">
            {/* Breadcrumb */}
            <nav className="flex items-center text-sm text-gray-500 mb-8 space-x-2">
                <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                <ChevronRight className="h-4 w-4" />
                <Link href="/products" className="hover:text-blue-600">Ürünler</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-gray-900 font-medium truncate">{product.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Sol Kolon: Görsel */}
                <div className="space-y-4">
                    <div className="relative aspect-square overflow-hidden rounded-sm border bg-white p-4">
                        <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-contain" // Görseli kırpma, sığdır (B2B ürünleri için)
                            priority
                        />
                    </div>
                    {product.images.length > 1 && (
                        <div className="grid grid-cols-4 gap-4">
                            {product.images.map((img, i) => (
                                <div key={i} className="relative aspect-square rounded-sm border cursor-pointer hover:border-blue-600 transition-colors bg-white p-2">
                                    <Image src={img} alt="" fill className="object-contain" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Sağ Kolon: Detaylar */}
                <div>
                    <div className="mb-2">
                        <Link href="/products" className="text-sm font-bold text-blue-600 hover:underline uppercase tracking-wider">{product.brand}</Link>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 font-mono border-b pb-6">
                        <span className="bg-gray-100 px-2 py-1 rounded">SKU: {product.sku}</span>
                        <span className={`px-2 py-1 rounded ${product.stockStatus === 'Stokta' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                            {product.stockStatus}
                        </span>
                    </div>

                    <div
                        className="prose prose-sm prose-slate max-w-none text-gray-600 mb-8"
                        dangerouslySetInnerHTML={{ __html: product.description }}
                    />

                    {/* Teknik Özellikler Tablosu */}
                    <div className="bg-slate-50 rounded-sm p-1 mb-8 border border-slate-200">
                        <h3 className="text-sm font-bold bg-white p-3 border-b border-slate-200 text-slate-900 uppercase tracking-widest">Teknik Spesifikasyonlar</h3>
                        <div className="bg-white p-4 divide-y">
                            {Object.entries(product.specs).map(([key, value]) => (
                                <div key={key} className="grid grid-cols-3 py-3 gap-4">
                                    <span className="text-gray-500 font-medium text-sm">{key}</span>
                                    <span className="text-gray-900 font-semibold text-sm col-span-2">
                                        {value as React.ReactNode}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 p-6 bg-slate-900 rounded-lg text-white">
                        <div className="flex items-center gap-3 mb-2">
                            <ShieldCheck className="h-6 w-6 text-green-400" />
                            <h4 className="font-bold text-lg">Kurumsal Satın Alma Talebi</h4>
                        </div>
                        <p className="text-slate-300 text-sm">
                            Bu ürün için güncel stok durumu, toptan fiyat teklifi ve termin süresi hakkında bilgi almak için formu doldurun.
                        </p>
                        <Button size="lg" className="w-full bg-white text-slate-900 hover:bg-blue-50 font-bold" asChild>
                            <Link href="/contact">Teklif İste</Link>
                        </Button>
                    </div>

                    <div className="mt-8 pt-8 border-t space-y-3">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                            <Truck className="h-5 w-5 text-blue-600" />
                            <span>İstanbul içi kendi filomuzla sevkiyat (Min. 50.000 TL)</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                            <ShieldCheck className="h-5 w-5 text-blue-600" />
                            <span>%100 Orijinal Ürün Garantisi</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
