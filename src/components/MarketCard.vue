<!-- src/components/MarketCard.vue -->
<template>
  <v-card>
    <v-img :src="market.image" height="200px"></v-img>
    <v-card-title>{{ market.name }}</v-card-title>
    <v-card-actions>
      <v-btn color="primary" :to="`/discounts/market/${market.id}`">View Discounts</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'MarketCard',
  props: {
    market: {
      type: Object,
      required: true
    }
  }
}
</script>
