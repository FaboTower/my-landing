<template>
    <v-app-bar app color="primary" dark>
        <v-container>
            <v-app-bar-title>
                    mdi-vuetify
            </v-app-bar-title>

            <v-spacer></v-spacer>

            <div class="d-none d-md-flex">
                <RouterLink to="/">
                    <v-btn link>Home</v-btn>
                </RouterLink>
                <RouterLink to="/contact">
                    <v-btn link>Contact</v-btn>
                </RouterLink>
                <RouterLink to="/ejemplo">
                    <v-btn link>ABP3</v-btn>
                </RouterLink>
                <RouterLink to="/poke">
                    <v-btn link>Poke Búsqueda</v-btn>
                </RouterLink>
            </div>
            <v-menu class="d-md-none" offset-y left>
                <template #activator="{ props }">
                    <v-btn icon v-bind="props">
                        <v-icon>mdi-menu</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item link to="#features">
                        <v-list-item-title>Features</v-list-item-title>
                    </v-list-item>
                    <v-list-item link to="#pricing">
                        <v-list-item-title>Pricing</v-list-item-title>
                    </v-list-item>
                    <v-list-item link to="#about">
                        <v-list-item-title>About</v-list-item-title>
                    </v-list-item>
                    <v-list-item link to="#contact">
                        <v-list-item-title>Contact</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-container>
    </v-app-bar>
</template>