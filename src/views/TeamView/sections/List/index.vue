<template>
  <transition-group name="pokemon-fade" tag="div" class="team-view p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <PokemonCard
      v-for="pokemon in team"
      :key="pokemon.id"
      :pokemon="pokemon"
      :hasRemoved="true"
      @remove-from-team="removeFromTeam(pokemon)"
    />
  </transition-group>
  <div v-if="team.length === 0" class="no-team-alert">
    No has seleccionado ningún integrante para el equipo.
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useStore } from '@/store/pinia';
import { Pokemon } from '@/types';
import { PokemonCard } from '@/components';

export default defineComponent({
  name: 'TeamList',
  components: { PokemonCard },
  setup() {
    const store = useStore(); 
    const team = ref(store.getTeam);

    watch(() => store.getTeam, (newValue) => {
      team.value = newValue;
    });

    const removeFromTeam = (pokemon: Pokemon) => {
      store.removeFromTeam(pokemon.id); 
    };

    return { team, removeFromTeam };
  }
});
</script>

<style lang="scss" scoped>
.team-view {
  @apply p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4;
}

.no-team-alert {
  @apply p-4 bg-blue-200 text-blue-700 font-bold rounded-md;
}

/* Animación de desvanecimiento */
.pokemon-fade-enter-active, .pokemon-fade-leave-active {
  transition: opacity 0.5s;
}
.pokemon-fade-enter, .pokemon-fade-leave-to {
  opacity: 0;
}
</style>
