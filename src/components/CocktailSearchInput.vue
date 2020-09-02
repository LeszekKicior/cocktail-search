<template>
    <input class="cs-input" @input="debounceInput">
</template>

<script>
import _ from 'lodash'

export default {
  name: "CocktailSearchInput",
  data() {
    return {
      input: ''
    }
  },
  methods: {
    debounceInput: _.debounce(function (e) {
      this.$emit('input', e.target.value)
    }, 500)
  }
}
</script>

<style lang="scss" scoped>
.cs-input {
  padding: 5px 15px;
  background-color: #6F2C2C;
  color: white;
  text-align: left;
  border-radius: 4px;
  outline: none;
  font-size: 30px;
}
</style>
