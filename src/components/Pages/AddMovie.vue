<template>
    <h2>Add a movie</h2>
    <div class="movieDetails">
        <form>
            <div id="movieImage">
                <div id="image">
                    <img :src="imageUrl"/>
                </div>
            </div>
            <div id="fields">
                <input v-model="createdMovie.title" placeholder="Title" type="text">
                <input v-model="createdMovie.year" placeholder="Year" type="number">
                <input v-model="createdMovie.language" placeholder="Language" type="text">
                <input v-model="createdMovie.director.name" placeholder="Director's name" type="text">
                <input v-model="createdMovie.director.nationality" placeholder="Director's nationality" type="text">
                <input v-model="createdMovie.director.birthdate" placeholder="Director's birthdate" type="text">
                <input v-model="createdMovie.genre" placeholder="Genre" type="text">
                <input v-model="imageUrl" placeholder="Image" type="url" @change="changeMovieImage">
                <button class="actions" @click.prevent="addMovie">
                    Add
                </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "AddMovie",
    data() {
        return {
            createdMovie: {
                id: new Date().toISOString(),
                title: '',
                year: '',
                language: '',
                director: {
                    name: '',
                    nationality: '',
                    birthdate: ''
                },
                genre: '',
                image: ''
            },
            imageUrl: ''
        }
    },
    methods: {
        addMovie() {
            this.$store.commit('addMovie', {movie: this.createdMovie});
            this.$router.push('/')
        },
        changeMovieImage() {
            this.createdMovie.image = this.imageUrl;
        }
    }
}
</script>

<style scoped>
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
}

#fields input::placeholder {
    color: #5d594c;
}

.movieDetails {
    width: 80%;
    height: 35rem;
    background-color: #33373e;
    margin: auto;
    border: 2px solid #25272d;
    border-radius: 30px;
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
    height: 100%;
    display: flex;
    flex-direction: row;
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