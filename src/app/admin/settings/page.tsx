"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getSiteSettings, updateSiteSetting, SiteSetting } from "@/actions/settings";
import { Save, Loader2 } from "lucide-react";

export default function AdminSettingsPage() {
    const [settings, setSettings] = useState<SiteSetting[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState<string | null>(null); // Hangi key kaydediliyor?

    useEffect(() => {
        loadSettings();
    }, []);

    async function loadSettings() {
        const data = await getSiteSettings();
        setSettings(data);
        setLoading(false);
    }

    async function handleSave(key: string, value: string) {
        setSaving(key);
        await updateSiteSetting(key, value);
        setTimeout(() => setSaving(null), 500); // Kullanıcı görsün diye azıcık bekle
    }

    const handleChange = (key: string, newValue: string) => {
        setSettings(prev => prev.map(s => s.key === key ? { ...s, value: newValue } : s));
    };

    if (loading) return <div className="p-8">Yükleniyor...</div>;

    const generalSettings = settings.filter(s => s.group === "general");
    const heroSettings = settings.filter(s => s.group === "hero");
    const contactSettings = settings.filter(s => s.group === "contact");

    return (
        <div className="space-y-8 max-w-4xl">
            <div>
                <h1 className="text-2xl font-bold">Site Ayarları</h1>
                <p className="text-muted-foreground">Sitenin genel içeriklerini buradan yönetebilirsiniz.</p>
            </div>

            {/* General */}
            <div className="bg-white p-6 rounded-lg border shadow-sm space-y-4">
                <h2 className="font-semibold text-lg border-b pb-2">Genel Ayarlar</h2>
                {generalSettings.map(s => (
                    <div key={s.key} className="grid w-full items-center gap-1.5">
                        <Label htmlFor={s.key} className="capitalize">{s.key.replace("_", " ")}</Label>
                        <div className="flex gap-2">
                            <Input
                                id={s.key}
                                value={s.value}
                                onChange={(e) => handleChange(s.key, e.target.value)}
                            />
                            <Button
                                size="sm"
                                onClick={() => handleSave(s.key, s.value)}
                                disabled={saving === s.key}
                            >
                                {saving === s.key ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Hero */}
            <div className="bg-white p-6 rounded-lg border shadow-sm space-y-4">
                <h2 className="font-semibold text-lg border-b pb-2">Ana Sayfa Hero Alanı</h2>
                {heroSettings.map(s => (
                    <div key={s.key} className="grid w-full items-center gap-1.5">
                        <Label htmlFor={s.key} className="capitalize">{s.key.replace("_", " ")}</Label>
                        <div className="flex gap-2">
                            {s.key.includes("subtitle") ? (
                                <Textarea
                                    id={s.key}
                                    value={s.value}
                                    onChange={(e) => handleChange(s.key, e.target.value)}
                                />
                            ) : (
                                <Input
                                    id={s.key}
                                    value={s.value}
                                    onChange={(e) => handleChange(s.key, e.target.value)}
                                />
                            )}
                            <Button
                                size="sm"
                                onClick={() => handleSave(s.key, s.value)}
                                disabled={saving === s.key}
                            >
                                {saving === s.key ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Contact */}
            <div className="bg-white p-6 rounded-lg border shadow-sm space-y-4">
                <h2 className="font-semibold text-lg border-b pb-2">İletişim Bilgileri</h2>
                {contactSettings.map(s => (
                    <div key={s.key} className="grid w-full items-center gap-1.5">
                        <Label htmlFor={s.key} className="capitalize">{s.key.replace("_", " ")}</Label>
                        <div className="flex gap-2">
                            <Input
                                id={s.key}
                                value={s.value}
                                onChange={(e) => handleChange(s.key, e.target.value)}
                            />
                            <Button
                                size="sm"
                                onClick={() => handleSave(s.key, s.value)}
                                disabled={saving === s.key}
                            >
                                {saving === s.key ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
