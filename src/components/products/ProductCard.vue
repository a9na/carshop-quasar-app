<script setup>
defineProps({
  item: Object,
});
</script>

<template>
  <q-card
    class="column overflow-hidden relative-position rounded-borders bg-white q-ma-md q-mb-lg"
    style="flex: 0 0 300px"
  >
    <RouterLink :to="{ name: 'ProductPage', params: { productId: item.id } }">
      <div class="overflow-hidden block">
        <q-img :src="`/images/products/${item.imageUrl}`" class="block fit" />
      </div>
    </RouterLink>
    <div class="column q-pa-sm">
      <div class="q-my-lg" style="margin-top: 160px">
        <h5 class="q-my-lg q-mx-sm text-weight-bold text-no-wrap">
          {{ item.name }}
        </h5>
        <q-scroll-area class="q-mx-md" style="height: 100px; max-width: 300px">
          {{ item.description }}
        </q-scroll-area>
      </div>
      <div>
        <ProductPrice :price="item.price" />
        <div class="column full-width q-mt-md">
          <q-btn class="bg-primary text-white q-mb-sm">
            Add to cart
            <q-icon
              name="ti-shopping-cart"
              color="white"
              class="q-ml-sm"
            ></q-icon>
          </q-btn>
          <q-btn class="bg-primary text-white q-mb-sm">
            Add to wishlist
            <q-icon name="ti-heart" color="white" class="q-ml-sm"></q-icon>
          </q-btn>
        </div>
      </div>
    </div>
  </q-card>
</template>

<style lang="scss" scoped></style>
