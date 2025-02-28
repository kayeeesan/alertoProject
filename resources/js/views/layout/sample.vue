can you help me fix my toggle sidebar and btn login dialog? they are conflict, can you fix their toggle? here is my code
app.vue
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Sidebar from "./layout/Sidebar.vue";
import Header from "./layout/Header.vue";
import './../../css/main.css';

const drawer = ref(true);

// Close sidebar when clicking outside
const closeSidebar = (event) => {
  if (!event.target.closest(".sidebar") && !event.target.closest(".toggle-button")) {
    drawer.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", closeSidebar);
});

onUnmounted(() => {
  document.removeEventListener("click", closeSidebar);
});
</script>

<template>
  <v-app>
    <div class="layout-wrapper">
      <!-- Sidebar -->
      <Sidebar :drawer="drawer" class="sidebar" />
      
      <!-- Main Content -->
      <div class="main-content">
        <Header @toggle-sidebar="drawer = !drawer" class="toggle-button" />
        <v-main>
          <v-container fluid>
            <router-view />
          </v-container>
        </v-main>
      </div>
    </div>
  </v-app>
</template>

<style scoped>
.layout-wrapper {
  display: flex;
  height: 100vh;
}

.sidebar {
  flex-shrink: 0;
  width: 250px;
  transition: width 0.3s ease-in-out;
}

.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
</style>

header.vue
<template>
    <v-app-bar style="background: #003092;">
      <v-app-bar-nav-icon @click="$emit('toggle-sidebar')"></v-app-bar-nav-icon>
  
      <v-responsive max-width="160">
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
      <v-btn
            class="text-none mr-2"
            color="teal-accent-2"
            rounded="4"
            variant="outlined">
            Login
        </v-btn>
        <v-btn
            class="text-none mr-5"
            color="teal-accent-2"
            rounded="4"
            variant="flat">
            Register
        </v-btn>
    </v-app-bar>
  </template>
  

sidebar.vue
<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps(['drawer']);
const emit = defineEmits();

const toggleDrawer = (val) => {
  emit('update:drawer', val);
};

 // Dashboard items
 const itemsInDashboard = [
    { title: "River Status", icon: "mdi-wave", route: "/river-status" },
    { title: "Weather Updates", icon: "mdi-weather-cloudy", route: "/weather-updates" },
    { title: "AdZU Weather Station", icon: "mdi-weather-sunny", route: "/adZU-weather-station" },
    { title: "Earthquake Bulletin", icon: "mdi-earth", route: "/earthquake-monitoring" },
    { title: "Visualization Map", icon: "mdi-map", route: "/visualization-map" },
    { title: "Historical Data Extraction", icon: "mdi-database", route: "/historical-data-extraction" },
  ];
  
  // Other menu items
  const items = [
    { title: "About Us", icon: "mdi-information", route: "/about-us" },
    { title: "Contact Us", icon: "mdi-phone", route: "/contact-us" }
  ];
  
  // Libraries
  const libraries = [
    { title: "Role", route: "/roles" },
    { title: "Accounts", route: "/registered-accounts" },
    { title: "Establishments", route: "/establishments" },
    { title: "Staffs", route: "/staffs" },
    { title: "Requirement", route: "/requirements" },
  ];
</script>

