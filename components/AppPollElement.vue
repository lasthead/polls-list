<template>
  <div class="poll__block">
    <InputSelect class="poll__element" />
    <InputsTextRange class="poll__element" />
  </div>
</template>

<script>
import InputSelect from './Inputs/InputSelect'
import InputsTextRange from './Inputs/InputsTextRange'
export default {
  name: 'AppPollElementRange',
  components: { InputsTextRange, InputSelect }
}
</script>

<style lang="scss">
.poll {
  &__block {
    width: 100%;
    padding: 20px 15px 40px 15px;
  }
  &__element {
    width: 100%;
    margin: 20px 0;
  }
}
</style>
