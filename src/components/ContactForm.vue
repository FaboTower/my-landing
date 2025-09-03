<script setup>
import { ref } from 'vue';
let clase = ref('fondoNegro');
let name = ref('Fabián');
let email = ref('');
</script>

<template>
    <v-container id="contact" class="my-12">
        <v-row justify="center">
            <v-col cols="12" md="8">
                <h2 class="text-center mb-6">Contact Us</h2>
                <h3>Nombre: {{ name }} Email: {{ email }}</h3>
                <p class="text-center mb-6">{{ message }}</p>
                
                <v-form>
                    <v-text-field label="Name" required v-model=clase>{{ name }}</v-text-field>
                    <v-text-field label="Email" type="email" required ></v-text-field>
                    <v-textarea label="Message" rows="4" required ></v-textarea>
                    <v-btn color="primary" type="submit">Send Message</v-btn>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>