<template>
  <div class="loading-spinner">
    <div class="spinner"></div>
    <p>Cargando Pokémon...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseLoading',
});
</script>

<style scoped lang="scss">
.loading-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;

  .spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: #4f46e5; /* Color primario */
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
  }

  p {
    margin-top: 10px;
    color: #4f46e5;
    font-weight: bold;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
