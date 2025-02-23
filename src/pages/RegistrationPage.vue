<!-- src/pages/RegistrationPage.vue -->
<template>
  <v-form @submit.prevent="submit">
    <v-text-field v-model="username" label="Username" required />
    <v-text-field v-model="email" label="Email" required />
    <v-text-field v-model="password" label="Password" type="password" required />
    <v-btn type="submit" color="primary">Register</v-btn>
    <div class="mt-2">
      <router-link to="/login">Already have an account? Login</router-link>
    </div>
  </v-form>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'RegistrationPage',
  setup() {
    const username = ref('')
    const email = ref('')
    const password = ref('')
    const store = useStore()
    const router = useRouter()

    const submit = async () => {
      try {
        await store.dispatch('register', { username: username.value, email: email.value, password: password.value })
        router.push('/discounts')
      } catch (error) {
        console.error('Registration failed', error)
      }
    }

    return { username, email, password, submit }
  }
}
</script>
