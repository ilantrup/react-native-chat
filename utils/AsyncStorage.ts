import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Guarda un valor en el almacenamiento local.
 * @param key La clave única para almacenar el dato.
 * @param value El valor a guardar (se convertirá automáticamente a JSON).
 */
export const setItem = async <T>(key: string, value: T): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error setting item [${key}]:`, error);
    throw error;
  }
};

/**
 * Recupera un valor del almacenamiento local.
 * @param key La clave del dato a recuperar.
 * @returns El dato parseado como tipo T o null si no existe.
 */
export const getItem = async <T>(key: string): Promise<T | null> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value != null ? (JSON.parse(value) as T) : null;
  } catch (error) {
    console.error(`Error getting item [${key}]:`, error);
    throw error;
  }
};

/**
 * Elimina un valor específico.
 */
export const removeItem = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing item [${key}]:`, error);
    throw error;
  }
};

/**
 * Fusiona un valor existente con uno nuevo (útil para objetos).
 */
export const mergeItem = async <T>(key: string, value: T): Promise<void> => {
  try {
    await AsyncStorage.mergeItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error merging item [${key}]:`, error);
    throw error;
  }
};

/**
 * Limpia TODO el almacenamiento (Cuidado con esto en producción).
 */
export const clear = async (): Promise<void> => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error("Error clearing AsyncStorage:", error);
    throw error;
  }
};

/**
 * Obtiene todas las claves almacenadas.
 */
export const getAllKeys = async (): Promise<readonly string[]> => {
  try {
    return await AsyncStorage.getAllKeys();
  } catch (error) {
    console.error("Error getting all keys:", error);
    throw error;
  }
};

/**
 * Obtiene todos los items y los devuelve en un objeto clave-valor.
 */
export const getAllItems = async <T = any>(): Promise<Record<string, T>> => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const items = await AsyncStorage.multiGet(keys);

    return items.reduce(
      (accumulator, [key, value]) => {
        if (key && value) {
          accumulator[key] = JSON.parse(value);
        }
        return accumulator;
      },
      {} as Record<string, T>,
    );
  } catch (error) {
    console.error("Error getting all items:", error);
    throw error;
  }
};
