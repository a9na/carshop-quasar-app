<script setup>
import { useProducts } from "src/stores/products.js";
const { getRandomProducts, productsSections } = useProducts();
</script>

<template>
  <div class="mainpage-wrapper">
    <div class="mainpage">
      <HeroSection />

      <ProductsSection
        v-for="section in productsSections"
        :id="section.id"
        :key="section.id"
        :title="section.title"
        :items="getRandomProducts(section.itemCount)"
        :icon="section.icon"
        :offset="left"
        class="mainpage__products"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
