<template>
    <div class="card">
        <h1>{{ movie.title }}</h1>
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
export default {
    name: "MovieItem",
    props: ['movie']
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
</style>