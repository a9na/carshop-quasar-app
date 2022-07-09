<script setup>
const props = defineProps({
  size: String,
  price: Number || String,
});
</script>

<template>
  <div class="row">
    <q-item
      class="col-2 text-weight-medium text-indigo-8 text-h5 q-ml-xl q-mt-sm"
    >
      USD
    </q-item>
    <q-item class="col-4 text-h4 text-weight-bolder q-ml-sm">
      {{ price }}
    </q-item>
  </div>
</template>

<style lang="scss" scoped></style>
