<template>
  <div class="stat">
    <div class="name">{{ formattedName }}</div>
    <div class="bar">
      <div class="fill" :style="{ background: fillGradient }"></div>
    </div>
    <div class="value">{{ stat.base_stat }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { PokemonStat } from '@/types';

export default defineComponent({
  props: {
    stat: {
      type: Object as PropType<PokemonStat>,
      required: true,
    },
  },
  computed: {
    formattedName(): string {
      return this.stat.stat.name.replace(/-/g, ' ').replace(/\b\w/g, firstLetter => firstLetter.toUpperCase());
    },
    fillGradient(): string {
      const percentage = (this.stat.base_stat / 255) * 100;
      return `linear-gradient(to right, #4caf50 ${percentage}%, transparent ${percentage}%)`;
    },
  },
});
</script>

<style scoped>
.stat {
  align-items: center;
  display: flex;
  margin-bottom: 8px;
}

.stat .name {
  flex: 1;
  margin-right: 8px;
  text-transform: capitalize;
}

.stat .bar {
  background-color: #eee;
  border-radius: 4px;
  flex: 2;
  height: 12px;
  overflow: hidden;
}

.stat .fill {
  height: 100%;
}

.stat .value {
  margin-left: 8px;
}
</style>
