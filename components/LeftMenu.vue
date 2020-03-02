<template>
  <div class="menu menu__wrap">
    <div class="element menu__element">
      <nuxt-link class="element__link" to="/polls">
        Опросы
      </nuxt-link>
    </div>
    <div class="menu__element">
      <nuxt-link class="element__link" to="/users">
        Пользователи
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftMenu'
}
</script>

<style lang="scss" scoped>
.menu {
  border-right: 1px solid #dddddd;
  margin-top: 50px;
  margin-right: 20px;
  &__element {
    height: 80px;
    border: 1px solid #dddddd;
    margin: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
  }
}
.element {
  &__link {
    text-decoration: none;
  }
}
</style>
