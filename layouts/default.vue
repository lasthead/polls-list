<template>
  <div>
    <div class="page page__container">
      <LeftMenu class="menu menu__left" />
      <nuxt class="page__content" />
    </div>
  </div>
</template>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.page {
  &__container {
    margin: 0 auto;
    width: 1366px;
    min-height: 100vh;
    display: flex;
    justify-content: center;
  }
  &__content {
    position: relative;
    box-shadow: 1px 5px 7px #dadadada;
    width: 50%;
  }
}

.menu__left {
  padding: 25px;
  position: relative;
  left: 0;
  width: 200px;
}
</style>
<script>
import LeftMenu from '../components/LeftMenu'
export default {
  components: { LeftMenu }
}
</script>
