<template>
  <div :class="{selected}" class="result">
    <img v-if="result.thumbnail" :src="result.thumbnail" alt="result.name">
    <img v-else alt="result.name" class="contain" src="../assets/glass.svg">
    {{ result.name }}
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
.result {
  cursor: pointer;
  padding: 5px;
  background-color: #1d1e22;
  text-align: left;
  border-radius: 4px;
  margin-bottom: 4px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-right: 15px;
  transition: 100ms ease all;
  font-weight: bold;
  box-shadow: inset 0 0 8px 0 rgba(0, 0, 0, 0.2);

  &.selected {
    background-color: #6F2C2C;
  }

  &:hover {
    background-color: #923A3A
  }

  img {
    $size: 60px;
    height: $size;
    width: $size;
    object-fit: cover;
    border-radius: 4px;
    margin-right: 30px;

    &.contain {
      object-fit: contain;
    }
  }
}
</style>
