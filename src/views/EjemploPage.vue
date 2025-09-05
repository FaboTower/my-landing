<script setup>
    import { ref } from 'vue';
    import AbpTres from '@/components/AbpTres.vue'
    import AbpPro from '../components/AbpPro.vue';
    import NewEjemplo from '../components/NewEjemplo.vue';

    const message = ref('');

    const handleCustomEvent = (payload) => {
    message.value = payload;
    console.log('Custom event received with payload:', payload);
    };

    const handleAnotherEvent = () => {
    console.log('Another event received!');
    };
</script>

<template>
    <h1 style="margin-top: 20px;">ABP 4 - Events</h1>
    <NewEjemplo @my-custom-event="handleCustomEvent" @another-event="handleAnotherEvent" />
    <p v-if="message">Received from child: {{ message }}</p>
</template>


