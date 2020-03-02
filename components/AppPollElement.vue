<template>
  <div class="poll__block">
    <InputSelect
      v-if="data"
      class="poll__element"
      :name="name"
      :options="data"
      :active-option="activeOption"
      @optionSelected="updateCondition"
    />
    <InputsTextRange
      v-if="parseInt(activeOption) === 0"
      class="poll__element"
    />
    <InputSelect
      v-else
      name="Тип"
      class="poll__element"
      :options="data[activeOption].selectTypes"
    />
    <div class="button button__remove-element" @click="removeElement(id)">
      Удалить условие
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import InputSelect from './Inputs/InputSelect'
import InputsTextRange from './Inputs/InputsTextRange'

export default {
  name: 'AppPollElement',
  components: { InputsTextRange, InputSelect },
  props: {
    type: {
      type: String,
      default: 'select'
    },
    data: {
      type: Object,
      default: () => {}
    },
    name: {
      type: String,
      default: ''
    },
    id: {
      type: Number,
      default: 0
    },
    activeOption: {
      type: Number,
      default: 0
    }
  },
  methods: {
    ...mapMutations('polls', ['REMOVE_CONDITION_BY_ID', 'SET_ACTIVE_OPTION']),
    removeElement(elementId) {
      this.REMOVE_CONDITION_BY_ID(elementId)
    },
    updateCondition(optionId) {
      this.SET_ACTIVE_OPTION({ optionId, conditionId: this.id })
    }
  }
}
</script>

<style lang="scss">
.poll {
  &__block {
    width: 100%;
    padding: 20px 15px 40px 15px;
    position: relative;
    border: 1px solid #dddddd;
    border-bottom: none;
  }
  &__element {
    width: 100%;
    margin: 20px 0;
  }
}

.button {
  &__remove-element {
    cursor: pointer;
    border: 1px solid red;
    border-radius: 3px;
    color: red;
    position: absolute;
    right: 15px;
    height: 30px;
    display: flex;
    align-items: center;
    padding: 5px;
    font-size: 14px;
  }
}
</style>
