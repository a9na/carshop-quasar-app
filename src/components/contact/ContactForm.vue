<script setup>
const formData = reactive({
  name: "",
  email: "",
  message: "",
  subject: "",
});
</script>

<template>
  <q-form class="row full-width q-ma-lg text-primary">
    <div class="col-6 q-ma-lg">
      <div>
        <label class="row text-bold" for="name">
          <q-icon class="q-mt-sm" name="ti-comments-smiley"></q-icon>
          <q-item class="text-uppercase">Name* </q-item>
        </label>
        <q-input
          outlined
          type="text"
          class="q-pb-lg"
          v-model="formData.name"
          autocomplete="off"
        />
      </div>
      <div>
        <label class="row text-bold q-mb-md" for="email">
          <q-icon class="q-mt-sm" name="ti-email"></q-icon>
          <q-item class="text-uppercase">Email adress* </q-item>
        </label>
        <q-input
          outlined
          type="email"
          class="q-pb-lg"
          v-model="formData.email"
          autocomplete="off"
        />
      </div>
      <div>
        <label class="row text-bold q-mb-md" for="email">
          <q-icon class="q-mt-sm" name="ti-notepad"></q-icon>
          <q-item class="text-uppercase">Subject* </q-item>
        </label>
        <q-input
          outlined
          type="email"
          class="q-pb-lg"
          v-model="formData.email"
          autocomplete="off"
        />
      </div>
    </div>
    <div class="col-5 float-right q-ma-lg">
      <div>
        <div>
          <label class="row text-bold q-mb-md" for="message">
            <q-icon class="q-mt-sm" name="ti-pencil-alt"></q-icon>
            <q-item class="text-uppercase">Message* </q-item>
          </label>
          <q-input
            outlined
            autogrow
            type="textarea"
            v-model="formData.message"
          ></q-input>
        </div>
      </div>
      <q-btn
        class="btn q-mt-lg text-center bg-primary text-uppercase text-white text-bold"
        icon-right="send"
        label="Send message!"
      >
      </q-btn>
    </div>
  </q-form>
</template>

<style lang="scss" scoped></style>
