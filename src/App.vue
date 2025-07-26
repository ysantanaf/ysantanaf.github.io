<template>
  <div class="app">
    <LanguageSelector />
    <main>
      <Sidebar />
      <div class="main-content">
        <NavBar />
        <router-view />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LanguageSelector from '@/components/common/LanguageSelector.vue';
import Sidebar from '@/components/sidebar/Sidebar.vue';
import NavBar from '@/components/common/NavBar.vue';

export default defineComponent({
  name: 'App',
  components: {
    LanguageSelector,
    Sidebar,
    NavBar
  }
});
</script>

<style>
/* Estilos globales */

:root {
  --navbar-height: 60px;
}

.app {
  min-height: 100vh;
  background: var(--smoky-black);
  color: var(--white-2);
  font-family: var(--ff-poppins);
}

main {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 15px;
  max-width: 1200px;
  margin: 0 auto;
}

.main-content {
  flex: 1;
  margin-bottom: var(--navbar-height);
}

@media (min-width: 1250px) {
  main {
    flex-direction: row;
    align-items: flex-start;
    padding: 60px 25px;
  }

  .main-content {
    flex: 1;
  }
}
</style>