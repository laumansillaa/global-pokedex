import { createRouter, createWebHistory } from "vue-router";
import Welcome from '../views/Landings/Welcome/Welcome.vue'
import Home from '../views/Home/Home.vue'
import { navigate } from "./navigation";

const router = createRouter({
    history: createWebHistory(),
    base: navigate.welcome,
    routes: [
        {
            path: navigate.welcome,
            name: 'welcome',
            component: Welcome
        },
        {
            path: navigate.home,
            name: 'home',
            component: Home
        }
    ]
})


export default router;