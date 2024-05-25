<template>
  <div class="pokemon-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <PokemonCard
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      :pokemon="pokemon"
      @select="selectPokemon"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { PokemonCard } from '@/components/PokemonCard';
import { Pokemon } from '@/types';

export default defineComponent({
  name: 'PokemonList',
  components: { PokemonCard },
  props: {
    pokemons: {
      type: Array as PropType<Pokemon[]>,
      required: true,
    },
  },
  methods: {
    selectPokemon(pokemon: Pokemon) {
      this.$emit('select', pokemon);
    },
  },
});
</script>

<style lang="scss" scoped>
.pokemon-list {
  @apply p-4;
}
</style>
