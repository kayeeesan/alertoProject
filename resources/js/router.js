import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import dashboard from "./views/dashboard/dashboard.vue";
import riverStatus from "../js/components/dashboard/river/form.vue";
import weatherUpdates from "../js/components/dashboard/weather/form.vue";
import adzuWeather from "../js/components/dashboard/adzuWeatherStation/form.vue";
import historyDataExtraction from "../js/components/dashboard/historyDataExtraction/form.vue";
import earthQuakeMonitoring from "../js/components/dashboard/earthQuake/form.vue";
import visualizationMap from "../js/components/dashboard/visualizationMap/form.vue";

import contactUs from "../js/components/contactUs/form.vue";
import aboutUs from "../js/components/aboutUs/form.vue";

import recipientsData from "../js/views/settings/recipientsData.vue";

const routes = [
   {
    name: 'dashboard',
    path: '/',
    name: 'Dashboard',
    component: dashboard
   },
   {
    name: 'riverStatus',
    path: '/river-status',
    name: 'River Status',
    component: riverStatus
   },
   {
    name: 'weatherUpdates',
    path: '/weather-updates',
    name: 'Weather Updates',
    component: weatherUpdates
   },
   {
    name: 'adzuWeather',
    path: '/adzu-weather',
    name: 'ADZU Updates',
    component: adzuWeather
   },
   {
    name: 'historyDataExtraction',
    path: '/history-data-extraction',
    name: 'History Data Extraction',
    component: historyDataExtraction
   },
   {
    name: 'earthquakeMonitoring',
    path: '/earthquake-monitoring',
    name: 'Earthquake Monitoring',
    component: earthQuakeMonitoring
   },
   {
    name: 'visualizationMap',
    path: '/visualization-map',
    name: 'Visualization Map',
    component: visualizationMap
   },
   {
    name: 'contactUs',
    path: '/contact-us',
    name: 'Contact Us',
    component: contactUs
   },
   {
    name: 'aboutUs',
    path: '/about-us',
    name: 'About Us',
    component: aboutUs
   },
   {
    name: 'recipientsData',
    path: '/recipients-data',
    name: 'Recipients Data',
    component: recipientsData
   },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; // ✅ Ensure this line is present
