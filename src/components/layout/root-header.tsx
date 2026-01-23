"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Search, Menu, ShoppingBag, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useMemo } from "react";
import { PRODUCTS } from "@/data/products";

export default function RootHeader({ logoUrl }: { logoUrl?: string }) {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    // ... filteredProducts logic ...

    const filteredProducts = useMemo(() => {
        if (!searchTerm) return [];
        return PRODUCTS.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.brand.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    const isActive = (path: string) => pathname === path;

    // Admin panelinde farklı veya gizli header olabilir
    if (pathname.startsWith("/admin")) return null;

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-20 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <span className="font-black text-2xl tracking-tighter text-foreground">
                        NEXEN<span className="text-primary">DIGITAL</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {[
                        { name: "Ana Sayfa", href: "/" },
                        { name: "Ürünler", href: "/products" },
                        { name: "Kurumsal", href: "/about" },
                        { name: "İletişim", href: "/contact" },
                    ].map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "transition-colors hover:text-primary relative py-2",
                                isActive(item.href) ? "text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary" : "text-muted-foreground"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <div className="relative hidden md:block w-96">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground z-10" />
                        <input
                            type="text"
                            placeholder="Ürün, marka veya kategori ara..."
                            className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 pl-9 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onFocus={() => setIsSearchFocused(true)}
                            onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                        />
                        {/* Header Autocomplete Dropdown */}
                        {isSearchFocused && searchTerm.length > 0 && (
                            <div className="absolute top-full left-0 w-full bg-white border border-gray-200 shadow-xl rounded-md z-[60] mt-2 max-h-96 overflow-auto animate-in fade-in slide-in-from-top-2 duration-200">
                                {filteredProducts.length > 0 ? (
                                    <div className="py-2">
                                        <div className="px-3 py-1 text-xs text-gray-500 font-semibold uppercase bg-gray-50 border-b mb-1">Hızlı Sonuçlar</div>
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
                                    </div>
                                ) : (
                                    <div className="p-4 text-center text-sm text-gray-500">
                                        Sonuç bulunamadı.
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    <Button variant="default" size="sm" asChild className="hidden sm:inline-flex bg-primary hover:bg-primary/90">
                        <Link href="/contact">Teklif İste</Link>
                    </Button>
                    <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <Menu className="h-5 w-5" />
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t p-4 space-y-4 bg-background">
                    {[
                        { name: "Ana Sayfa", href: "/" },
                        { name: "Ürünler", href: "/products" },
                        { name: "Kurumsal", href: "/about" },
                        { name: "İletişim", href: "/contact" },
                    ].map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="block text-sm font-medium p-2 hover:bg-accent rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}
