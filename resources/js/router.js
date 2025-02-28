import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import dashboard from "./views/dashboard/dashboard.vue"

const routes = [
   {
    path: '/',
    name: 'Dashboard',
    component: dashboard
   }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; // ✅ Ensure this line is present
