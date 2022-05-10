<template>
  <div class="structure">
    <h1 class="title">Dashboard</h1>
    <div class="container">
      <div class="row">
        <div class="card p-4 text-white bg-primary mb-3" style="max-width: 18rem;" 
        v-for="(item, index) in dados" :key="item.id">
          <input class="input-header">
          <div class="card-body">
            <input class="input-card">
            <button type="button" class="btn btn-outline-light mb-3" v-on:click="removeCard(index)">Excluir</button>
          </div>
          </div>
          </div>
          <div class="buton more">
            <button type="button" class="btn btn-outline-primary" v-on:click="addCard">More</button>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'StructurePage',
  props: {
    msg: String,
  },

  data() {
    return {dados: [
      {
        titulo: '', 
        texto: ''}, 
      ]}
  },

  methods: {
    removeCard(index) {
      this.dados.splice(index, 1);
    },

    addCard() {
      this.dados.push({
        titulo: '',
        texto: '',
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  color: black;
}
.input-header {
  background: #0077f7;
  border: none;
}
.input-card{
  background: #0077f7;
  border: none;
}
.bg-primary{
  margin: 10px;
}
</style>
