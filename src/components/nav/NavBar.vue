<script setup>
import useCategoryBar from "src/composables/useCategoryBar";
const { categoryBarOpen, toggleCategoryBar, closeCategoryBar } =
  useCategoryBar();
</script>

<template>
  <div class="col-11 justify-between">
    <div class="row flex-center">
      <div class="col-10 text-uppercase">
        <q-btn>
          <span @click="toggleCategoryBar">
            Shop
            <q-icon name="ti-angle-double-down"></q-icon>
          </span>
        </q-btn>
        <q-btn class="q-mx-sm">
          <RouterLink class="link" to="/AboutPage">About Us</RouterLink>
        </q-btn>
        <q-btn class="q-mx-sm">
          <RouterLink class="link" to="/ReviewPage">Reviews</RouterLink>
        </q-btn>
        <q-btn class="q-mx-sm">
          <RouterLink class="link" to="/ServicePage">Service</RouterLink>
        </q-btn>
      </div>
      <div class="col-2">
        <q-btn round class="q-mx-sm">
          <RouterLink to="/ContactPage" class="link">
            <q-icon name="ti-agenda" color="white"></q-icon>
          </RouterLink>
        </q-btn>
        <q-btn round class="q-mx-sm">
          <RouterLink to="/CartPage" class="link">
            <q-icon name="ti-shopping-cart" color="white"></q-icon>
          </RouterLink>
        </q-btn>
        <q-btn round class="q-mx-sm">
          <RouterLink to="/WishlistPage" class="link">
            <q-icon name="ti-heart" color="white"></q-icon>
          </RouterLink>
        </q-btn>
        <q-btn round class="q-mx-sm">
          <RouterLink to="/AccountPage" class="link">
            <q-icon name="ti-user" color="white"></q-icon>
          </RouterLink>
        </q-btn>
      </div>
      <transition name="fade">
        <NavCategoryBar
          v-show="categoryBarOpen"
          class="absolute"
          style="top: 82px"
          @close="closeCategoryBar"
        />
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.link {
  all: unset;
}
</style>
