<template>
    <div class="card">
        <div class="movieInfos">
            <h2>{{ movie.title }} ({{movie.year}})</h2>
            <p>{{movie.director.name}}</p>
        </div>
        <div class="actions">
            <router-link :to="movieInfosPath">
                <button>Infos</button>
            </router-link>
            <router-link :to="movieEditPath">
                <button>Edit</button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "MovieItem",
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

.actions button{
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

.actions button:hover{
    background-color: #97885e;
}

.card{
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
}

.movieInfos h2{
    margin-bottom: 0;
}

.movieInfos p {
    margin-top: 0.2rem;
}

</style>