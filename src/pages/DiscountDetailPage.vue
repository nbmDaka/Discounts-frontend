<template>
  <v-container>
    <v-card>
      <v-img :src="discount.image" height="300px"></v-img>
      <v-card-title>{{ discount.name }}</v-card-title>
      <v-card-text>
        <p>{{ discount.description }}</p>
        <p><strong>Address:</strong> {{ discount.address }}</p>
        <!-- For the map, you might embed an iframe using discount.mapUrl -->
        <iframe :src="discount.mapUrl" width="100%" height="300" frameborder="0"></iframe>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { ref, onMounted } from 'vue'
import { getDiscountById } from '../api/mock'

export default {
  name: 'DiscountDetailPage',
  props: ['id'],
  setup(props) {
    const discount = ref({})
    onMounted(async () => {
      discount.value = await getDiscountById(props.id)
    })
    return { discount }
  }
}
</script>
