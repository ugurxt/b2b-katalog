"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { cache } from "react";

const prisma = new PrismaClient();

// ... existing interfaces ...

export interface SiteSetting {
    key: string;
    value: string;
    group: string;
}

const DEFAULT_SETTINGS: SiteSetting[] = [
    { key: "site_title", value: "Nexen Digital", group: "general" },
    { key: "site_logo", value: "/logo.jpg", group: "general" },
    { key: "hero_title", value: "ENDÜSTRİYEL TOPTAN TEDARİK MERKEZİ", group: "hero" },
    { key: "hero_subtitle", value: "İnşaat, sanayi ve üretim sektörleri için binlerce ürün kalemi stoktan teslim.", group: "hero" },
    { key: "contact_phone", value: "+90 (212) 555 00 00", group: "contact" },
    { key: "contact_address", value: "Organize Sanayi Bölgesi, 12. Cadde No:45 Başakşehir / İstanbul", group: "contact" },
    { key: "contact_email", value: "info@nexendigital.com", group: "contact" },
];

export const getSiteSettings = cache(async () => {
    try {
        const settings = await prisma.siteSettings.findMany();

        // Veritabanında olmayan ayarlar için varsayılanları birleştir
        const mergedSettings = DEFAULT_SETTINGS.map(def => {
            const found = settings.find(s => s.key === def.key);
            return found ? { ...def, value: found.value } : def;
        });

        return mergedSettings;
    } catch (error) {
        console.error("Settings fetch error:", error);
        return DEFAULT_SETTINGS;
    }
});

export async function updateSiteSetting(key: string, value: string) {
    try {
        // Ayar varsa güncelle, yoksa oluştur (Upsert mantığı)
        // Ancak Prisma'da unique key ile upsert daha temizdir.
        // Burada basitçe kontrol edip yapıyoruz veya create/update.

        const existing = await prisma.siteSettings.findUnique({
            where: { key }
        });

        if (existing) {
            await prisma.siteSettings.update({
                where: { key },
                data: { value }
            });
        } else {
            // İlk kez oluşturuluyorsa grubunu bulmamız lazım
            const def = DEFAULT_SETTINGS.find(d => d.key === key);
            await prisma.siteSettings.create({
                data: {
                    key,
                    value,
                    group: def ? def.group : "general"
                }
            });
        }

        revalidatePath("/"); // Tüm siteyi yenile (basit çözüm)
        return { success: true };
    } catch (error) {
        console.error("Settings update error:", error);
        return { success: false, error };
    }
}
