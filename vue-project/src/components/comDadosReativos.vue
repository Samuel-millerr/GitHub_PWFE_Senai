<script setup>
import {ref} from "vue"
    let nome = ref("Samuel")
    let idade = ref(19)

    function fazerAniversario(){
        idade.value += 1;
    }

    function mudarNome(){
        nome.value = "Ana Maria"
    }
</script>

<template>
    <div class="componente">
        <h1> Componente com dados reativos</h1>
        <p>Nome: {{ nome }} | Idade: {{ idade }}</p>
        <button v-on:click="fazerAniversario()">Fazer Aniversario</button>
        <button v-on:click="mudarNome()">Mudar Nome</button>
    </div>
</template>