<template>
  <div class="team-view p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <TeamCard
      v-for="pokemon in team"
      :key="pokemon.id"
      :pokemon="pokemon"
      @remove="removeFromTeam"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePokemonStore } from '@/store/pokemonStore';
import { TeamCard } from '@/components';

export default defineComponent({
  name: 'TeamView',
  components: { TeamCard },
  setup() {
    const pokemonStore = usePokemonStore();
    const { team } = pokemonStore;

    const removeFromTeam = (pokemon: any) => {
      pokemonStore.removePokemonFromTeam(pokemon);
    };

    return { team, removeFromTeam };
  }
});
</script>

<style lang="scss" scoped>
.team-view {
  @apply p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4;
}
</style>
