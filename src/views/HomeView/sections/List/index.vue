<template>
  <div class="pokemon-list-container">
    <BaseLoading v-if="isLoading" />
    <div v-else class="pokemon-list grid gap-4">
      <PokemonCard
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        :pokemon="pokemon"
        :isInTeam="isPokemonInTeam(pokemon)"
        class="pokemon-card"
        @add-to-team="addToTeam"
      />
    </div>
    <BasePagination
        :previous="pagination?.previous"
        :next="pagination?.next"
        @page-changed="onPageChanged"
      />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from '../../../../store/pinia';
import { usePokemonStore } from '../../../../composables/usePokemonStore';
import { PokemonCard, BasePagination, BaseLoading } from '@/components';
import { Pokemon } from '@/types';
import { PaginationParams } from '../../../../types';

export default defineComponent({
  name: 'PokemonList',
  components: { PokemonCard, BasePagination, BaseLoading },
  setup() {
    const { pokemons, pagination, getPokemons } = usePokemonStore();    
    const store = useStore();
    const isLoading = ref(true); // Estado de carga

    const addToTeam = (pokemon: Pokemon) => {
      store.addToTeam(pokemon);
    };

    const isPokemonInTeam = (pokemon: Pokemon) => {
      return store.getTeam.some(p => p.id === pokemon.id);
    };

    const onPageChanged = async (params: PaginationParams) => {
      isLoading.value = true; // Mostrar el spinner de carga
      const filters = {
        offset: params.offset?.toString() || '0',
        limit: params.limit?.toString() || '25',
      };
      await getPokemons(filters);
      isLoading.value = false; // Ocultar el spinner de carga
    };

    // Cargar la primera página al montar el componente
    onPageChanged({ offset: '0', limit: '25' });

    return {
      pokemons,
      pagination,
      addToTeam,
      isPokemonInTeam,
      onPageChanged,
      isLoading,
    };
  },
});
</script>

<style scoped lang="scss">
.pokemon-list-container {
  position: relative;
  min-height: 400px; // Asegurar que el contenedor tenga una altura mínima para la visualización del spinner
}

.pokemon-list {
  @apply p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4;
}

.pokemon-card {
  @apply w-full;
}
</style>
