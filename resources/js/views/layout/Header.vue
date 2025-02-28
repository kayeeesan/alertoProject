<script setup>
import { ref } from "vue";
import Login from "../auth/login.vue";

const isDialogActive = ref(false);
</script>
<template>
  <v-app-bar style="background: #003092;">
    <v-app-bar-nav-icon @click="$emit('toggle-sidebar')"></v-app-bar-nav-icon>

    <v-responsive width="260">
      <v-text-field
        density="compact"
        label="Search"
        rounded="lg"
        variant="solo-filled"
        flat
        hide-details
        single-line
      ></v-text-field>
    </v-responsive>
    
    <v-divider></v-divider>
    
    <div class="mr-1">
      <v-dialog v-model="isDialogActive" max-width="900">
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            text="Log in"
            class="text-none mr-2"
            color="teal-accent-2"
            rounded="4"
            variant="outlined"
          ></v-btn>
        </template>

        <Login @closeDialog="isDialogActive = false" />
      </v-dialog>
    </div>
    
    <v-btn
      class="text-none mr-5"
      color="teal-accent-2"
      rounded="4"
      variant="flat"
    >
      Register
    </v-btn>
  </v-app-bar>
</template>
