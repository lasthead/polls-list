<template>
  <label class="input-select__wrap">
    <span>Условие</span>
    <select class="input-select__select">
      <option value="">Возраст респондента</option>
      <option value="">My first option</option>
      <option value="">Lorem ipsum</option>
      <option value="">A slightly longer option than the rest</option>
      <option value="">Fourth option</option>
    </select>
  </label>
</template>

<script>
export default {
  name: 'InputSelect'
}
</script>
<style lang="scss">
.input-select {
  &__select {
    padding: 5px 30px 5px 9px; // [1]
    width: 100%;
    height: 100%;
    color: #000;
    box-shadow: none;
    background-color: transparent;
    background-image: none;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 1px solid #dddddd;
    border-radius: 3px;

    &:after {
      content: '';
      display: flex;
      background-image: url("../../assets/");
    }
  }
}
</style>
