<template>
    <TheHeader></TheHeader>
    <router-view></router-view>
    <TheFooter></TheFooter>
</template>

<script>

import TheHeader from "@/components/UI/TheHeader.vue";
import TheFooter from "@/components/UI/TheFooter.vue";

export default {
    name: 'App',
    components: {TheFooter, TheHeader},
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #b5a068;
}

html, body {
    height: 100%;
    margin: 0;
    background-color: rgba(51, 55, 62, 0.82);
    padding: 0;
}
</style>
