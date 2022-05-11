<template>
  <div class="structure">
    <h1 class="title">Dashboard</h1>
    <div class="container">
      <div class="row">
        <div class="card bg-primary" style="max-width: 18rem;" 
        v-for="(item, index) in dados" :key="item.id">
          <textarea class="text-card"></textarea>
          <p>{{index}}</p>
          <button type="button" class="btn btn-outline-light mb-3" v-on:click="removeCard(index)">Excluir</button>
        </div>
        <div class="buton more top-0" style="top:0">
          <button type="button" class="btn btn-outline-primary" v-on:click="addCard">
          <icons-mdi name="close"></icons-mdi>
          More</button>
        </div>
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
        texto: ''}, 
      ]}
  },

  methods: {
    removeCard(index) {
      this.dados.splice(index, 1);
    },

    addCard() {
      let contador = this.dados.length+1
      this.dados.push({
        id: contador,
        texto: '',
      });
    }
  }
}
</script>

<style scoped>
.title {
  color: black;
}
.text-card{
  background: none repeat scroll 0 0;
  border: none;
  height: 70%;
  margin: 10px;
  resize: none;
  outline: none;

}
.bg-primary{
  margin: 10px;
  height: 250px;
  border: none;
  opacity: 80%;
}
</style>
