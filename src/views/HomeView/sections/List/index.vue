<template>
  <div class="pokemon-list grid gap-4">
    <PokemonCard
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      :pokemon="pokemon"
      :isInTeam="isPokemonInTeam(pokemon)"
      class="pokemon-card"
      @add-to-team="addToTeam"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '../../../../store/pinia';
import { usePokemonStore } from '../../../../composables/usePokemonStore';
import { PokemonCard } from '@/components/PokemonCard';
import { Pokemon } from '@/types';

export default defineComponent({
  name: 'PokemonList',
  components: { PokemonCard },
  setup() {
    const { pokemons } = usePokemonStore();
    const store = useStore();

    const addToTeam = (pokemon: Pokemon) => {
      store.addToTeam(pokemon);
    };

    const isPokemonInTeam = (pokemon: Pokemon) => {
      return store.getTeam.some(p => p.id === pokemon.id);
    };

    return {
      pokemons,
      addToTeam,
      isPokemonInTeam,
    };
  },
});
</script>

<style scoped lang="scss">
.pokemon-list {
  @apply p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4;
}

.pokemon-card {
  @apply w-full;
}
</style>
