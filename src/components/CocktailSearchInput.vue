<template>
  <input :placeholder="placeholder" class="cs-input alt-font" @input="debounceInput">
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
  props: {
    placeholder: {
      type: String,
      required: false
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
  border: none;
  box-shadow: inset 0 0 8px 0 rgba(0, 0, 0, .8);
  transition: 150ms ease all;

  &:focus {
    box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, .8);
  }
}
</style>
