"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, List, Grid, Filter, ChevronRight, X } from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";
import { cn } from "@/lib/utils";

export default function ProductCatalog() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [viewMode, setViewMode] = useState<"list" | "grid">("list");
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
    const [isSearchFocused, setIsSearchFocused] = useState(false); // Yeni state


    // Benzersiz markaları ve kategorileri çıkar
    const brands = Array.from(new Set(PRODUCTS.map(p => p.brand))).sort();
    const categories = Array.from(new Set(PRODUCTS.map(p => p.category))).sort();

    // Filtreleme Mantığı
    const filteredProducts = useMemo(() => {
        return PRODUCTS.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.sku.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
            const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);

            return matchesSearch && matchesBrand && matchesCategory;
        });
    }, [searchTerm, selectedBrands, selectedCategories]);

    const toggleBrand = (brand: string) => {
        setSelectedBrands(prev =>
            prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
        );
    };

    const toggleCategory = (cat: string) => {
        setSelectedCategories(prev =>
            prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
        );
    };

    // Filtreleri Temizle
    const clearFilters = () => {
        setSearchTerm("");
        setSelectedBrands([]);
        setSelectedCategories([]);
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8 relative">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-4">
                <Button onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)} variant="outline" className="w-full">
                    <Filter className="mr-2 h-4 w-4" /> Filtreler
                </Button>
            </div>

            {/* Sidebar Filters */}
            <aside className={cn(
                "fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:shadow-none lg:w-64 lg:shrink-0 overflow-y-auto lg:overflow-visible p-6 lg:p-0",
                isMobileFiltersOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="flex items-center justify-between lg:hidden mb-6">
                    <h2 className="text-lg font-bold">Filtrele</h2>
                    <Button variant="ghost" size="icon" onClick={() => setIsMobileFiltersOpen(false)}>
                        <X className="h-5 w-5" />
                    </Button>
                </div>

                <div className="bg-white lg:border rounded-sm lg:p-5 space-y-6">
                    <div>
                        <h3 className="font-bold text-sm text-gray-900 mb-4 uppercase tracking-wider">Kategoriler</h3>
                        <div className="space-y-2">
                            {categories.map((cat) => (
                                <div key={cat} className="flex items-center space-x-2 group cursor-pointer">
                                    <Checkbox
                                        id={`cat-${cat}`}
                                        className="rounded-[2px]"
                                        checked={selectedCategories.includes(cat)}
                                        onCheckedChange={() => toggleCategory(cat)}
                                    />
                                    <label htmlFor={`cat-${cat}`} className="text-sm text-gray-600 group-hover:text-blue-700 leading-none cursor-pointer select-none">
                                        {cat}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="h-px bg-gray-100" />

                    <div>
                        <h3 className="font-bold text-sm text-gray-900 mb-4 uppercase tracking-wider">Markalar</h3>
                        <div className="space-y-2">
                            {brands.map((brand) => (
                                <div key={brand} className="flex items-center space-x-2 group cursor-pointer">
                                    <Checkbox
                                        id={`brand-${brand}`}
                                        className="rounded-[2px]"
                                        checked={selectedBrands.includes(brand)}
                                        onCheckedChange={() => toggleBrand(brand)}
                                    />
                                    <label htmlFor={`brand-${brand}`} className="text-sm text-gray-600 group-hover:text-blue-700 leading-none cursor-pointer select-none">
                                        {brand}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="h-px bg-gray-100" />

                    <Button variant="outline" size="sm" onClick={clearFilters} className="w-full text-xs h-8">
                        Filtreleri Temizle
                    </Button>
                </div>
            </aside>

            {/* Backdrop for mobile */}
            {isMobileFiltersOpen && (
                <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileFiltersOpen(false)} />
            )}

            {/* Product List */}
            <div className="flex-1">
                {/* Top Bar */}
                <div className="bg-white border text-sm text-gray-500 py-3 px-4 flex flex-col sm:flex-row justify-between items-center mb-4 rounded-sm gap-4">
                    <div className="w-full sm:w-auto relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                        <Input
                            placeholder="Hızlı ürün ara (Ad, SKU)..."
                            className="pl-9 h-9 w-full sm:w-64 bg-gray-50"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onFocus={() => setIsSearchFocused(true)}
                            onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)} // Link tıklanabilsin diye gecikme
                        />
                        {/* Autocomplete Dropdown */}
                        {isSearchFocused && searchTerm.length > 0 && (
                            <div className="absolute top-full left-0 w-full sm:w-96 bg-white border border-gray-200 shadow-2xl rounded-md z-[100] mt-2 max-h-96 overflow-auto animate-in fade-in slide-in-from-top-2 duration-200">
                                {filteredProducts.length > 0 ? (
                                    <div className="py-2">
                                        <div className="px-3 py-1 text-xs text-gray-500 font-semibold uppercase bg-gray-50 border-b mb-1">Bulunan Sonuçlar</div>
                                        {filteredProducts.slice(0, 5).map(product => (
                                            <Link
                                                key={product.id}
                                                href={`/products/${product.slug}`}
                                                className="flex items-center gap-3 px-3 py-2 hover:bg-blue-50 transition-colors"
                                            >
                                                <div className="w-10 h-10 border bg-white p-1 rounded-sm shrink-0">
                                                    <img src={product.images[0]} className="w-full h-full object-contain" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="text-xs text-blue-600 font-bold truncate">{product.brand}</div>
                                                    <div className="text-sm text-gray-900 truncate font-medium">{product.name}</div>
                                                </div>
                                                <ChevronRight className="h-4 w-4 text-gray-400" />
                                            </Link>
                                        ))}
                                        {filteredProducts.length > 5 && (
                                            <div className="text-center p-2 border-t mt-1">
                                                <span className="text-xs text-gray-500">ve {filteredProducts.length - 5} ürün daha...</span>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="p-4 text-center text-sm text-gray-500">
                                        Sonuç bulunamadı.
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                        <span>{filteredProducts.length} sonuç</span>
                        <div className="flex gap-1 border rounded-md p-1">
                            <button
                                onClick={() => setViewMode("list")}
                                className={cn("p-1 rounded transition-colors", viewMode === "list" ? "bg-gray-200 text-gray-900" : "text-gray-400 hover:bg-gray-100")}
                            >
                                <List className="h-4 w-4" />
                            </button>
                            <button
                                onClick={() => setViewMode("grid")}
                                className={cn("p-1 rounded transition-colors", viewMode === "grid" ? "bg-gray-200 text-gray-900" : "text-gray-400 hover:bg-gray-100")}
                            >
                                <Grid className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* List View */}
                {viewMode === "list" ? (
                    <div className="space-y-2">
                        {/* Header Row */}
                        <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-2 bg-gray-100 font-semibold text-xs text-gray-500 uppercase tracking-wider rounded-sm">
                            <div className="col-span-6">Ürün Detayı</div>
                            <div className="col-span-2 text-center">Marka</div>
                            <div className="col-span-2 text-center">Stok Kodu</div>
                            <div className="col-span-2 text-right">İşlem</div>
                        </div>

                        {filteredProducts.map((product, index) => (
                            <div
                                key={product.id}
                                className="group bg-white border border-transparent hover:border-blue-400 hover:shadow-sm transition-all rounded-sm animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-backwards"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 items-center">
                                    <Link href={`/products/${product.slug}`} className="col-span-12 md:col-span-6 flex items-center gap-4">
                                        <div className="w-16 h-16 shrink-0 bg-white rounded-sm border p-1 overflow-hidden">
                                            <img src={product.images[0]} alt={product.name} className="w-full h-full object-contain mix-blend-multiply" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-blue-600 font-bold mb-1">{product.category}</div>
                                            <h3 className="font-bold text-gray-900 group-hover:text-blue-600 text-sm md:text-base">
                                                {product.name}
                                            </h3>
                                        </div>
                                    </Link>
                                    <div className="col-span-6 md:col-span-2 flex md:justify-center items-center text-sm font-medium text-gray-700 space-x-2 md:space-x-0">
                                        <span className="md:hidden text-gray-400 text-xs mr-2">Marka:</span>
                                        {product.brand}
                                    </div>
                                    <div className="col-span-6 md:col-span-2 flex md:justify-center items-center text-sm text-gray-500 monospace font-mono space-x-2 md:space-x-0">
                                        <span className="md:hidden text-gray-400 text-xs mr-2">SKU:</span>
                                        {product.sku}
                                    </div>
                                    <div className="col-span-12 md:col-span-2 flex justify-end">
                                        <Button asChild size="sm" variant="outline" className="w-full md:w-auto text-xs h-8 border-gray-300 hover:border-blue-500 hover:text-blue-600">
                                            <Link href={`/products/${product.slug}`}>İncele</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Grid View */
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                        {filteredProducts.map((product, index) => (
                            <Link
                                href={`/products/${product.slug}`}
                                key={product.id}
                                className="group bg-white border rounded-sm p-4 hover:shadow-lg hover:border-blue-400 transition-all animate-in fade-in zoom-in-95 duration-300"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <div className="aspect-square bg-white mb-4 overflow-hidden relative border-b pb-4">
                                    <img src={product.images[0]} alt={product.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform" />
                                </div>
                                <div className="text-xs text-gray-400 mb-1">{product.brand}</div>
                                <h3 className="font-bold text-gray-900 text-sm line-clamp-2 group-hover:text-blue-600 mb-2 h-10">{product.name}</h3>
                                <div className="text-xs font-mono text-gray-500 bg-gray-50 inline-block px-1 rounded">{product.sku}</div>
                            </Link>
                        ))}
                    </div>
                )}

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-sm border dashed border-gray-300">
                        <p className="text-gray-500">Aramanızla eşleşen ürün bulunamadı.</p>
                        <Button variant="link" onClick={clearFilters}>Filtreleri Temizle</Button>
                    </div>
                )}
            </div>
        </div>
    );
}
