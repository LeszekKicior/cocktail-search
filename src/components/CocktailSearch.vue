<template>
  <div class="container">
    <div class="title alt-font">CocktailSearch</div>
    <div class="cocktail-search">
      <div v-bar class="search">
        <div>
          <CocktailSearchInput class="input" placeholder="Search..." @input="search"></CocktailSearchInput>
          <transition-group name="fade"
          >
            <CocktailSearchResult v-for="result in searchResults"
                                  :key="result.id"
                                  :result="result"
                                  :selected="result.id === selectedCocktail.id"
                                  @click.native="showCocktail(result)"/>
          </transition-group>
          <transition name="fade">
            <div v-if="!searchResults.length && searchUsed" class="no-results">No cocktails or ingredients found.</div>
          </transition>
        </div>
      </div>
      <div class="display">
        <transition duration="150" mode="out-in" name="fade">
          <CocktailSearchDisplay :key="selectedCocktail.id" :cocktail="selectedCocktail"/>
        </transition>
      </div>
    </div>
    <div class="note">Leszek Kicior 2020</div>
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
      searchUsed: false,
      selectedCocktail: ''
    }
  },
  methods: {
    search(string) {
      this.searchResults = []
      if (string) {
        cocktailApi.searchCocktail(string).then(results => {
          this.searchResults = results
          this.searchUsed = true
        })
      }
    },
    showCocktail(cocktail) {
      this.selectedCocktail = cocktail
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100%;
  background-color: #1C1D21;
  padding-top: 30px;
  box-sizing: border-box;

  .title {
    font-size: 48px;
    margin-bottom: 30px;
  }
}

.cocktail-search {
  max-width: 1200px;
  height: 80%;
  box-shadow: 0 4px 16px 4px #000000ab;
  border-radius: 12px;
  background-color: #222429;
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

.note {
  margin-left: auto;
  margin-right: 30px;
  margin-top: 20px;
  width: fit-content;
  color: rgba(255, 255, 255, 0.2);
  font-size: 14px;
}
</style>
