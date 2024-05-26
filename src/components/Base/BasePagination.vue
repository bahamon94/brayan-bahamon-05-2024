<template>
  <div class="pagination">
    <button
      :disabled="!previous || previous.offset === null"
      @click="changePage(previous)"
      class="pagination-button"
    >
      Previous
    </button>
    <button
      :disabled="!next || next.offset === null"
      @click="changePage(next)"
      class="pagination-button"
    >
      Next
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { PaginationParams } from '@/types';

export default defineComponent({
  name: 'BasePagination',
  props: {
    previous: {
      type: Object as PropType<PaginationParams | null>,
      default: null,
    },
    next: {
      type: Object as PropType<PaginationParams | null>,
      default: null,
    },
  },
  emits: ['page-changed'],
  methods: {
    changePage(params: PaginationParams | null) {
      if (params && params.offset !== null && params.limit !== null) {
        this.$emit('page-changed', params);
      }
    },
  },
});
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}

.pagination-button {
  background-color: #ffcb05;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.pagination-button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}

.pagination-button:not(:disabled):hover {
  background-color: #e5b700;
  transform: scale(1.05);
}
</style>
