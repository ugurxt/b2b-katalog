import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"; // Daha premium ve modern bir seçenek
import "./globals.css";
import { cn } from "@/lib/utils";
import RootHeader from "@/components/layout/root-header";
import RootFooter from "@/components/layout/root-footer";

const fontSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: {
        template: "%s | Nexen Digital B2B",
        default: "Nexen Digital - Endüstriyel Tedarik Platformu",
    },
    description: "Endüstriyel ürünler, hırdavat ve iş güvenliği ekipmanları için kurumsal çözüm ortağınız.",
    robots: {
        index: true,
        follow: true,
    },
};

import { getSiteSettings } from "@/actions/settings";

// ... existing imports

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const settings = await getSiteSettings();
    const logoUrl = settings.find(s => s.key === "site_logo")?.value;

    return (
        <html lang="tr" suppressHydrationWarning>
            <body className={cn("min-h-screen bg-background font-sans antialiased flex flex-col", fontSans.variable)}>
                {/* Header ve Footer'ı global component olarak ekleyeceğiz */}
                <RootHeader logoUrl={logoUrl} />
                <main className="flex-1">
                    {children}
                </main>
                <RootFooter />
            </body>
        </html>
    );
}
