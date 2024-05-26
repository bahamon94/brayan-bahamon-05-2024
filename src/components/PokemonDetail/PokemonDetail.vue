<template>
  <div class="pokemon-details">
    <div class="card">
      <div class="card-header">
        <div class="pokemon-header">
          <div class="pokemon-image-container">
            <img :src="pokemon.image" class="pokemon-image" alt="Pokemon Image" />
          </div>
          <h1 class="pokemon-name">{{ pokemon.name }}</h1>
        </div>
        <base-types :types="pokemon.types" />
      </div>
      <div class="card-body">
        <div class="attribute">
          <span class="attribute-label">Height</span>
          <span class="attribute-value">{{ pokemon.height }} m</span>
        </div>
        <hr class="divider" />
        <div class="attribute">
          <span class="attribute-label">Weight</span>
          <span class="attribute-value">{{ pokemon.weight }} kg</span>
        </div>
        <hr class="divider" />
        <div class="stats">
          <h2>Stats:</h2>
          <base-stat v-for="stat in pokemon.stats" :key="stat.stat.name" :stat="stat" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Pokemon } from '@/types';
import BaseStat from './components/BaseStat.vue';
import BaseTypes from './components/BaseTypes.vue';

export default defineComponent({
  props: {
    pokemon: Object as () => Pokemon,
  },
  components: {
    BaseStat,
    BaseTypes,
  },
});
</script>

<style scoped>
.pokemon-details {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.card {
  background-color: #f0f0f0;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
}

.card-header {
  background-color: #ffcb05;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 16px;
}

.pokemon-header {
  align-items: center;
  display: flex;
}

.pokemon-image-container {
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
}

.pokemon-image {
  max-width: 100%;
  max-height: 100%;
}

.pokemon-name {
  font-size: 1.5rem;
  margin-left: 16px; 
}

.card-body {
  padding: 16px;
}

.attribute {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.attribute-label {
  font-weight: bold;
}

.attribute-value {
  color: #777;
}

.divider {
  border: none;
  border-top: 1px solid #ddd;
  margin: 16px 0;
}

.stats {
  margin-bottom: 16px;
}
</style>
