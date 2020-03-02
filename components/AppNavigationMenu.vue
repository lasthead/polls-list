<template>
  <div></div>
</template>

<script>
export default {
  name: 'AppNavigationMenu',
  data() {
    return {
      menuItems: [
        {
          link: 'parameters',
          name: 'Параметры'
        },
        {
          link: 'questions',
          name: 'Вопросы'
        },
        {
          link: 'logic',
          name: 'Логика'
        },
        {
          link: 'conditions',
          name: 'Условия'
        },
        {
          link: 'conditions',
          name: 'Респонденты'
        }
      ]
    }
  }
}
</script>
