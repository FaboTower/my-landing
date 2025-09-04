<script setup>
import { ref, onMounted } from 'vue';
import { Auth, listProducts } from '@/services/api.js';

const productos = ref([]);

onMounted(async () => {
    productos.value = await listProducts();
});
</script>

<template>
    <section>
        <h2>Productos</h2>
        <div v-if="productos.length === 0">
            <p>Cargando productos...</p>
        </div>
        <ul v-else>
            <li v-for="producto in productos" :key="producto.id">
                {{ producto.name }} - ${{ producto.price }}
            </li>
        </ul>
    </section>
</template>