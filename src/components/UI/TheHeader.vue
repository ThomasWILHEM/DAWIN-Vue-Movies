<template>
    <div id="header">
        <img src="../../assets/logo-cinematics.png">
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
    align-items: center;
}

img{
    width: 20rem;
    height: fit-content;
}
</style>