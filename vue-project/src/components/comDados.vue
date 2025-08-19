<script>
// options API
// export default {
//     data: function(){
//         return {
//             nomeProduto: "Caderno",
//             codigoProduto: "#321"
//         }
//     }
// }

// composition API
export default {
    setup: function(){
        let nomeProduto = "Lápis"
        let codigoProduto = "#789"
        return {nomeProduto, codigoProduto}
    }
}

// duas formas de utilizar a composition API, min;32:00
</script>


<template>
    <div>
        <h1>Componente com dados</h1>
        <p>Nome: {{ nomeProduto }} - {{ codigoProduto }}</p>
    </div>
</template>

<style scoped>
div{
    text-align: center;
    border: 2px solid green;
    background-color: #050d04;
    border-radius: 12px;
    margin: 30px;
    padding: 10px;
}

p{
    font-size: 1.2rem;
}
</style>