<template>
    <TheHeader></TheHeader>
    <router-view></router-view>
    <TheFooter></TheFooter>
</template>

<script>

import TheHeader from "@/components/UI/TheHeader.vue";
import TheFooter from "@/components/UI/TheFooter.vue";

export default {
    name: 'App',
    components: {TheFooter, TheHeader},
    data() {
        return {
            movies: [
                {
                    id: 1,
                    title: 'Interstellar',
                    year: 2014,
                    language: "English",
                    director: {
                        name: 'Christopher Nolan',
                        nationality: 'English',
                        birthdate: '30/07/1970'
                    },
                    genre: 'Sci-Fi'
                },
                {
                    id: 2,
                    title: 'Inception',
                    year: 2010,
                    language: "English",
                    director: {
                        name: 'Christopher Nolan',
                        nationality: 'English',
                        birthdate: '30/07/1970'
                    },
                    genre: 'Sci-Fi'
                }
            ]
        }
    },
    provide() {
        return {
            movies: this.movies
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #b5a068;
}

html, body {
    height: 100%;
    margin: 0;
    background-color: rgba(51, 55, 62, 0.82);
    padding: 0;
}
</style>
