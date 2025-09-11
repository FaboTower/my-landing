<script setup>
  import { ref } from 'vue'
  const loading = ref(false)

  const props = defineProps({
    title: { type: String, required:true },
    brand: { type: String, required:false, default: 'Generic' },
    price: { type: String, required:true },
    description: { type: String, required:true },
    imageUrl: { type: String, required:false, default: 'https://cdn.vuetifyjs.com/images/cards/cooking.png' }

})

</script>

<template>
  <v-card
    :disabled="loading"
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      :src="imageUrl"
      cover
    ></v-img>

    <v-card-item>
      <v-card-title> {{ title }}</v-card-title>

      <v-card-subtitle>
        <span class="me-1">{{ brand }}</span>

        <v-icon
          color="error"
          icon="mdi-fire-circle"
          size="small"
        ></v-icon>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <div class="my-4 text-subtitle-1">
        {{ price }} USD
      </div>

      <div>{{ description }}</div>
    </v-card-text>
   
  </v-card>
</template>