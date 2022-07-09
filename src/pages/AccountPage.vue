<script setup>
import { ref } from "vue";
const formData = reactive({
  email: "",
  username: "",
  password: "",
});

const right = ref(true);
</script>

<template>
  <div
    class="account window-height window-width row justify-center items-center"
    style="background: linear-gradient(135deg, #00003c, #6c73ef, #000)"
  >
    <q-form
      rounded
      class="row justify-between rounded-borders overflow-hidden shadow-24"
      style="width: 70vw"
    >
      <div class="col-4">
        <q-img src="images/car-bg.jpg" class="full-height overflow-hidden">
          <div class="overlay fit overflow-hidden">
            <h3 class="text-white text-weight-medium q-pl-lg">Hello!</h3>
            <div class="row q-pt-xl q-pl-lg">
              <q-btn
                class="col-10 bg-indigo-6 text-white rounded-borders q-mb-sm"
                href="#"
                >Log in with facebook
                <q-icon class="q-ml-md" name="ti-facebook" color="white"
              /></q-btn>
              <q-btn
                class="col-10 bg-light-blue text-white rounded-borders text-center"
                href="#"
                >Log in with twitter
                <q-icon class="q-ml-md" name="ti-twitter-alt" color="white" />
              </q-btn>
            </div>
          </div>
        </q-img>
      </div>
      <div class="col-8 bg-white q-pa-xl">
        <h4 class="text-primary text-weight-medium text-center">Sign up</h4>
        <div class="q-gutter-md">
          <q-input
            type="email"
            placeholder="Please enter your email adress"
            class="full-width"
            v-model="formData.email"
            autocomplete="off"
          />
          <q-input
            type="text"
            placeholder="Please enter your username"
            class="full-width"
            v-model="formData.username"
            autocomplete="off"
          />
          <q-input
            type="password"
            placeholder="Enter your password (at least 8 characters long)"
            class="full-width"
            v-model="formData.password"
            autocomplete="off"
          />
          <q-input
            type="password"
            placeholder="Confirm your password"
            class="full-width"
            v-model="formData.password"
            autocomplete="off"
          />

          <div>
            <q-checkbox
              right-label
              v-model="right"
              label="I agree"
              checked-icon="task_alt"
              unchecked-icon="highlight_off"
            />
          </div>
        </div>
        <q-btn
          no-caps
          rounded
          class="q-px-lg q-py-sm no-caps text-white float-right text-subtitle1 shadow-9"
          style="background: linear-gradient(135deg, #1015b5 10%, #b55ae3 100%)"
          >Sign up</q-btn
        >
      </div>
    </q-form>
  </div>
</template>

<style lang="scss" scoped></style>
