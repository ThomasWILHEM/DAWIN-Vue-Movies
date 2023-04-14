<template>
    <div id="actions">
        <router-link class="center-link" to="/">
            <base-button id="return">
                Return
            </base-button>
        </router-link>
        <div v-if="isEditMode" id="editButtons">
            <base-button @click="setEdit">
                {{ editText }}
            </base-button>
            <base-button @click="deleteMovie">
                Delete
            </base-button>
        </div>
    </div>
    <h2>Movie Details</h2>
    <div class="movieDetails">
        <div id="movieImage">
            <div id="image">
                <img :src="movie.image"/>
            </div>
        </div>
        <div id="fields">
            <div class="field">
                <label>Title : </label>
                <input v-model="movie.title" :disabled="!isEditing" placeholder="Title" type="text">
            </div>
            <div class="field">
                <label>Year : </label>
                <input v-model="movie.year" :disabled="!isEditing" placeholder="Year" type="number">
            </div>
            <div class="field">
                <label>Language : </label>
                <input v-model="movie.language" :disabled="!isEditing" placeholder="Language" type="text">
            </div>
            <div class="field">
                <label>Genre : </label>
                <input v-model="movie.genre" :disabled="!isEditing" placeholder="Genre" type="text">
            </div>
            <div v-if="isEditing" class="field">
                <label>Image : </label>
                <input v-model="movie.image" placeholder="Genre" type="text">
            </div>
        </div>
    </div>
    <h2>Director</h2>
    <div class="directorDetails">
        <div id="fields">
            <div class="field">
                <label>Name : </label>
                <input v-model="movie.director.name" :disabled="!isEditing" type="text">
            </div>

            <div class="field">
                <label>Nationality : </label>
                <input v-model="movie.director.nationality" :disabled="!isEditing" type="text">
            </div>

            <div class="field">
                <label>Birthdate : </label>
                <input v-model="movie.director.birthdate" :disabled="!isEditing" type="text">
            </div>
        </div>
    </div>
</template>

<script>

import BaseButton from "@/components/BaseButton.vue";

export default {
    name: "MovieDetails",
    components: {BaseButton},
    data() {
        return {
            movie: [],
            isEditing: false,
            isEditMode: false
        };
    },
    computed: {
        movies() {
            return this.$store.getters.movies;
        },
        editText() {
            return this.isEditing ? 'Save' : 'Edit';
        }
    },
    created() {
        this.movie = this.movies.filter(movie => movie.id == this.$route.params.id)[0];
        if (this.$route.name === 'movie-edit') {
            console.log("oui");
            this.isEditMode = true;
        }
    },
    methods: {
        setEdit() {
            this.isEditing = !this.isEditing;
        },
        deleteMovie() {
            this.$store.commit('deleteMovie', {movie: this.movie});
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
input {
    background-color: #33373e;
    color: #b5a068;
}

#actions {
    display: flex;
    justify-content: space-between;
}

button {
    margin: 1rem;
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

.field {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
}

.field label {
    margin-right: 0.5rem;
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
    min-width: 20rem;
    height: auto;
    object-fit: contain;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
</style>