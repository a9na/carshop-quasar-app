<script setup>
const emit = defineEmits(["close"]);
</script>

<template>
  <div class="items-center justify-center">
    <div class="bg-light-blue row items-center text-uppercase text-weight-bold">
      <q-btn class="q-ma-lg rounded-borders">
        <RouterLink
          :to="`/category/new`"
          class="link cursor-pointer q-pa-md"
          @click="emit('close')"
        >
          New
        </RouterLink>
      </q-btn>
      <q-btn class="q-ma-lg rounded-borders">
        <RouterLink
          :to="`/category/used`"
          class="link cursor-pointer q-pa-md"
          @click="emit('close')"
        >
          Used
        </RouterLink>
      </q-btn>
      <q-btn class="q-ma-lg rounded-borders">
        <RouterLink
          :to="`/category/suvs`"
          class="link cursor-pointer q-pa-md"
          @click="emit('close')"
        >
          SUVs
        </RouterLink>
      </q-btn>
      <q-btn class="q-ma-lg rounded-borders">
        <RouterLink
          :to="`/category/hatchbacks`"
          class="link cursor-pointer q-pa-md"
          @click="emit('close')"
        >
          Hatchbacks
        </RouterLink>
      </q-btn>
      <q-btn class="q-ma-lg rounded-borders">
        <RouterLink
          :to="`/category/crossovers`"
          class="link cursor-pointer q-pa-md"
          @click="emit('close')"
        >
          Crossovers
        </RouterLink>
      </q-btn>
      <q-btn class="q-ma-lg rounded-borders">
        <RouterLink
          :to="`/category/convertibles`"
          class="link cursor-pointer q-pa-md"
          @click="emit('close')"
        >
          Convertibles
        </RouterLink>
      </q-btn>
      <q-btn class="q-ma-lg rounded-borders">
        <RouterLink
          :to="`/category/sedans`"
          class="link cursor-pointer q-pa-md"
          @click="emit('close')"
        >
          Sedans
        </RouterLink>
      </q-btn>
      <q-btn class="q-ma-lg rounded-borders">
        <RouterLink
          :to="`/category/all`"
          class="link cursor-pointer q-pa-md"
          @click="emit('close')"
        >
          All
        </RouterLink>
      </q-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.link {
  all: unset;
}
</style>
