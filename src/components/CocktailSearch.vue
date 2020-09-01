<template>
  <div class="container">
    <div class="cocktail-search">
      <div v-bar class="search">
        <div>
          <CocktailSearchInput class="input" @input="search"></CocktailSearchInput>
          <CocktailSearchResult v-for="result in searchResults" :key="result.id" :result="result"
                                @onclick="showCocktail(result)"/>
          <div v-if="!searchResults.length" class="no-results">No cocktails or ingredients found.</div>
        </div>
      </div>
      <div class="display">
      </div>
    </div>
  </div>
</template>

<script>
import cocktailApi from 'cocktail-api-facade';
import CocktailSearchResult from "@/components/CocktailSearchResult";
import CocktailSearchInput from "@/components/CocktailSearchInput";

export default {
  name: "CocktailSearch",
  components: {CocktailSearchInput, CocktailSearchResult},
  data() {
    return {
      searchResults: [],
      loading: false,
      displayCocktail: ''
    }
  },
  methods: {
    search(string) {
      this.searchResults = []
      if (string) {
        this.loading = true
        cocktailApi.searchCocktail(string).then(results => {
          this.searchResults = results
          this.loading = false
        })
      }
    },
    showCocktail(cocktail) {
      alert(cocktail.id)
      console.log(cocktail)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100%;
  background-color: #3a251f;
}

.cocktail-search {
  $partWidth: 30%;
  max-width: 1200px;
  height: 80%;
  border: 2px dashed #a78356;
  margin: auto;
  padding: 30px;

  .no-results{
    margin-right: 15px;
  }

  .search {
    width: $partWidth;
    max-width: 300px;
    height: 100%;
    overflow-y: auto;
  }

  .display {
    width: calc(100% - #{$partWidth})
  }

  .input {
    position: sticky;
    top: 0;
    margin-bottom: 15px;
    width: calc(100% - 47px);
    margin-right: 15px;
    height: 72px
  }
}
</style>
