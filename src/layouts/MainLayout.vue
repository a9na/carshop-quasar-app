<template>
  <q-layout view="hHh lpR fff">
    <q-header reveal elevated class="row flex-center">
      <RouterLink to="/" @click="closeCategoryBar">
        <HeaderLogo />
      </RouterLink>
      <NavBar />
    </q-header>

    <q-footer elevated class="bg-secondary text-black">
      <section class="row q-mt-xl">
        <div class="col q-pl-sm">
          <q-item class="text-h6 text-uppercase">Navigation</q-item>
          <q-list class="q-px-md">
            <div v-for="item in footerItems.navigation" :key="item.label">
              <RouterLink :to="item.url" class="link cursor-pointer">
                {{ item.label }}
              </RouterLink>
            </div>
          </q-list>
        </div>
        <div class="col">
          <q-item class="text-h6 text-uppercase">Location</q-item>
          <q-list class="text-justify">
            <q-item v-for="item in footerItems.location" :key="item.label">
              <div>{{ item.label }}</div>
            </q-item>
          </q-list>
          <q-item class="text-h6 text-uppercase">Working hours</q-item>
          <q-list class="text-justify">
            <q-item v-for="item in footerItems.workinghours" :key="item.label">
              <div>{{ item.label }}</div>
            </q-item>
          </q-list>
        </div>
        <div class="col">
          <img
            src="/images/logo.jpg"
            class="rounded-borders"
            style="height: 200px"
          />
        </div>
        <div class="col text-right">
          <div class="text-h6 text-uppercase">Contact</div>
          <div class="q-my-md">
            <q-list
              v-for="item in footerItems.contact"
              :key="item.label"
              class="q-my-md"
            >
              <a href="#" class="link cursor-pointer">{{ item.label }}</a>
            </q-list>
          </div>
        </div>
        <div class="col text-right q-mr-lg">
          <div>
            <div class="text-h6 text-uppercase">Info</div>
            <q-list>
              <div v-for="item in footerItems.info" :key="item.label">
                <a href="#" class="link cursor-pointer">{{ item.label }}</a>
              </div>
            </q-list>
          </div>
          <div class="q-my-md">
            <div class="text-h6 text-uppercase">Policies</div>
            <q-list>
              <div v-for="item in footerItems.policies" :key="item.label">
                <a href="#" class="link cursor-pointer">{{ item.label }}</a>
              </div>
            </q-list>
          </div>
        </div>
      </section>
      <section class="row justify-center bg-black q-pa-lg">
        <div class="text-uppercase text-white">Find us on:</div>
        <div class="q-mx-md">
          <a href="#" class="icon">
            <q-icon
              name="ti-instagram"
              color="white"
              size="20px"
              class="q-mx-md"
            ></q-icon>
          </a>
          <a href="#" class="icon">
            <q-icon
              name="ti-youtube"
              color="white"
              size="20px"
              class="q-mx-md"
            ></q-icon>
          </a>
          <a href="#" class="icon">
            <q-icon
              name="ti-twitter-alt"
              color="white"
              size="20px"
              class="q-mx-md"
            ></q-icon>
          </a>
          <a href="#" class="icon">
            <q-icon
              name="ti-linkedin"
              color="white"
              size="20px"
              class="q-mx-md"
            ></q-icon>
          </a>
        </div>
      </section>
    </q-footer>
    <q-page-container style="height: 100%">
      <Router-View />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useStore } from "src/stores/indexing.js";
import useCategoryBar from "src/composables/useCategoryBar.js";
const { footerItems } = useStore();
const { categoryBarOpen, closeCategoryBar } = useCategoryBar();
</script>

<style lang="scss" scoped>
.link {
  all: unset;
  &:hover {
    text-decoration: underline;
  }
}
.icon {
  all: unset;
  :hover {
    margin-top: -5px;
  }
}
</style>
