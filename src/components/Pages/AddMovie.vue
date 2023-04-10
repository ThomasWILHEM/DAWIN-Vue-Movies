<template>
    <h2>Add a movie</h2>
    <div class="addMovie">
        <form>
            <div id="movieImage">
                <div id="image">
                    <img :src="imageUrl"/>
                </div>
                <button class="actions" @click.prevent="openFileDialog">
                    Add an image
                </button>
            </div>
            <div id="fields">
                <input v-model="createdMovie.title" placeholder="Title" type="text">
                <input v-model="createdMovie.year" placeholder="Year" type="number">
                <input v-model="createdMovie.language" placeholder="Language" type="text">
                <input v-model="createdMovie.director" placeholder="Director" type="text">
                <input v-model="createdMovie.genre" placeholder="Genre" type="text">
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
    inject: ['movies'],
    data() {
        return {
            createdMovie: {
                title: '',
                year: '',
                language: '',
                director: '',
                genre: ''
            },
            imageUrl: ''
        }
    },
    methods: {
        addMovie() {
            console.log(this.movies);
        },
        openFileDialog() {
            const input = document.createElement('input')
            input.type = 'file'
            input.accept = 'image/*'
            input.onchange = this.handleImageUpload
            input.click()
        },
        handleImageUpload(event) {
            const file = event.target.files[0]
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => {
                this.imageUrl = reader.result
            }
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

.addMovie {
    width: 80%;
    height: 30rem;
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