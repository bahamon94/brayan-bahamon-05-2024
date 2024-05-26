<template>
  <BaseCard 
    @click="onSelect" 
    tabindex="0" 
    @keydown.enter="onSelect" 
    role="button" 
    aria-pressed="false" 
    class="pokemon-card"
    :style="{ pointerEvents: isActionInProgress ? 'none' : 'auto' }"
  >
    <div class="card-header">
      <img
        :src="pokemon.image"
        :alt="`Image of ${pokemon.name}`"
        class="pokemon-image"
      />
    </div>
    <div class="card-body">
      <h3 class="pokemon-name">{{ pokemon.name }}</h3>
      <template v-if="!hasRemoved">
        <button v-if="!isInTeam" class="add-to-team-button" @click="addToTeam" :disabled="isAddingToTeam" aria-label="Add to Team">
          <span class="heart-icon">❤️</span>
          <span class="plus-icon">{{ isAddingToTeam ? 'Adding...' : 'Add to Team' }}</span> 
        </button>
        <span v-else class="already-in-team">Already in Team</span>
      </template>
      <button v-if="hasRemoved" class="remove-from-team-button" @click="removeFromTeam" :disabled="isRemovingFromTeam" aria-label="Remove from Team">
        <span class="remove-icon">❌</span>
        <span class="remove-text">{{ isRemovingFromTeam ? 'Removing...' : 'Remove from Team' }}</span> 
      </button>
    </div>
  </BaseCard>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { useRouter } from 'vue-router';

import { BaseCard } from '@/components/Base';
import { Pokemon } from '@/types';

export default defineComponent({
  name: 'PokemonCard',
  components: { BaseCard },
  props: {
    pokemon: {
      type: Object as PropType<Pokemon>,
      required: true,
    },
    hasRemoved: {
      type: Boolean,
      default: false,
    },
    isInTeam: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const isAddingToTeam = ref(false);
    const isRemovingFromTeam = ref(false); 
    const isActionInProgress = ref(false);
    const router = useRouter();

    const addToTeam = async () => {
      isActionInProgress.value = true;
      isAddingToTeam.value = true; 

      try {
        await new Promise(resolve => setTimeout(resolve, 2000));

        isAddingToTeam.value = false;

        emit('add-to-team', props.pokemon);
      } catch (error) {
        console.error('Error al agregar al equipo:', error);
        isAddingToTeam.value = false; 
      } finally {
        isActionInProgress.value = false;
      }
    };

    const removeFromTeam = async () => {
      isActionInProgress.value = true;
      isRemovingFromTeam.value = true; 

      try {
        await new Promise(resolve => setTimeout(resolve, 2000));

        isRemovingFromTeam.value = false;

        emit('remove-from-team', props.pokemon);
      } catch (error) {
        console.error('Error al remover del equipo:', error);
        isRemovingFromTeam.value = false; 
      } finally {
        isActionInProgress.value = false;
      }
    };

    const onSelect = () => {      
      if (props.hasRemoved) {
        router.push(`/team/${props.pokemon.id}`);
      }
    };
;

    return {
      isAddingToTeam,
      addToTeam,
      isRemovingFromTeam,
      removeFromTeam,
      onSelect,
      isActionInProgress,
    };
  },
});
</script>

<style scoped lang="scss">
.pokemon-card {
  @apply flex flex-col items-center bg-gray-200 border border-gray-300 rounded-lg shadow-md overflow-hidden transition-transform transform cursor-pointer;

  &:hover {
    filter: brightness(110%);
  }

  &:focus {
    @apply outline-none ring-2 ring-blue-500;
  }
  transition: filter 0.3s ease;


  .card-header {
    @apply w-full bg-gray-300 border-b border-gray-400 flex items-center justify-center rounded-t-lg;
    height: 180px;
  }

  .pokemon-image {
    @apply max-h-full max-w-full object-contain p-2;
  }

  .card-body {
    @apply w-full p-4 flex flex-col items-center;
  }

  .pokemon-name {
    @apply mt-2 text-center text-xl font-bold text-gray-900;
  }

  .add-to-team-button,
  .remove-from-team-button {
    @apply mt-4 flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md cursor-pointer;
    transition: background-color 0.3s ease;
  }

  .add-to-team-button:hover {
    background-color: #4f46e5;
    color: white;
  }

  .remove-from-team-button:hover {
    background-color: #dc2626;
    color: white;
  }

  .heart-icon {
    @apply mr-1;
  }

  .plus-icon,
  .remove-icon {
    @apply ml-1;
  }

  .already-in-team {
    @apply mt-2 text-red-600 font-semibold;
  }
}
</style>
