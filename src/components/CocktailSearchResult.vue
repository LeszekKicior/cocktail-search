<template>
  <div class="result" :class="{selected}">
    <img :src="result.thumbnail" alt="result.name">
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
    background-color: #3a251f;
    text-align: left;
    border: 1px solid #a78356;
    border-radius: 4px;
    margin-bottom: 4px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin-right: 15px;
    transition: 100ms ease all;
    font-weight: bold;
    &.selected{
      background-color: #a78356;
      color: black;
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
    }
  }
</style>
