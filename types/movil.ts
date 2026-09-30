// Objeto ya transformado y estandarizado para la interfaz
export interface Movil {
  id: string;
  name: string;
  brand: string;
  price: number;
  stock: number;
  isActive: boolean;
  images: string[]; // Arreglo con hasta 3 URLs de Cloudinary
}

// Estructura original tal como se lee directamente desde Firestore (soporta campos legados)
export interface MovilFirestore {
  name?: string;
  brand?: string;
  price?: number;
  stock?: number;
  isActive?: boolean;
  images?: string[];
  imageUrl?: string; // Campo único de versiones anteriores
}