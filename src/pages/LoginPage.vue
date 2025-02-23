<!-- src/pages/LoginPage.vue -->
<template>
  <v-container>
    <v-form @submit.prevent="submit">
      <v-text-field v-model="username" label="Username" required style="border: #1a1a1a;"/>
      <v-text-field v-model="password" label="Password" type="password" required style="border: #1a1a1a;" />
      <v-btn type="submit" color="primary" style="border: #535bf2">Login</v-btn>
      <div class="mt-2">
        <router-link to="/register">Don't have an account? Register</router-link>
      </div>
    </v-form>
  </v-container>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'LoginPage',
  setup() {
    const username = ref('')
    const password = ref('')
    const store = useStore()
    const router = useRouter()

    const submit = async () => {
      try {
        await store.dispatch('login', { username: username.value, password: password.value })
        await router.push('/discounts')
      } catch (error) {
        console.error('Login failed', error)
      }
    }

    return { username, password, submit }
  }
}
</script>
