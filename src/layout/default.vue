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
  position: fixed; 
  top: 0; 
  width: 100%; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #ffcb05;
  color: #333; 
  border-bottom: 2px solid #333; 
  z-index: 1000; 
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
  padding: 0 1rem;
}

.menu-item {
  display: flex;
  align-items: center;
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  border-radius: 10px;
  transition: background-color 0.3s ease;
}

.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.2); 
}

.menu-item-icon {
  width: 24px;
  height: 24px;
  margin-right: 0.5rem;
}

.app-main {
  flex: 1;
  padding-top: 80px; 
}
</style>
