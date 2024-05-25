import { createApp } from 'vue';

import App from './App.vue';
import router from './router/index';
import { provideStore } from './store';

// Crear la aplicación
const app = createApp(App);

// Configurar Vue Router
app.use(router);

// Proporcionar el contexto de la tienda Vuex
provideStore();

// Montar la aplicación en el elemento con id 'app'
const mountApp = async () => {
  try {
    await app.mount('#app');
  } catch (error) {
    console.error('Error al montar la aplicación:', error);
  }
};

mountApp();
