<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");
const emit = defineEmits(["close"]);

const login = () => {
  console.log("Logging in with:", email.value, password.value);
};
</script>

<template>
  <v-card class="pa-5">
    <v-card-title class="text-h5">Login</v-card-title>
    <v-card-text>
      <v-text-field v-model="email" label="Email" variant="outlined" />
      <v-text-field v-model="password" label="Password" type="password" variant="outlined" />
    </v-card-text>
    <v-card-actions class="justify-end">
      <v-btn color="grey" variant="text" @click="$emit('close')">Close</v-btn>
      <v-btn color="primary" @click="login">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>
