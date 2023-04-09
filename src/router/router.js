import { createRouter, createWebHistory } from 'vue-router';
import MovieList from "@/components/Pages/MovieList.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: MovieList },
    ],

});


export default router;