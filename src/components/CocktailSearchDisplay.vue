<template>
  <div class="cs-display">
    <template v-if="cocktail">
      <div class="cs-display-header">
        <img v-if="cocktail.thumbnail" :src="cocktail.thumbnail" alt="">
        <img v-else alt="" class="contain" src="../assets/glass.svg">
        <div class="name alt-font">{{ cocktail.name }}</div>
      </div>
      <div class="cs-display-content">
        <div class="ingredients">
          <span class="title">Ingredients</span>
          <div v-for="(ingredient, index) in cocktail.ingredients"
               :key="index"
               class="ingredient">
            <span class="ingredient-name">{{ ingredient.name }}</span> ({{ ingredient.measure|stripWhitespace }})
          </div>
        </div>
        <div class="instructions">
          <span class="title">Instructions</span>
          {{ cocktail.instructions }}
        </div>
      </div>
    </template>
    <span v-else>Select a cocktail using the search box. Try 'Martini', or 'Rum'!</span>
  </div>
</template>

<script>
export default {
  name: "CocktailSearchDisplay",
  props: {
    cocktail: {
      type: Object,
      default: () => {
      }
    }
  },
  filters: {
    stripWhitespace(value) {
      return typeof value === 'string' ? value.trim() : value;
    }
  }
}
</script>

<style lang="scss" scoped>
$imageSize: 300px;
.cs-display {
  padding: 0 30px;
  font-size: 18px;
  line-height: 1.3em;


  .cs-display-header {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    img {
      width: $imageSize;
      height: $imageSize;
      border-radius: 16px;
      margin-right: 30px;

      &.contain {
        object-fit: contain;
      }
    }

    .name {
      font-size: 40px;
    }
  }

  .cs-display-content {
    display: flex;
    flex-flow: row nowrap;
    padding: 30px;
  }

  .ingredients {
    width: 300px;
    display: flex;
    flex-flow: column nowrap;
    text-align: left;

    .ingredient {
      width: 100%;
      &::before{
        content: "•";
        color: #D08A8A;
        margin-right: 8px;
      }
    }
  }

  .instructions {
    flex: 1;
    text-align: justify;
  }

  .title {
    margin-bottom: 10px;
    color: #D08A8A;
    font-weight: bold;
    display: block;
  }
}
</style>
