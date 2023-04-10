<template>
    <h2>{{ movie.title }}</h2>
    <div id="movieInfos">
        <div id="image">

        </div>
        <div id="infos">
            <label>Title : </label>
            <input v-model="movie.title" disabled>
            <label>Year : </label>
            <input v-model="movie.year" disabled>
            <label>Genre : </label>
            <input v-model="movie.genre" disabled>
        </div>
    </div>
    <div id="director">
        <label>Name : </label>
        <input v-model="movie.director.name">
        <label>Nationality : </label>
        <input v-model="movie.director.nationality">
        <label>Birthdate: </label>
        <input v-model="movie.director.birthdate">
    </div>
</template>

<script>
export default {
    name: "MovieDetails",
    inject: ['movies'],
    data() {
        return {
            movie: [],
        };
    },
    created() {
        this.movie = this.movies.filter(movie => movie.id == this.$route.params.id)[0];
    }
}
</script>

<style scoped>
input {
    background-color: #33373e;
    color: #b5a068;
}

#movieInfos {
    display: flex;
    justify-content: center;
    width: 50%;
}

#director, #image, #infos {
    background-color: #33373e;
}

#infos, #director {
    display: flex;
    flex-direction: column;
}

#director {
    justify-content: center;
    width: 50%;
}
</style>