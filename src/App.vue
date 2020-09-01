<template>
  <div id="app">
    <CocktailSearch/>
  </div>
</template>

<script>
import CocktailSearch from "@/components/CocktailSearch";

export default {
  name: 'App',
  components: {
    CocktailSearch
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

body {
  margin: 0;
}
</style>
