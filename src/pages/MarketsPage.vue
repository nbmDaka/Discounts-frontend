<!-- src/pages/MarketsPage.vue -->
<template>
  <v-container>
    <v-row>
      <v-col v-for="market in markets" :key="market.id" cols="12" sm="6" md="4">
        <MarketCard :market="market" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, onMounted } from 'vue'
import MarketCard from '../components/MarketCard.vue'
import { getMarkets } from '../api/mock'

export default {
  name: 'MarketsPage',
  components: { MarketCard },
  setup() {
    const markets = ref([])
    onMounted(async () => {
      markets.value = await getMarkets()
    })
    return { markets }
  }
}
</script>
