<script setup>
defineProps({
  name: String,
});
</script>

<template>
  <div
    class="row items-center justify-center text-subtitle1 text-uppercase text-weight-medium"
  >
    <q-item>{{ name }}</q-item>
  </div>
</template>

<style lang="scss" scoped></style>
