<template>
    <div id="title">
        <h2>Movies</h2>
        <div class="actions">
            <router-link class="center-link" to="/add">
                <button>Add</button>
            </router-link>
        </div>
    </div>
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

h2 {
    font-weight: bolder;
    font-size: xx-large;
    text-align: center;
}

#title {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
}

button {
    background-color: #b5a068;
    border: none;
    color: #25272d;
    width: 5rem;
    height: 2rem;
    border-radius: 30px;
    font-weight: bolder;
    font-size: medium;
    margin-left: 1rem;
    margin-top: 1rem;
}

button:hover {
    background-color: #97885e;
}

.actions {
    display: flex;

}

.center-link {
    display: flex;
    justify-content: center;
    align-items: center;
}

.center-link button {
    margin: auto;
}

</style>