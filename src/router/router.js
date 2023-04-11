import {createRouter, createWebHistory} from 'vue-router';
import MovieList from "@/components/Pages/MovieList.vue";
import MovieDetails from "@/components/Pages/MovieDetails.vue";
import AddMovie from "@/components/Pages/AddMovie.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: MovieList},
        {path: '/movie/:id', component: MovieDetails, name: 'movie-details'},
        {path: '/movie/:id/edit', component: MovieDetails, name: 'movie-edit'},
        {path: '/add', component: AddMovie},
    ],

});


export default router;