<template>
  <div class="app-layout">
    <header class="app-header">
      <div class="logo">
        <span class="app-title">Pokémon App</span>
      </div>
      <nav class="nav-menu">
        <router-link
          v-for="(menuItem, index) in menuItems"
          :key="index"
          :to="menuItem.path"
          class="menu-item"
          :exact="true"
        >
          <img src="@/assets/pokeball.svg" alt="Pokeball" class="menu-item-icon">
          {{ menuItem.label }}
        </router-link>
      </nav>
    </header>
    <main class="app-main">
      <slot></slot>
    </main>
  </div>
</template>

<script>
import { menuItems } from '../utils/menuItems'; 
import { useRoute } from 'vue-router'; 

export default {
  name: 'AppLayout',
  data() {
    return {
      menuItems: menuItems, 
    };
  },
};
</script>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #ffcb05; /* Color principal */
  color: #333; /* Color de texto principal */
  border-bottom: 2px solid #333; /* Borde inferior */
}

.logo {
  display: flex;
  align-items: center;
}

.pokeball-icon {
  width: 24px;
  height: 24px;
  margin-right: 0.5rem;
}

.app-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-menu {
  display: flex;
}

.menu-item {
  display: flex;
  align-items: center;
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #333; /* Color de texto principal */
  font-weight: bold;
  border-radius: 10px;
  transition: background-color 0.3s ease;
}

.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.2); /* Color de fondo al pasar el ratón */
}

.menu-item-icon {
  width: 24px;
  height: 24px;
  margin-right: 0.5rem;
}

.app-main {
  flex: 1;
  padding: 1rem;
}
</style>
