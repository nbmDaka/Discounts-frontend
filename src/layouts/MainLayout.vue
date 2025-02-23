<!-- src/layouts/MainLayout.vue -->
<template>
  <v-container>
    <v-app>
      <v-app-bar app color="primary" dark>
        <v-spacer></v-spacer>
        <v-btn to="/discounts">Discounts</v-btn>
        <v-btn to="/markets">Markets</v-btn>
      </v-app-bar>
      <v-main>
        <router-view />
      </v-main>
    </v-app>
  </v-container>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>
