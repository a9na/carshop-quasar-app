<script setup>
import { computed } from "vue";
import { useWindowSize } from "@vueuse/core";
import { useCategories } from "src/stores/categories.js";
const props = defineProps({
  item: Object,
});
const { getCategoryTags } = useCategories();
const fullTags = getCategoryTags(props.item.tags);
const { width } = useWindowSize();
const btnWidth = computed(() => (width.value > 600 ? "Add to cart" : "Add"));
</script>

<template>
  <div class="bg-white relative-position rounded-borders shadow-11 q-mr-md">
    <div class="bg-white q-pa-lg rounded-borders">
      <div class="column">
        <div class="row">
          <CategoryTag
            v-for="tag in fullTags"
            :key="tag.id"
            :name="tag.label"
          />
        </div>
        <h2 class="q-mt-md text-weight-bold">
          {{ item.name }}
        </h2>

        <q-item-section style="max-width: 42ch">
          {{ item.description }}
        </q-item-section>
        <div class="row text-no-wrap q-my-lg">
          <ProductPrice :price="item.price" />
        </div>
      </div>
      <div class="row justify-end q-mt-md q-ml-md">
        <q-btn class="q-mx-sm bg-primary text-white">
          {{ btnWidth }}
          <q-icon
            name="ti-shopping-cart"
            color="white"
            class="on-right"
          ></q-icon>
        </q-btn>
        <q-btn class="q-mx-sm bg-primary text-white">
          {{ btnWidth }}
          <q-icon name="ti-heart" color="white" class="on-right"></q-icon>
        </q-btn>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
