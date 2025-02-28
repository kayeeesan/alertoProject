<script setup>
import { ref } from "vue";
import Sidebar from "./layout/Sidebar.vue";
import Header from "./layout/Header.vue";

const drawer = ref(true);

</script>
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


  </v-app>
</template>


