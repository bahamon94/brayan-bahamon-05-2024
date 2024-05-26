<template>
  <div id="app">
    <AppLayout>
      <router-view></router-view>
    </AppLayout>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AppLayout from './layout/default.vue';

export default defineComponent({
  name: 'App',
  components: {
    AppLayout,
  },
});
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
