<template>
  <div class="structure">
    <h1 class="title">teste</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm p-4" v-for="item in dados" :key="item.id">
          <div class="card card-body">
            <h5 class="card-title">{{item.titulo}}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
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
    dados: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  color: white;
}
h1 {
  margin: 40px 0 0;
  color: red !important;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  color: blueviolet;
}
a {
  color: white;
}
</style>
