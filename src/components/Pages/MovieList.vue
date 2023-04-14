<template>
    <div id="title">
        <h2>Movies</h2>
    </div>
    <div id="fields">
        <div class="actions">
            <router-link class="center-link" to="/add">
                <base-button>
                    Add
                </base-button>
            </router-link>
        </div>
        <input v-model="filter" placeholder="Search by name, director or year" @change="searchMovie">
    </div>
    <div id="movieList">
        <MovieItem v-for="movie in filteredMovie" :key="movie.id" :movie="movie"></MovieItem>
    </div>
</template>

<script>
import MovieItem from "@/components/Elements/MovieItem.vue";
import BaseButton from "@/components/BaseButton.vue";

export default {
    name: "MovieList",
    components: {BaseButton, MovieItem},
    data() {
        return {
            filter: null
        };
    },
    computed: {
        movies() {
            return this.$store.getters.movies;
        },
        filteredMovie() {
            return this.movies.filter(m => {
                if (!this.filter) return true;
                return m.title.includes(this.filter) || m.director.name.includes(this.filter) || m.year == this.filter;
            })
        }
    },
    methods: {
        searchMovie() {
            console.log(this.filter);
        }
    }
}
</script>

<style scoped>
#movieList {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

h2 {
    font-weight: bolder;
    font-size: xx-large;
    text-align: center;
}

#title {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
}

.actions {
    display: flex;
    margin-right: 2rem;
}

.center-link {
    display: flex;
    justify-content: center;
    align-items: center;
}

.center-link button {
    margin: auto;
}

#fields {
    display: flex;
    justify-content: center;
}

#fields input, select {
    background-color: #33373e;
    color: #b5a068;
    width: 40%;
    margin: 1rem 0;
    height: 3rem;
    border-radius: 30px;
    padding: 0 1rem;
}

#fields input::placeholder {
    color: #5d594c;
}


</style>