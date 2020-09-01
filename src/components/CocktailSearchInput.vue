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
  background-color: #a78356;
  text-align: left;
  border: 1px solid #a78356;
  border-radius: 4px;
  outline: none;
  font-size: 30px;
}
</style>
