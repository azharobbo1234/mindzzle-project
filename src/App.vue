<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f3f3f3;
}
.btn-light{
    background-color: white !important;
    color: #8d8d8d !important;
}
.btn-light.active{
  background-color: #e96f24 !important;
  color: white !important;
}
.btn-light:hover {
   background-color: #e96f24 !important;
   color: white !important;
}

</style>
