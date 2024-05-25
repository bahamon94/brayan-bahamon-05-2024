<template>
  <div class="base-card p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseCard',
});
</script>

<style lang="scss" scoped>
.base-card {
  &:hover {
    @apply border-gray-300;
  }
}
</style>
