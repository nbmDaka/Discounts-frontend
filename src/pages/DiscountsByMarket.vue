<!-- src/pages/DiscountsByMarket.vue -->
<template>
  <v-container>
    <h2>Discounts for Market {{ marketId }}</h2>
    <v-row>
      <v-col v-for="discount in discounts" :key="discount.id" cols="12" sm="6" md="4">
        <DiscountCard :discount="discount" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, onMounted } from 'vue'
import DiscountCard from '../components/DiscountCard.vue'
import { getDiscountsByMarket } from '../api/mock'

export default {
  name: 'DiscountsByMarket',
  props: ['marketId'],
  components: { DiscountCard },
  setup(props) {
    const discounts = ref([])
    onMounted(async () => {
      discounts.value = await getDiscountsByMarket(props.marketId)
    })
    return { discounts, marketId: props.marketId }
  }
}
</script>
