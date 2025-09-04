<script setup>
import { ref } from 'vue';
const opcionesEstudio = ref([
    'Básica',
    'Media',
    'Técnica',
    'Profesional',
    'Posgrado'
]);
const estudios = ref('');
const dia = ref('');
const dias = ref([
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo'
]);
</script>

<template>
    <section>
        <h4>Nivel de Estudios</h4>
        <div>
            <label v-for="opt in opcionesEstudio" :key="opt" >
                <input type="radio" :value="opt" v-model="estudios" />
                <span>{{ opt }}</span>
                <br />
            </label>
        </div>
        <p>Seleccionado: <strong>{{ estudios }}</strong></p>
    </section>
    <section>
        <h4>Día Disponible</h4>
        <select name="" id="sltDay" v-model="dia">
            <option value="" disabled>-- Seleccione un día --</option>
            <option v-for="d in dias" :key="d" :value="d"> {{ d }}</option> 
        </select>
        <p>Día: <strong>{{ dia || 'Ninguno' }}</strong></p>
    </section>
</template>