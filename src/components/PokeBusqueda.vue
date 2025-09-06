<script setup>
import { ref, watch } from 'vue'

const q = ref('')
const loading = ref(false)
const error = ref('')
const pokemon = ref(null)
let timeout = null

async function fetchPokemon(name){
  loading.value = true; error.value = ''; pokemon.value = null
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(name.toLowerCase())}`)
    if (!res.ok) throw new Error('No encontrado')
    const data = await res.json()
    pokemon.value = {
      id: data.id,
      name: data.name,
      sprite: data.sprites?.front_default,
      types: data.types?.map(t => t.type.name) ?? []
    }
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
}

watch(q, (newVal) => {
  clearTimeout(timeout) // reinicia el temporizador
  if (!newVal) {
    pokemon.value = null
    return
  }
  timeout = setTimeout(() => {
    fetchPokemon(newVal)
  }, 600) // 600ms de espera
})
</script>

<template>
  <main class="container py-5">
    <h1>Baja</h1>
    <h2>Buscar Pokémon (con debounce)</h2>
    <input v-model="q" class="form-control mb-3" placeholder="Escribe un nombre..." />

    <div v-if="loading" class="alert alert-info">Buscando...</div>
    <div v-else-if="error" class="alert alert-danger">{{ error }}</div>
    <div v-else-if="pokemon">
      <h3 class="text-capitalize">{{ pokemon.name }} (#{{ pokemon.id }})</h3>
      <img :src="pokemon.sprite" :alt="pokemon.name" />
      <p>Tipos: {{ pokemon.types.join(', ') }}</p>
    </div>
  </main>
</template>