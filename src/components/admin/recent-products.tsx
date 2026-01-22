import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RecentProducts() {
    const recentProducts = [
        {
            id: "1",
            name: "Sanayi Tipi Matkap",
            category: "El Aletleri",
            price: "1200 ₺", // B2B'de fiyat gizli olabilir ama admin görebilir
            status: "Aktif",
            image: "/images/drill-thumb.jpg"
        },
        {
            id: "2",
            name: "Hidrolik Pompa",
            category: "Endüstriyel",
            price: "5500 ₺",
            status: "Taslak",
            image: null
        },
        {
            id: "3",
            name: "İş Güvenliği Kaskı",
            category: "İş Güvenliği",
            price: "250 ₺",
            status: "Aktif",
            image: "/images/helmet.jpg"
        },
        {
            id: "4",
            name: "Kaynak Makinesi",
            category: "Kaynak",
            price: "8900 ₺",
            status: "Aktif",
            image: "/images/welder.jpg"
        }
    ];

    return (
        <div className="space-y-8">
            {recentProducts.map((product) => (
                <div key={product.id} className="flex items-center border-b pb-4 last:border-0 last:pb-0">
                    <Avatar className="h-9 w-9">
                        <AvatarImage src={product.image || undefined} alt={product.name} />
                        <AvatarFallback>{product.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">{product.name}</p>
                        <p className="text-sm text-muted-foreground">
                            {product.category}
                        </p>
                    </div>
                    <div className="ml-auto font-medium">
                        <span className={`text-xs px-2 py-1 rounded-full ${product.status === 'Aktif'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-yellow-100 text-yellow-700'
                            }`}>
                            {product.status}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}
