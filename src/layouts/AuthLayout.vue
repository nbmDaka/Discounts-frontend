<!-- src/layouts/AuthLayout.vue -->
<template>
  <v-container class="d-flex align-center justify-center" style="height:100vh">
    <v-card class="pa-4" max-width="400">
      <router-view />
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'AuthLayout'
}
</script>
