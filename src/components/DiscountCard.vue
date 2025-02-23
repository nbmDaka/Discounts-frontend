<!-- src/components/DiscountCard.vue -->
<template>
  <v-card>
    <v-img :src="discount.image" height="200px"></v-img>
    <v-card-title>{{ discount.name }}</v-card-title>
    <v-card-actions>
      <v-btn color="primary" :to="`/discount/${discount.id}`">Go</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'DiscountCard',
  props: {
    discount: {
      type: Object,
      required: true
    }
  }
}
</script>
