import { ref } from 'vue';
import { fetchPokemons } from '../services/PokemonService'; // Importa la función para obtener los pokemons
import { Pokemon } from '../types'; // Asegúrate de importar el tipo Pokemon

export const usePokemonStore = () => {
  const pokemons = ref<Pokemon[]>([]);

  const getPokemons = async () => {
    try {
      // Realiza la solicitud de pokémons al servidor
      const response = await fetchPokemons();
      // Actualiza el estado de los pokémons
      pokemons.value = response;
    } catch (error) {
      console.error('Error al obtener los pokémons:', error);
    }
  };

  // Llama a la función para obtener los pokémons cuando se inicialice el composable
  getPokemons();

  return {
    pokemons,
    // Agrega otras funciones o datos necesarios según sea necesario
  };
};
