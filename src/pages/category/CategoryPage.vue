<script setup>
import { useProducts } from "src/stores/products.js";
import { useCategories } from "src/stores/categories.js";
const productsStore = useProducts();
const categoriesStore = useCategories();
const route = useRoute();
const category = ref();
const products = ref([]);
const query = ref("");
const filteredProducts = computed(() =>
  products.value.filter((product) => {
    if (!query.value) {
      return true;
    }
    return product.name.toLowerCase().includes(query.value.toLowerCase());
  })
);
const hasProducts = computed(() => filteredProducts.value?.length > 0);
watchEffect(() => {
  const {
    params: { categoryId },
  } = route;
  if (categoryId) {
    category.value = categoriesStore.getCategoryById(categoryId);
    products.value = productsStore.getProductsByCategory(category.value.tagId);
  }
});
</script>
<template>
  <div class="">
    <div class="row justify-between">
      <div class="col-4">
        <h1 class="q-mx-md text-weight-medium">
          {{ category.label }}
        </h1>
      </div>
      <div class="col-4">
        <q-input
          outlined
          color="light-blue"
          v-if="products && products.length > 0"
          v-model.trim="query"
          type="search"
          placeholder="Search by keyword..."
          class="text-weight-medium text-primary q-ma-xl"
          style="margin-top: 85px"
        />
      </div>
    </div>
    <div class="column">
      <h5 v-if="!hasProducts" class="text-center">No products</h5>
      <section v-else class="row q-pb-xl">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :item="product"
          class="col-2"
        />
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
