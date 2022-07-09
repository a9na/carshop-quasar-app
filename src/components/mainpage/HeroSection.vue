<script setup>
const scrollPageTo = (el) => {
  let element = document.querySelector(`#${el}`);
  element.scrollIntoView({
    behavior: "smooth",
  });
};
</script>
<template>
  <h1 class="q-mx-md text-weight-medium text-primary">
    Welcome to our car shop.
  </h1>
  <div>
    <q-btn
      class="bg-primary text-white q-mx-lg cursor-pointer"
      size="lg"
      label="Show me some cars!"
      @click="scrollPageTo('offer-month')"
      ><q-spinner-puff size="30" class="q-ma-md"
    /></q-btn>
  </div>
  <h4 class="q-pt-xl q-mx-md">
    Looking for a perfect family car? Or need a service for your car? We've got
    it all.
  </h4>
  <div class="row">
    <q-img src="images/family-car.jpg" style="height: auto; width: 50%" />
    <q-img src="images/car-repair.jpg" style="height: auto; width: 50%" />
  </div>
</template>

<style lang="scss" scoped></style>
