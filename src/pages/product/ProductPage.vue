<script setup>
import { useProducts } from "src/stores/products.js";
import { random } from "lodash";
const productsStore = useProducts();
const route = useRoute();
const productRow = ref(null);
const { left } = useElementBounding(productRow);
const product = ref();
const BG_COUNT = 5;
const randN = ref();
const genDifferentNumber = (value, { from = 1, to }) => {
  let n = 0;
  do {
    n = random(from, to);
  } while (n === value);
  return n;
};
watchEffect(() => {
  const {
    params: { productId },
  } = route;
  product.value = productsStore.getProductById(productId);
  randN.value = genDifferentNumber(randN.value, { to: BG_COUNT });
});
</script>

<template>
  <div class="q-pt-xl">
    <img
      class="wrapper-img absolute"
      :src="`/images/products/${product.imageUrl}`"
    />
    <div class="row-wrapper row-wrapper--overview">
      <div ref="productRow" class="row">
        <div class="row product-overview items-center q-pb-xl">
          <div class="col rounded-borders q-mx-xl">
            <q-img
              :src="`/images/products/${product.imageUrl}`"
              class="rounded-borders block"
              style="width: 700px; height: 500px"
            />
          </div>
          <ProductInfo
            :key="route.params.productId"
            :item="product"
            class="col product-overview__info full-width"
          />
        </div>
      </div>
    </div>

    <div class="row-wrapper row-wrapper--products bg-white">
      <div class="row">
        <h4 class="q-mb-md q-ml-lg font-weight-medium">
          Not the right fit for you? Check out these models.
        </h4>
      </div>
      <ProductGrid
        class="q-pb-xl scroll"
        :items="productsStore.getRandomProducts(8)"
        :style="{
          paddingLeft: `${left}px`,
          paddingRight: `${left}px`,
        }"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper-img {
  object-fit: cover;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 900px;
  max-width: 100vw;
  z-index: -1;
  filter: opacity(0.15) saturate(0.3);
}
.row-wrapper {
  &--overview {
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
  }
  &--products {
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
.product-overview {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
  &__info {
    flex: 1;
    grid-column: 7 / -1;
    max-width: 700px;
  }
}
</style>
