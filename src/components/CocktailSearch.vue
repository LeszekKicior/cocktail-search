<template>
  <div class="container">
    <div class="cocktail-search">
      <div v-bar class="search">
        <div>
          <CocktailSearchInput class="input" @input="search"></CocktailSearchInput>
          <transition-group name="fade"
          >
            <CocktailSearchResult v-for="result in searchResults"
                                  :key="result.id"
                                  :result="result"
                                  :selected="result.id === displayCocktail.id"
                                  @click.native="showCocktail(result)"/>
          </transition-group>
          <transition name="fade">
            <div v-if="!searchResults.length" class="no-results">No cocktails or ingredients found.</div>
          </transition>
        </div>
      </div>
      <div class="display">
        <CocktailSearchDisplay :cocktail="displayCocktail"/>
      </div>
    </div>
  </div>
</template>

<script>
import cocktailApi from 'cocktail-api-facade';
import CocktailSearchResult from "@/components/CocktailSearchResult";
import CocktailSearchInput from "@/components/CocktailSearchInput";
import CocktailSearchDisplay from "@/components/CocktailSearchDisplay";

export default {
  name: "CocktailSearch",
  components: {CocktailSearchDisplay, CocktailSearchInput, CocktailSearchResult},
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
      this.displayCocktail = cocktail
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
  max-width: 1200px;
  height: 80%;
  border: 2px dashed #a78356;
  margin: auto;
  padding: 30px;
  display: flex;
  flex-flow: row nowrap;

  .no-results {
    margin-right: 15px;
  }

  .search {
    width: 30%;
    max-width: 300px;
    height: 100%;
    overflow-y: auto;
  }

  .display {
    width: 70%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
  }

  .input {
    box-sizing: border-box;
    position: sticky;
    top: 0;
    margin-bottom: 15px;
    width: calc(100% - 15px);
    margin-right: 15px;
    height: 72px
  }
}
</style>
