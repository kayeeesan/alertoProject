<template>
  <v-col cols="12" class="p-0">
    <v-sheet
      class="pa-8 rounded-lg shadow-lg"
      style="position: relative; background: #F8FAF0; border: 1px solid #E0E0E0;"
    >
      <!-- Top Bar Section -->
      <span
        style="background: var(--primary-color); position: absolute; left: 0; right: 0; top: 0; border-top-left-radius: 11px; border-top-right-radius: 11px; height: 8px;"
      ></span>

      <!-- Title Section -->
      <v-row class="mb-6 d-flex justify-center align-center mt-4">
        <p class="text-3xl font-semibold text-gray-600 text-center leading-tight">
          Automated Water-Level and Rain Monitoring <br />
          using Near-Real Time Observation (ALeRTO)
        </p>
      </v-row>

      <!-- Description Section -->
      <v-row class="mb-6">
        <v-col cols="12">
          <p class="text-lg font-medium text-gray-500">
            The Automated Water-Level and Rain Monitoring Using Near-Real Time Observation (ALeRTO) is an early warning system developed by the Ateneo de Zamboanga University-GeoSAFER Mindanao ZAMBASULTA Program. The system makes use of the Automated Rain Gauges (ARGs) and Automated Water-Level Sensors (AWLS) installed in various river systems in the region. The device monitors critical data from DOST-ASTI and PAGASA to interpret hydro-meteorological thresholds.   Once a threshold is reached, the system sends alert messages via SMS to Local Government Units (LGUs) and provides updates through the ALeRTO website. This system aims to enhance preparedness and assist local authorities in making informed decisions to mitigate flooding risks.
          </p>
        </v-col>
      </v-row>

      <!-- Divider -->
      <v-divider :thickness="3" class="border-opacity-75"></v-divider>

      <!-- Image Section -->
      <v-row class="my-6 justify-center">
        <v-img
          src="https://rdrrmc9-alerto.com/assets/images/AlertoMap.jpg"
          alt="ALeRTO Map"
          class="rounded-lg shadow-md"
          style="max-width: 70%; height: auto;"
        ></v-img>
      </v-row>

      <!-- Divider -->
      <v-divider :thickness="3" class="border-opacity-75"></v-divider>

      <!-- Pilot Areas Section -->
      <v-row class="my-6">
        <p class="text-2xl font-semibold text-gray-600">10 Pilot Areas</p>
      </v-row>

      <!-- List of Pilot Areas -->
      <v-row>
        <v-col cols="12" md="6">
          <p class="text-xl text-gray-600">Zamboanga del Norte</p>
          <ul class="text-gray-500 ml-4">
            <li>Siocon River - Municipality of Siocon</li>
            <li>Kipit River - Municipality of Labason</li>
            <li>Salug River - Municipality of Salug</li>
            <li>Sindangan River - Municipality of Sindangan</li>
            <li>Tangian River - Municipality of Pres. Manuel A. Roxas</li>
          </ul>
          <p class="text-xl text-gray-600">Zamboanga City</p>
          <ul class="text-gray-500 ml-4">
            <li>Manicahan River</li>
            <li>Tumaga River</li>
            <li>Lamitan City - Basilan, ARMM</li>
            <li>Gubauan River</li>
          </ul>
        </v-col>

        <v-col cols="12" md="6">
          <p class="text-xl text-gray-600">Zamboanga Sibugay</p>
          <p class="text-xl text-gray-600">Sibuguey River </p>
          <ul class="text-gray-500 ml-4">
            <li>Municipality of Bayog</li>
            <li>Municipality of Diplahan</li>
            <li>Municipality of Imelda</li>
            <li>Municipality of Siay</li>
            <li>Municipality of Payao</li>
            <li>Kabasalan River - Municipality of Kabasalan</li>
          </ul>
          <p class="text-xl text-gray-600">Kabasalan River</p>
          <ul class="text-gray-500 ml-4">
            <li>Municipality of Kabasalan</li>
          </ul>
        </v-col>
      </v-row>
 
      <v-divider :thickness="3" class="border-opacity-75 mt-10"></v-divider>

      <!-- Device Image Section -->
      <v-row class="d-flex justify-center align-center">
        <v-img
          src="https://rdrrmc9-alerto.com/assets/images/device/alerto_dev1.jpg"
          class="rounded-lg shadow-md"
          style="max-width: 40%; height: auto; margin-top: 30px;"
        ></v-img>
      </v-row>
      <v-row class="d-flex justify-center align-center">
        <p>Image of ALeRTO v1 Device</p>
      </v-row>

      <v-divider :thickness="3" class="border-opacity-75 mt-10"></v-divider>
      <!-- YouTube Video Section -->
      <v-row class="my-6 justify-center">
        <v-col cols="12" sm="8" style="max-width: 42% !important;">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              src="https://www.youtube.com/embed/riJtws5mvFA?t=26s"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="rounded-lg shadow-md"
            ></iframe>
          </div>
        </v-col>
      </v-row>
    </v-sheet>
  </v-col>
</template>

<script setup>
</script>

<style scoped>
/* Add any custom styles if necessary */
.embed-responsive {
  position: relative;
  overflow: hidden;
  padding-bottom: 56.25%;
  height: 0;
  max-width: 100%;
}

.embed-responsive iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
