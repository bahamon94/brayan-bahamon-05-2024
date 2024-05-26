<template>
  <div class="types-container">
    <span
      class="type-chip"
      v-for="(type, index) in types"
      :key="index"
    >
      {{ type.type.name }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    types: {
      type: Array as PropType<{ name: string }[]>,
      required: true,
    },
  },
});
</script>

<style scoped>
.types-container {
  display: flex;
  flex-wrap: wrap;
}

.type-chip {
  background-color: #f0f0f0;
  border-radius: 12px;
  color: #333;
  padding: 6px 12px;
  margin: 4px;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.type-chip:hover {
  background-color: #e0e0e0;
}

.type-grass {
  background-color: #4caf50;
  color: #fff;
}

.type-poison {
  background-color: #aa00ff;
  color: #fff;
}

</style>
