export default {
  methods: {
    optionValue(option) {
      if (typeof option === 'string') {
        return option
      }
      return option.id
    },
    optionCaption(option) {
      if (typeof option === 'string') {
        return option
      }
      return option.name
    }
  }
}
