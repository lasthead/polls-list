<template>
  <div class="input-select__container">
    <span class="title">{{ name }}</span>
    <div class="input-select__wrapper">
      <select
        v-model="selected"
        :name="'condition_' + id + '_options'"
        class="input-select__select"
      >
        <option v-for="(option, index) in options" :key="index" :value="index">
          {{ option.name || option }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputSelect',
  props: {
    options: {
      type: Object,
      default: () => {}
    },
    id: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: ''
    },
    activeOption: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isOpened: false,
      selectedOption: '1'
    }
  },
  computed: {
    selected: {
      get() {
        return this.activeOption
      },
      set(value) {
        this.$emit('optionSelected', value)
      }
    }
  }
}
</script>
<style lang="scss">
.title {
  margin: 0 50px;
}

.input-select {
  &__container {
    display: flex;
  }
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
  }
  &__wrapper {
    position: relative;
    &:after {
      content: '';
      display: flex;
      background-image: url('../../assets/images/svg/down-arrow.svg');
      width: 10px;
      height: 10px;
      position: absolute;
      top: 8px;
      right: 7px;
    }
  }
}
</style>
