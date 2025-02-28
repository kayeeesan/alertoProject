<script setup>
const partners = [
  { name: "RDRRMC 9", src: "https://rdrrmc9-alerto.com/assets/images/partners/rdrrmc9.png" },
  { name: "OCD 9", src: "https://rdrrmc9-alerto.com/assets/images/partners/ocd.png" },
  { name: "DOST 9", src: "https://rdrrmc9-alerto.com/assets/images/partners/dost9.png" },
  { name: "DILG 9", src: "https://rdrrmc9-alerto.com/assets/images/partners/dilg.png" },
];
</script>
<template>
    <v-col cols="12" class="pb-10">
      <v-sheet
        class="pa-8 rounded-lg shadow-lg"
        style="position: relative; background: #F8FAF0; border: 1px solid #E0E0E0;"
      >
        <!-- Top Bar Section -->
        <span
          style="background: var(--primary-color); position: absolute; left: 0; right: 0; top: 0; border-top-left-radius: 11px; border-top-right-radius: 11px; height: 8px;"
        ></span>
  
        <!-- Title Section -->
        <v-row class="mb-6 mt-4">
          <p class="text-3xl font-semibold text-gray-600 text-center leading-tight">
            Partners
          </p>
        </v-row>
  
        <v-divider :thickness="3" class="border-opacity-75"></v-divider>
  
        <!-- Partners Images -->
        <v-row class="justify-center mt-10">
          <v-col 
            v-for="(partner, index) in partners" 
            :key="index" 
            cols="6" sm="3" 
            class="d-flex justify-center"
          >
            <v-img
              :src="partner.src"
              :alt="partner.name"
              contain
              style="max-width: 40%; height: auto;"
            ></v-img>
          </v-col>
        </v-row>
  
        <!-- Partner Names -->
        <v-row class="justify-center mt-4">
          <v-col 
            v-for="(partner, index) in partners" 
            :key="index" 
            cols="6" sm="3" 
            class="text-center"
          >
            <p class="text-lg font-medium text-gray-700">{{ partner.name }}</p>
          </v-col>
        </v-row>
  
      </v-sheet>
    </v-col>
  </template>
  

  