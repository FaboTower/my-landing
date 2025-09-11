<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { Auth, listProducts } from '@/services/api.js';
import { useRoute } from 'vue-router';
const route = useRoute();
import Card from '@/components/Card.vue'

const productos = ref([]);

onMounted(async () => {
    await filterByBrand();
});

const brandFilter = computed(() => {
    const query = (route.query.brand ?? '').toString().toLowerCase().trim();
    const params = (route.params.brand ?? '').toString().toLowerCase().trim();
    if (params) return params;
    return query;
})

async function filterByBrand() {
    const allProducts = await listProducts();
    if (!brandFilter.value) {
        productos.value = allProducts;
        return;
    }
    productos.value = allProducts.filter(product => matchesBrand(brandFilter.value, product));
}

function matchesBrand(brand, product) {
    product.brand = product.brand ?? 'Generic';
    return product.brand.toLowerCase() === brand.toLowerCase();
}

watch(brandFilter, async (newBrand, oldBrand) => {
    await filterByBrand();
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
                <Card 
                    :title="producto.title" 
                    :brand="producto.brand" 
                    :price="producto.price" 
                    :description="producto.description" 
                    :imageUrl="producto.image"
                />
            </li>
        </ul>
    </section>
</template>