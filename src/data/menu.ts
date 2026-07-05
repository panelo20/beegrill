export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
}

export const menuItems: MenuItem[] = [
  {
    id: "premium-beef",
    name: "Premium Beef",
    description: "Irisan daging sapi premium dengan bumbu rahasia, dipanggang sempurna di atas grill panas.",
    price: 55000,
    image: "/images/menu/premium-beef.jpg",
    category: "Grill",
  },
  {
    id: "chicken-grill",
    name: "Chicken Grill",
    description: "Ayam pilihan dimarinasi rempah spesial, dipanggang hingga juicy dan kecoklatan sempurna.",
    price: 42000,
    image: "/images/menu/chicken-grill.jpg",
    category: "Grill",
  },
  {
    id: "seafood-platter",
    name: "Seafood Platter",
    description: "Udang, cumi, dan kerang segar dipanggang dengan bumbu laut yang menggugah selera.",
    price: 65000,
    image: "/images/menu/seafood.jpg",
    category: "Grill",
  },
  {
    id: "suki-set",
    name: "Suki Set",
    description: "Paket suki lengkap dengan kuah pilihan, sayuran segar, bakso, dan topping premium.",
    price: 48000,
    image: "/images/menu/suki-set.jpg",
    category: "Suki",
  },
  {
    id: "side-dishes",
    name: "Side Dishes",
    description: "Aneka pelengkap: kimchi, edamame, gyoza, dan salad segar untuk melengkapi hidanganmu.",
    price: 18000,
    image: "/images/menu/side-dishes.jpg",
    category: "Side",
  },
  {
    id: "signature-drinks",
    name: "Signature Drinks",
    description: "Minuman khas kami: Thai Tea, Yuzu Lemon, Matcha Latte, dan berbagai pilihan segar lainnya.",
    price: 15000,
    image: "/images/menu/signature-drinks.jpg",
    category: "Drink",
  },
]
