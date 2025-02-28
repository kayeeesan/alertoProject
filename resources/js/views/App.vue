<template>
  <v-app>
    <div class="layout-wrapper">
      <!-- Sidebar -->
      <Sidebar v-model:drawer="drawer" class="sidebar" />

      <!-- Main Content -->
      <div class="main-content">
        <Header
          @toggle-sidebar="drawer = !drawer"
          @open-dialog="showLogin = true"
          class="toggle-button"
        />
        <v-main>
          <v-container fluid>
            <router-view />
          </v-container>
        </v-main>
      </div>
    </div>

    <!-- LOGIN DIALOG -->
    <v-dialog v-model="showLogin" width="400">
      <v-card>
        <v-card-title class="text-h5">Login</v-card-title>
        <v-card-text>
          <v-text-field label="Email" v-model="email"></v-text-field>
          <v-text-field label="Password" type="password" v-model="password"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="login">Login</v-btn>
          <v-btn @click="showLogin = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import Sidebar from "./layout/Sidebar.vue";
import Header from "./layout/Header.vue";

const drawer = ref(true);
const showLogin = ref(false);
const email = ref("");
const password = ref("");

const login = () => {
  console.log("Logging in with:", email.value, password.value);
  showLogin.value = false;
};
</script>
