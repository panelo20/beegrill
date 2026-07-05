export interface GalleryItem {
  id: string
  src: string
  alt: string
  width: number
  height: number
}

export const galleryItems: GalleryItem[] = [
  { id: "1", src: "/images/gallery/interior.jpg", alt: "Suasana Restoran", width: 800, height: 600 },
  { id: "2", src: "/images/gallery/grilling.jpg", alt: "Proses Grilling", width: 800, height: 500 },
  { id: "3", src: "/images/gallery/food-closeup.jpg", alt: "Food Close-up", width: 600, height: 800 },
  { id: "4", src: "/images/gallery/customer-experience.jpg", alt: "Makan Bersama", width: 800, height: 500 },
  { id: "5", src: "/images/gallery/suki-cooking.jpg", alt: "Suki Cooking", width: 800, height: 600 },
  { id: "6", src: "/images/gallery/ambiance.jpg", alt: "Ambiance", width: 800, height: 500 },
]
