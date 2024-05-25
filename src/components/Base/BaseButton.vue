<template>
  <button
    :class="computedClass"
    @click="onClick"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'BaseButton',
  props: {
    variant: {
      type: String as PropType<'primary' | 'secondary' | 'danger'>,
      default: 'primary',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    computedClass() {
      const baseClass = 'py-2 px-4 rounded-lg transition-colors duration-200';
      const variantClass = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700',
        danger: 'bg-red-600 text-white hover:bg-red-700',
      }[this.variant];

      return `${baseClass} ${variantClass}`;
    },
  },
  methods: {
    onClick(event: MouseEvent) {
      if (!this.disabled) {
        this.$emit('click', event);
      }
    },
  },
});
</script>
