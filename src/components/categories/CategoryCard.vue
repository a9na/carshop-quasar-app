<script setup>
defineProps({
  category: Object,
});
const imageImport = (filename) => `url(public/images/${filename}.jpg)`;
</script>

<template>
  <RouterLink :to="`/category/${category.id}`">
    <div
      :id="`cat-${category.id}`"
      :style="{ backgroundImage: imageImport(category.id) }"
    >
      <h4 class="category-card__label">
        {{ category.label }}
      </h4>
    </div>
  </RouterLink>
</template>

<style lang="scss" scoped></style>
