import { ref, onMounted } from "vue";
import { MovilesService } from "../services/getMoviles";

export const useCatalogo = () => {
  const productos = ref([]);
  const cargando = ref(true);
  const error = ref(null);

  const cargarCatalogo = async () => {
    cargando.value = true;
    error.value = null;
    try {
      productos.value = await MovilesService.obtenerCatalogoCliente();
    } catch (err) {
      console.error("Error al obtener el catálogo:", err);
      error.value = "No se pudieron obtener los productos. Intenta nuevamente.";
    } finally {
      cargando.value = false;
    }
  };

  onMounted(() => {
    cargarCatalogo();
  });

  return {
    productos,
    cargando,
    error,
    recargar: cargarCatalogo,
  };
};
