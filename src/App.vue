<script setup>
  import AppNavBar from './components/AppNavBar.vue'
  import AppFooter from './components/AppFooter.vue'
</script>

<template>
<v-app>
  <AppNavBar />
  <v-main>
    <RouterView />
  </v-main>
  <AppFooter />
</v-app>
</template>