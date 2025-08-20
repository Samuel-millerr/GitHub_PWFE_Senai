# Todo arquivo .vue é um componentes
# Todo componente pode ter 3 partes, script(javaScript), template(html) e style(css)
<script setup>
import primeiroComponente from "./components/primeiroComponente.vue"
import comDados from "./components/comDados.vue" 
import comDadosReativos from "./components/comDadosReativos.vue";
import produto from "./components/produto.vue"
import nome from "./components/nome.vue"
</script>

<template>
  <header>VUE</header>
  <nome/>
  <produto/>
  <comDadosReativos/>
  <primeiroComponente/>
  <comDados/>
</template>

<style scoped>
</style>
