<template>
  <div class="home-view p-4">
    <PokemonList />
  </div>
</template>

<script setup lang="ts">
import { PokemonList } from './sections';
</script>

<style scoped lang="scss">
.home-view {
  @apply p-4;
}
</style>
