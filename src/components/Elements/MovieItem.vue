<template>
    <div class="card">
        <div>
            <h1>{{ movie.title }}</h1>
            <ButtonBase>
                <router-link :to="moviePath">Infos</router-link>
            </ButtonBase>
        </div>
        <div class="separator"></div>
        <div>
            <p>{{ movie.director.name }}</p>
            <p>Year: {{ movie.year }}</p>
            <p>Language: {{ movie.language }}</p>
            <p>Genre: {{ movie.genre }}</p>
        </div>
    </div>
</template>

<script>
import ButtonBase from "@/components/Base/ButtonBase.vue";

export default {
    name: "MovieItem",
    components: {ButtonBase},
    props: ['movie'],
    computed: {
        moviePath() {
            console.log(this.moviePath);
            return '/movie/' + this.movie.id;
        }
    }
}
</script>

<style scoped>
.card {
    background-color: #33373e;
    color: #b5a068;
    width: 50%;
    border-radius: 20px;
    border: 2px solid #25272d;
    margin: 1rem 0;
}

.separator {
    border-bottom: 2px solid #25272d;
}

router-link {
    color: #25272d;
    text-decoration: none;
}
</style>