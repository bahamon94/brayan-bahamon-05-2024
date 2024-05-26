<template>
  <div class="pokemon-details" v-if="pokemon">
    <PokemonDetail :pokemon="pokemon" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useStore } from '@/store/pinia';
import { useRouter } from 'vue-router';
import { Pokemon } from '@/types';
import { PokemonDetail } from '@/components'; 

export default defineComponent({
  name: 'PokemonDetails',
  components: { PokemonDetail },
  setup() {
    const store = useStore();
    const pokemon = ref<Pokemon | null>(null);
    const router = useRouter();

    onMounted(loadPokemon);

    async function loadPokemon() {
      try {
        const { id } = router.currentRoute.value.params;
        console.log(id);
        
        const pokemonItem = store.getPokemonById(id);
        if (pokemonItem) {
          pokemon.value = { ...pokemonItem };
        } else {
          console.error('Pokemon not found');
        }
      } catch (error) {
        console.error('Error fetching pokemon details:', error);
      }
    }
    console.log('pokemos', pokemon);
    

    return { pokemon };
  },
});
</script>

<style scoped>
.pokemon-details {
  margin: 20px;
}
</style>
