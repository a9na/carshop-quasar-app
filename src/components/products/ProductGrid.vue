<script setup>
defineProps({
  items: Array,
});
</script>

<template>
  <div class="product-grid row q-ml-md no-wrap">
    <ProductCard v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<style lang="scss" scoped></style>
