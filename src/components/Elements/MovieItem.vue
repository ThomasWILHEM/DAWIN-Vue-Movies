<template>
    <div class="card">
        <div class="movieInfos">
            <h2>{{ movie.title }} ({{ movie.year }})</h2>
            <p>{{ movie.director.name }}</p>
        </div>
        <div class="actions">
            <router-link :to="movieInfosPath">
                <base-button>
                    Infos
                </base-button>
            </router-link>
            <router-link :to="movieEditPath">
                <base-button>
                    Edit
                </base-button>
            </router-link>
        </div>
    </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";

export default {
    name: "MovieItem",
    components: {BaseButton},
    props: ['movie'],
    computed: {
        movieInfosPath() {
            return '/movie/' + this.movie.id;
        },
        movieEditPath() {
            return '/movie/' + this.movie.id + '/edit';
        }
    }
}
</script>

<style scoped>
.card {
    background-color: #33373e;
    color: #b5a068;
    width: 50%;
    border-radius: 30px;
    border: 2px solid #25272d;
    margin-bottom: 1rem;
    display: flex;
}

.actions button {
    width: 5rem;
    margin-left: 1rem;
    margin-top: 1rem;
}

.card {
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
}

.movieInfos h2 {
    margin-bottom: 0;
}

.movieInfos p {
    margin-top: 0.2rem;
}

</style>