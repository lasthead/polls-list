<template>
  <div class="menu menu__top">
    <div class="element menu__element">
      <nuxt-link class="element__link" to="/polls/params">
        Параметры
      </nuxt-link>
    </div>
    <div class="element menu__element">
      <nuxt-link class="element__link" to="/polls/questions">
        Вопросы
      </nuxt-link>
    </div>
    <div class="element menu__element">
      <nuxt-link class="element__link" to="/polls/logics">
        Логика
      </nuxt-link>
    </div>
    <div class="element menu__element">
      <nuxt-link class="element__link" to="/polls/terms">
        Условия
      </nuxt-link>
    </div>
    <div class="element menu__element">
      <nuxt-link class="element__link" to="/polls">
        Респонденты
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopMenu'
}
</script>

<style lang="scss" scoped>
.menu {
  border-bottom: 1px solid #c5dd66;
  padding: 15px;
  padding-bottom: 5px;
  &__top {
    display: flex;
  }
  &__element {
    padding: 5px 10px;
  }
}

.element {
  &__link {
    text-decoration: none;
    color: green;
    padding: 8px 10px;
    &--active {
      color: black;
      font-weight: bolder;
      border-bottom: 3px solid #c5dd66;
    }
  }
}
</style>
