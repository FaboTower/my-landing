<script setup>
  import AppNavBar from './components/AppNavBar.vue'
  import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <v-app>
    <AppNavBar />
    <main>
      <RouterView />
    </main>
    <AppFooter />
</v-app>
</template>