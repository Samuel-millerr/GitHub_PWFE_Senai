<script setup>
import {ref} from "vue"

    let nome = ref("NotebookGamer")
    let preco = ref(1500)

    function aplicar_desconto() {
        preco.value *= 0.9;
    }
</script>

<template>
    <section>
        <h2 >Nome - {{ nome }}</h2>
        <p>Preço - {{ preco }}</p>
        <button  v-on:click="aplicar_desconto()"> desconto </button>
    </section>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin: 30px;
    background-color: green;
    border: 1px solid black;
}

p {
    font-size: 18px;
}

button {
    padding: 5px;
    border: 1px solid black;
    font-size: 15px;
    background-color: white;
    border-radius: 10px;
}
</style>