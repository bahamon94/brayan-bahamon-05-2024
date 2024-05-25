<template>
  <BaseCard>
    <img
      :src="pokemon.image"
      :alt="`Image of ${pokemon.name}`"
      class="w-full h-32 object-cover"
    />
    <h3 class="mt-2 text-center text-lg font-semibold">{{ pokemon.name }}</h3>
    <BaseButton variant="danger" class="mt-4 w-full" @click="removeFromTeam">
      Remove
    </BaseButton>
  </BaseCard>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { BaseCard, BaseButton } from '@/components/Base';
import { Pokemon } from '@/types';

export default defineComponent({
  name: 'TeamCard',
  components: { BaseCard, BaseButton },
  props: {
    pokemon: {
      type: Object as PropType<Pokemon>,
      required: true,
    },
  },
  methods: {
    removeFromTeam() {
      this.$emit('remove', this.pokemon);
    },
  },
});
</script>

<style lang="scss" scoped>
.team-card {
  &:hover {
    @apply border-red-600;
  }
}
</style>