<template>
  <v-navigation-drawer :model-value="props.drawer" 
    @update:modelValue="toggleDrawer" 
    width="350"
    style="background: #003092;">
    <v-list style="padding: 0 !important;" >
        <v-sheet
            class="d-flex flex-row align-center" 
            style="padding: 15px; background: #001A6E;"
            width="100%"
        >
            <RouterLink to="/" class="sidebar-logo">
                    <v-avatar
                    size="64"
                    image="https://rdrrmc9-alerto.com/assets/images/logo3.png"
                    class="mr-3"
                    ></v-avatar>
                    <span class=" font-weight-bold " style="font-size: 2em; color: white;">ALERTO</span>
            </RouterLink>
        </v-sheet>
        </v-list>

        <v-list nav dense>
        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" class="sidebar-item" :to="'/'">
              <v-icon class="sidebar-icon mr-2" style="color: white; border-radius: 99px; height: 40px; width: 40px; background: #001A6E;">mdi-view-dashboard</v-icon>
              <span class="sidebar-text" style="color: white;">Dashboard</span>
            </v-list-item>
          </template>
  
          <v-list-item
            v-for="item in itemsInDashboard"
            :key="item.title"
            :to="item.route"
            class="sidebar-subitem"
            link
          >
            <v-icon class="sidebar-icon mr-2" style="color: white; border-radius: 99px; height: 40px; width: 40px; background: #001A6E;">{{ item.icon }}</v-icon>
            <span class="sidebar-text" style="color: white;">{{ item.title }}</span>
          </v-list-item>
        </v-list-group>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.route"
          class="sidebar-item"
          link
        >
          <v-icon class="sidebar-icon mr-2" style="color: white; border-radius: 99px; height: 40px; width: 40px; background: #001A6E;">{{ item.icon }}</v-icon>
          <span class="sidebar-text" style="color: white;">{{ item.title }}</span>
        </v-list-item>
  
        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" class="sidebar-item">
              <v-icon class="sidebar-icon mr-2" style="color: white; border-radius: 99px; height: 40px; width: 40px; background: #001A6E;">mdi-folder</v-icon>
              <span class="sidebar-text" style="color: white;">Libraries</span>
            </v-list-item>
          </template>
  
          <v-list-item
            v-for="item in libraries"
            :key="item.title"
            :to="item.route"
            class="sidebar-subitem"
            link
          >
            <v-icon class="sidebar-icon mr-2" style="color: white; border-radius: 99px; height: 40px; width: 40px; background: #001A6E;">mdi-book</v-icon>
            <span class="sidebar-text" style="color: white;">{{ item.title }}</span>
          </v-list-item>
        </v-list-group>
      </v-list>

  </v-navigation-drawer>
</template>

please fix my code for me, like this code of mine before, it is perfectly working
app.vue
<script setup>
import { RouterView } from "vue-router";
import { ref } from "vue";
import Header from "./layout/partials/Header.vue";
import SideBar from "./layout/partials/SideBar.vue";

const sidebarActive = ref(true);

// Toggle Sidebar
const toggleSidebar = () => {
  sidebarActive.value = !sidebarActive.value;
};
</script>

<template>
  <v-app>
    <div class="layout-wrapper">
      <!-- Sidebar -->
      <SideBar v-model="sidebarActive" class="sidebar" />

      <!-- Main Content Area -->
      <div class="main-content">
        <Header @toggleSidebar="toggleSidebar" />
        <v-main>
          <v-container fluid>
            <RouterView />
          </v-container>
        </v-main>
      </div>
    </div>
  </v-app>
</template>

<style scoped>
/* Wrapper to align sidebar and main content side by side */
.layout-wrapper {
  display: flex;
  height: 100vh;
}

/* Sidebar */
.sidebar {
  flex-shrink: 0;
  width: 250px; /* Set the width of the sidebar */
  transition: width 0.3s ease-in-out;
}

/* Main Content: Includes Header & Page Content */
.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

/* Ensures Header Stays Fixed Inside Main Content */
.custom-header {
  width: 100%;
  position: relative;
}
</style>

header.vue
<script setup>
import { ref } from "vue";
import Login from "../../../views/auth/LoginII.vue";

// Simulated user data
const user = ref({ name: "Guest" }); // Default to Guest

// Dialog state
const isDialogActive = ref(false);
</script>

<template>
  <v-app-bar app class="custom-header">
    <!-- Sidebar Toggle Button -->
    <v-app-bar-nav-icon color="white" @click="$emit('toggleSidebar')"></v-app-bar-nav-icon>

    <!-- Search Bar -->
    <v-responsive max-width="260">
      <v-text-field
        density="compact"
        label="Search"
        rounded="lg"
        variant="solo-filled"
        flat
        hide-details
        single-line
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>
    </v-responsive>

    <v-spacer></v-spacer>

    <div class="mr-10">
      <v-dialog v-model="isDialogActive" >
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            text="Log in"
            class="text-none"
            color="teal-lighten-1"
            rounded="md"
            variant="flat"
            cursor
          ></v-btn>
        </template>

        <Login @closeDialog="isDialogActive = false" />
      </v-dialog>
    </div>
  </v-app-bar>
</template>

