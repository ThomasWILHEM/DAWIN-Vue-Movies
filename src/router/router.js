import {createRouter, createWebHistory} from 'vue-router';
import MovieList from "@/components/Pages/MovieList.vue";
import MovieDetails from "@/components/Pages/MovieDetails.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: MovieList},
        {path: '/movie/:id', component: MovieDetails},
    ],

});


export default router;