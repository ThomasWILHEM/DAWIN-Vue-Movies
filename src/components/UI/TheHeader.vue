<template>
    <div id="header">
        <h1>Cinematics</h1>
        <div>
            <router-link to="/">Movies</router-link>
            <router-link to="/add">Add a movie</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "TheHeader"
}
</script>

<style scoped>
#header {
    width: 100%;
    height: 5rem;
    background-color: #33373e;
    color: #b5a068;
    text-align: center;
    display: flex;
    justify-content: center;
}
</style>