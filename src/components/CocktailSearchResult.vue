<template>
  <div class="result" :class="{selected}">
    <img :src="result.thumbnail" alt="result.name" v-if="result.thumbnail">
    <img class="contain" src="../assets/glass.svg" alt="result.name" v-else>
    {{result.name}}
  </div>
</template>

<script>
export default {
  name: "CocktailSearchResult",
  props: {
    result: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .result{
    cursor: pointer;
    padding: 5px 15px;
    background-color: #222429;
    text-align: left;
    border: 1px solid #6F2C2C;
    border-radius: 4px;
    margin-bottom: 4px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin-right: 15px;
    transition: 100ms ease all;
    font-weight: bold;
    &.selected{
      background-color: #6F2C2C;
    }
    &:hover{
      box-shadow: 0 0 4px 4px rgba(0,0,0,0.2)
    }
    img{
      $size: 60px;
      height: $size;
      width: $size;
      object-fit: cover;
      border-radius: 4px;
      margin-right: 30px;
      &.contain{
        object-fit: contain;
      }
    }
  }
</style>
