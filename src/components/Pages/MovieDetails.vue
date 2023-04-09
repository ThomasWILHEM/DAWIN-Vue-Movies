<template>
    <h2>{{ movie.title }}</h2>
</template>

<script>
export default {
    name: "MovieDetails",
    inject: ['movies'],
    data() {
        return {
            movie: []
        };
    },
    created() {
        this.movie = this.movies.filter(movie => movie.id == this.$route.params.id)[0];
    }
}
</script>

<style scoped>

</style>