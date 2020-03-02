<template>
  <div class="input-range__container">
    <span class="title">Диапазон 1</span>
    <label class="range__block range__block--first">
      <span>От</span>
      <input name="range-begin" class="range__input" type="text" />
    </label>
    <label class="range__block range__block--second">
      <span>До</span>
      <input name="range-end" class="range__input" type="text" />
    </label>
  </div>
</template>

<script>
export default {
  name: 'InputsTextRange'
}
</script>

<style lang="scss" scoped>
.range {
  &__input {
    border: 1px solid #dddddd;
    border-radius: 3px;
    padding: 5px;
    width: 60px;
  }
}
</style>
