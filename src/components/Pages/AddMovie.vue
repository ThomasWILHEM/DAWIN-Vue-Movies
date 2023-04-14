<template>
    <router-link class="center-link" to="/">
        <base-button id="return">
            Return
        </base-button>
    </router-link>
    <h2>Add a movie</h2>
    <div class="movieDetails">
        <form>
            <div id="movieImage">
                <div id="image">
                    <p v-if="imageUrl === ''">No image</p>
                    <img v-else :src="imageUrl"/>
                </div>
            </div>
            <div id="fields">
                <input v-model="createdMovie.title" placeholder="Title" required type="text">
                <input v-model="createdMovie.year" placeholder="Year" required type="number">
                <input v-model="createdMovie.language" placeholder="Language" required type="text">
                <input v-model="createdMovie.genre" placeholder="Genre" required type="text">
                <input v-model="imageUrl" placeholder="Image" required type="url" @change="changeMovieImage">
                <div id="directorActions">
                    <select required @change="changeDirector">
                        <option disabled selected>Choose a director</option>
                        <option v-for="director in directors" :key="director.id" :value="director.id">{{
                            director.name
                            }}
                        </option>
                    </select>
                    <base-button class="actions" @click.prevent="toggleAddDirector">
                        {{ textDirector }}
                    </base-button>
                </div>
                <base-button :disabled="createDirector" class="actions" @click.prevent="addMovie">
                    Add
                </base-button>
            </div>
        </form>
    </div>

    <div v-if="createDirector" class="directorDetails">
        <form>
            <div id="fields">
                <input v-model="createdMovie.director.name" :required="createDirector" placeholder="Director's name"
                       type="text">
                <input v-model="createdMovie.director.nationality" :required="createDirector"
                       placeholder="Director's nationality" type="text">
                <input v-model="createdMovie.director.birthdate" :required="createDirector"
                       placeholder="Director's birthdate" type="text">
            </div>
            <base-button class="actions" @click.prevent="addDirector">
                Add director
            </base-button>
        </form>
    </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";

export default {
    name: "AddMovie",
    components: {BaseButton},
    data() {
        return {
            createdMovie: {
                id: new Date().toISOString(),
                title: '',
                year: '',
                language: '',
                director: {
                    id: '',
                    name: '',
                    nationality: '',
                    birthdate: ''
                },
                genre: '',
                image: ''
            },
            imageUrl: '',
            createDirector: false
        }
    },
    methods: {
        addMovie() {
            this.$store.commit('addMovie', {movie: this.createdMovie});
            this.$router.push('/');
            console.log(this.createdMovie);
        },
        addDirector() {
            this.$store.commit('addDirector', {director: this.createdMovie.director});
            this.createDirector = false;
            console.log(this.createdMovie);
        },
        changeMovieImage() {
            this.createdMovie.image = this.imageUrl;
        },
        toggleAddDirector() {
            if (this.createDirector) {
                this.createDirector = false;
            } else {
                this.createDirector = true;
                this.createdMovie.director.id = this.nextDirectorId;
            }
        },
        changeDirector(event) {
            const directorId = event.target.value;
            this.createdMovie.director = this.directors[directorId - 1];
            console.log(this.createdMovie);
        }
    },
    computed: {
        directors() {
            return this.$store.state.directors;
        },
        nextDirectorId() {
            return this.$store.state.nextDirectorId;
        },
        textDirector() {
            return this.createDirector ? '-' : '+';
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

#directorActions {
    display: flex;
    width: 70%;
}

#return {
    margin-left: 1rem;
}

#image p {
    width: 100%;
    height: 100%;
}

#directorActions button {
    width: 2rem;
    margin: auto;
}

#fields {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    justify-content: center;
}

#fields input, select {
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
    height: 40rem;
    background-color: #33373e;
    margin: auto;
    border: 2px solid #25272d;
    border-radius: 30px;
}

.directorDetails {
    width: 80%;
    height: 20rem;
    background-color: #33373e;
    margin: 2rem auto;
    border: 2px solid #25272d;
    border-radius: 30px;
}

.directorDetails form {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

</style>