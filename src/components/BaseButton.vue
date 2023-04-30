<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "BaseButton"
}
</script>

<style scoped>
button {
    background-color: #b5a068;
    border: none;
    color: #25272d;
    width: 7rem;
    height: 2rem;
    border-radius: 30px;
    font-weight: bolder;
    font-size: medium;
    margin-top: 2rem;
}

button:hover {
    background-color: #97885e;
}

button:disabled {
    background-color: rgba(151, 136, 94, 0.2);
}
</style>