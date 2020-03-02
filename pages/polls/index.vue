<template>
  <div class="page__polls">
    <TopMenu class="menu menu__top" />
    <form
      ref="formData"
      class="form content__form"
      @submit.prevent="getFormData"
    >
      <AppPollElement
        v-for="(condition, index) in getConditions"
        :id="condition.id"
        :key="index"
        :name="condition.name"
        :data="condition.options"
        class="poll"
        :type="condition.type"
        :active-option="condition.selectedOption"
      />
      <div
        class="button button--large-block button__add-element"
        @click="addCondition"
      >
        <span class="button__symbol">+</span>
        Нажмите, чтобы добавить новое условие выборки. Все условия связываются
        между собой логическим "И"
      </div>
      <div class="form__send">
        <button class="button button__send" type="submit">Далее -></button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import AppPollElement from '../../components/AppPollElement'
import TopMenu from '../../components/TopMenu'

export default {
  components: { TopMenu, AppPollElement },
  computed: {
    ...mapGetters('polls', ['getConditions'])
  },
  methods: {
    ...mapActions('polls', ['SEND_FORM_DATA']),
    ...mapMutations('polls', ['ADD_NEW_CONDITION']),
    getFormData(data) {
      const prepareFormData = []
      for (const key in data.target.elements) {
        prepareFormData.push({
          name: data.target.elements[key].name,
          value: data.target.elements[key].value
        })
      }
      this.SEND_FORM_DATA(prepareFormData)
    },
    addCondition() {
      this.ADD_NEW_CONDITION()
    }
  }
}
</script>

<style lang="scss">
.page__polls {
  .poll {
    &:nth-child(1) {
      background: #fefdf6;
    }
    &:nth-child(2) {
      background: #fafafe;
    }
    &:nth-child(3) {
      background: #f9fff9;
    }
  }
}

.button {
  &__send {
    background: #3fa222;
    border: none;
    border-radius: 3px;
    color: white;
    width: 80px;
    height: 30px;
    position: absolute;
    right: 15px;
    margin: 25px 0;
  }
  &__add-element {
    cursor: pointer;
    border: 1px solid #dddddd;
    color: green;
    padding: 10px;
    text-align: center;
    font-size: 12px;
  }
  &__symbol {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 35px;
    color: green;
  }
}
</style>
