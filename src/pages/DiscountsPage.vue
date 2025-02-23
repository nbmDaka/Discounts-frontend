<!-- src/pages/DiscountsPage.vue -->
<template>
  <v-container>
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
import { getDiscounts } from '../api/mock'

export default {
  name: 'DiscountsPage',
  components: { DiscountCard },
  setup() {
    const discounts = ref([])

    onMounted(async () => {
      discounts.value = await getDiscounts()
    })

    return { discounts }
  }
}
</script>
