<template>
  <BaseCard @click="onSelect" tabindex="0" @keydown.enter="onSelect" role="button" aria-pressed="false" class="pokemon-card">
    <img
      :src="pokemon.image"
      :alt="`Image of ${pokemon.name}`"
      class="w-full h-32 object-cover"
    />
    <h3 class="mt-2 text-center text-lg font-semibold">{{ pokemon.name }}</h3>
  </BaseCard>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { Pokemon } from '@/types';

const props = defineProps<{
  pokemon: Pokemon;
}>()

const { emit } = defineEmits(['select']);

const onSelect = () => {
  emit('select', props.pokemon);
}
</script>

<style scoped lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .pokemon-card {
    &:focus {
      @apply outline-none;
      box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5); // Definición de la sombra del contorno
    }
  }
}
</style>
