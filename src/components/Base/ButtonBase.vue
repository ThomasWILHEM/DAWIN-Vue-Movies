<template>
    <div class="button">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "ButtonBase"
}
</script>

<style scoped>
.button {
    border-radius: 15px;
    background-color: #b5a068;
    text-decoration: none;
    width: 5rem;
    height: 3rem;
}
</style>