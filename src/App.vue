<template>
  <div id="app">
    <!-- Aquí utilizamos el componente de navegación para mostrar la barra de navegación -->
    <!-- Utilizamos el componente de router-view para mostrar los componentes según la ruta actual -->
    <router-view />
  </div>
</template>

<script setup>
// Importamos el componente de navegación
// Importamos el hook useRoute para obtener la ruta actual
import { useRoute } from 'vue-router';

// Obtenemos la ruta actual
const route = useRoute();

// Ajustamos el título de la página según la ruta actual


// Actualizamos el título de la página cuando el componente se monta

</script>

<style>
#app {
  font-family: Arial, sans-serif;
}
</style>
