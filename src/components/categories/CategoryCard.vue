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
      class="category-card"
      :style="{ backgroundImage: imageImport(category.id) }"
    >
      <h4 class="category-card__label">
        {{ category.label }}
      </h4>
    </div>
  </RouterLink>
</template>

<style lang="scss" scoped>
.category-card {
  background: var(--pure-white);
  background-position: center;
  background-size: cover;
  border-radius: var(--border-radius);
  display: flex;
  flex: 0 1 390px;
  aspect-ratio: 1 / 1;
  transition: all 500ms ease-out;
  align-items: end;
  justify-content: end;
  padding: 0.75rem;
  @media only screen and (max-width: 800px) {
    aspect-ratio: revert;
    height: 350px;
  }
  @media only screen and (max-width: 600px) {
    max-width: 350px;
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
    margin: 0 auto;
  }
  &__label {
    font-family: var(--font-primary);
    background: var(--white-opaque);
    text-align: right;
    padding: 1rem 1.2rem;
    border-radius: var(--border-radius);
    text-transform: uppercase;
  }
}
</style>
