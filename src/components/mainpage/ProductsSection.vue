<script setup>
defineProps({
  title: String,
  offset: Number || String,
  items: Array,
  icon: Object,
});
</script>

<template>
  <section class="q-pt-md scroll">
    <div class="row items-center relative-position">
      <h2 class="q-ml-md text-weight-medium">
        {{ title }}
      </h2>
    </div>
    <ProductGrid
      :items="items"
      :style="{
        paddingLeft: `${offset}px`,
        paddingRight: `${offset}px`,
      }"
    />
  </section>
</template>

<style lang="scss" scoped></style>
