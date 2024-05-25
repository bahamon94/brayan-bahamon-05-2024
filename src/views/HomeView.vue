<template>
  <div class="home-view p-4">
    <PokemonList :pokemons="pokemons" @select="selectPokemon" />
    <BaseButton variant="primary" class="mt-6" @click="loadMore">
      Load More
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import { usePokemonStore } from '../composables/usePokemonStore';
import { PokemonList } from '@/components';
import { BaseButton } from '@/components/Base';

const { pokemons, getPokemons } = usePokemonStore();

const selectPokemon = (pokemon) => {
  // Lógica para seleccionar un Pokémon
};

const loadMore = async () => {
  // Lógica para cargar más pokémons (paginación o scroll infinito)
  await getPokemons();
};
</script>

<style scoped lang="scss">
.home-view {
  button {
    @apply mt-6 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200;
  }
}
</style>
