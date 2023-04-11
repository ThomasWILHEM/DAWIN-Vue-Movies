<template>
    <h2>Movie Details</h2>
    <div class="movieDetails">
        <div id="movieImage">
            <div id="image">
                <img :src="movie.image"/>
            </div>
        </div>
        <div id="fields">
            <input v-model="movie.title" disabled placeholder="Title" type="text">
            <input v-model="movie.year" disabled placeholder="Year" type="number">
            <input v-model="movie.language" disabled placeholder="Language" type="text">
            <input v-model="movie.genre" disabled placeholder="Genre" type="text">
        </div>
    </div>
    <h2>Director</h2>
    <div class="directorDetails">
        <div id="fields">
            <input v-model="movie.director.name" disabled type="text">
            <input v-model="movie.director.nationality" disabled type="text">
            <input v-model="movie.director.birthdate" disabled type="text">
        </div>
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

h2 {
    font-weight: bolder;
    font-size: xx-large;
    text-align: center;
}

#fields {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    justify-content: center;
}

#fields input {
    background-color: #33373e;
    color: #b5a068;
    width: 70%;
    margin: 1rem 0;
    height: 2rem;
    border-radius: 30px;
    padding: 0 1rem;
    display: flex;
}

.directorDetails #fields {
    width: 100%;
}

#fields input::placeholder {
    color: #5d594c;
}

.movieDetails, .directorDetails {
    width: 80%;
    background-color: #33373e;
    margin: auto;
    border: 2px solid #25272d;
    border-radius: 30px;
    height: 100%;
    display: flex;
    flex-direction: row;
    padding: 2rem;
}

#movieImage {
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

form {

}

#image {
    background-color: #33373e;
    border: 2px solid #25272d;
    height: 22rem;
    border-radius: 30px;
    width: 70%;
}

img {
    width: 100%;
    height: 100%;
    border-radius: 30px;
}

button.actions {
    background-color: #b5a068;
    border: none;
    color: #25272d;
    width: 10rem;
    height: 2rem;
    border-radius: 30px;
    font-weight: bolder;
    font-size: medium;
    margin-top: 2rem;
}

button.actions:hover {
    background-color: #97885e;
}
</style>