import { db } from "../firebase"; // o la configuración de tu BD
import { collection, getDocs, query, where } from "firebase/firestore";

export const MovilesService = {
  async obtenerCatalogoCliente() {
    // Filtrar directamente desde la base de datos los productos activos
    const q = query(collection(db, "moviles"), where("isActive", "==", true));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => {
      const data = doc.data();

      return {
        data,
      };
    });
  },
};
