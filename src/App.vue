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
body {
  margin: 0;
}
</style>
