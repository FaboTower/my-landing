<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['my-custom-event', 'another-event']);

const handleClick = () => {
  emit('my-custom-event', 'Hello from child!'); 
  emit('another-event'); 
};


</script>

<template>
    <button @click="handleClick"> Emit Event! </button>

</template>