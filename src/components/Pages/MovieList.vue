<template>
    <h2>Movie list :</h2>
    <div id="movieList">
        <MovieItem v-for="movie in movies" :key="movie.id" :movie="movie"></MovieItem>
    </div>
</template>

<script>
import MovieItem from "@/components/Elements/MovieItem.vue";

export default {
    name: "MovieList",
    components: {MovieItem},
    inject: ['movies'],
}
</script>

<style scoped>
#movieList {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>