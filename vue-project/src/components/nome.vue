<script setup>
import {ref} from "vue"
let nome = ref("Samuel")
let idade = ref(18)

function fazer_aniversario(){
    idade.value += 1
}
</script>

<template>
    <section>
        <h2> NOME - {{ nome }} </h2>
        <P> IDADE - {{ idade }}</P>
        <button v-on:click="fazer_aniversario"> não clique aqui </button>
    </section>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: gray;
    border: 1px solid black;
    color: black;
    border-radius: 15px;
    padding: 10px;
    margin: 30px;
}

button{
    padding: 10px;
    border-radius: 10px;
}
</style>