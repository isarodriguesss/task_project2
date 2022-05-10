<template>
  <structure-template :dados="dados"/>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data() {
    return {dados: [{id: 1, titulo: 'Nome'}, {id: 2, titulo: 'Nome2'}, {id: 3, titulo: 'Name3'}, {id: 4, titulo: 'Name5'}]}
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.structure{
  background: #2c3e50;
}
</style>
