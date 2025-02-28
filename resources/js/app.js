import './bootstrap';
import { createApp } from 'vue';
import App from '../js/views/App.vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Import Vuetify styles
import * as components from 'vuetify/components'; // Import all Vuetify components
import * as directives from 'vuetify/directives'; // Import Vuetify directives
import router from './router'; // Import router
import '@mdi/font/css/materialdesignicons.css';
import '../css/main.css';
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";


const vuetify = createVuetify({
    components,
    directives,
});

const app = createApp(App);
app.use(vuetify);
app.use(router); // Use the router
app.mount('#app');