<style scoped>
/* Header Custom Styles */
.custom-header {
  background: #27445D !important;
  color: white;
  padding: 0 16px;
}
</style>
sidebar.vue
<script setup>
  import { ref } from "vue";
  
  const drawer = ref(true); // Sidebar always open
  
  // Dashboard items
  const itemsInDashboard = [
    { title: "River Status", icon: "mdi-wave", route: "/river-status" },
    { title: "Weather Updates", icon: "mdi-weather-cloudy", route: "/weather-updates" },
    { title: "AdZU Weather Station", icon: "mdi-weather-sunny", route: "/adZU-weather-station" },
    { title: "Earthquake Bulletin", icon: "mdi-earth", route: "/earthquake-monitoring" },
    { title: "Visualization Map", icon: "mdi-map", route: "/visualization-map" },
    { title: "Historical Data Extraction", icon: "mdi-database", route: "/historical-data-extraction" },
  ];
  
  // Other menu items
  const items = [
    { title: "About Us", icon: "mdi-information", route: "/about-us" },
    { title: "Contact Us", icon: "mdi-phone", route: "/contact-us" }
  ];
  
  // Libraries
  const libraries = [
    { title: "Role", route: "/roles" },
    { title: "Accounts", route: "/registered-accounts" },
    { title: "Establishments", route: "/establishments" },
    { title: "Staffs", route: "/staffs" },
    { title: "Requirement", route: "/requirements" },
  ];
  </script>
<template>
    <v-navigation-drawer
      v-model="drawer"
      app
      class="custom-sidebar"
    >
      <!-- Sidebar Header -->
      <div class="sidebar-header">
        <RouterLink to="/" class="sidebar-logo">
          <img src="https://rdrrmc9-alerto.com/assets/images/logo3.png" alt="">
          <span class="logo-text">ALERTO</span>
        </RouterLink>
      </div>
  
      <v-divider></v-divider>

  
      <!-- Other Sections -->
      <v-list nav dense>
        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" class="sidebar-item" :to="'/'">
              <v-icon class="sidebar-icon">mdi-view-dashboard</v-icon>
              <span class="sidebar-text">Dashboard</span>
            </v-list-item>
          </template>
  
          <v-list-item
            v-for="item in itemsInDashboard"
            :key="item.title"
            :to="item.route"
            class="sidebar-subitem"
            link
          >
            <v-icon class="sidebar-icon">{{ item.icon }}</v-icon>
            <span class="sidebar-text">{{ item.title }}</span>
          </v-list-item>
        </v-list-group>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.route"
          class="sidebar-item"
          link
        >
          <v-icon class="sidebar-icon">{{ item.icon }}</v-icon>
          <span class="sidebar-text">{{ item.title }}</span>
        </v-list-item>
  
        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" class="sidebar-item">
              <v-icon class="sidebar-icon">mdi-folder</v-icon>
              <span class="sidebar-text">Libraries</span>
            </v-list-item>
          </template>
  
          <v-list-item
            v-for="item in libraries"
            :key="item.title"
            :to="item.route"
            class="sidebar-subitem"
            link
          >
            <v-icon class="sidebar-icon">mdi-book</v-icon>
            <span class="sidebar-text">{{ item.title }}</span>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </template>
  

  
  <style scoped>
  /* Sidebar Custom Styles */
  .custom-sidebar {
    background: #27445D !important;
    color: #ffffff;
    padding-top: 10px;
    width: 250px;
    box-shadow: 4px 0 8px rgba(0, 0, 0, 0.2);
  }
  
  /* Sidebar Header */
  .sidebar-header {
    text-align: center;
    padding: 12px 0;
  }
  
  .sidebar-logo {
    display: flex;
    padding-left: 35px;
    text-decoration: none;
    color: #ffffff;
    font-weight: bold;
    align-items: center;
  }
  .sidebar-logo img{
    width: 3.5em;
    margin-right: 10px;
  }
  
  .logo-text {
    color: white;
    font-size: 1.5em;
  }
  
  /* Sidebar Items */
  .sidebar-item {
    padding: 10px 15px !important;
    border-radius: 6px;
    margin: 5px 10px;
    transition: 0.3s;
  }
  
  .sidebar-item:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  .sidebar-item.router-link-exact-active {
    background: rgba(255, 255, 255, 0.2);
  }
  
  /* Sidebar Sub-items */
  .sidebar-subitem {
    padding: 8px 25px !important;
    font-size: 14px;
    border-radius: 4px;
    margin: 3px 15px;
    transition: 0.3s;
  }
  
  .sidebar-subitem:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  /* Icons */
  .sidebar-icon {
    margin-right: 10px;
  }
  </style>
  