export default {
  props: {
    caption: {
      type: String,
      default: ''
    },
    dataCy: {
      type: String,
      default: ''
    },
    errorText: {
      type: String,
      default: ''
    },
    hint: {
      type: String,
      default: ''
    },
    labelFormId: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    tabindex: {
      type: [Number],
      default: null
    },
    value: {
      type: [String, Number],
      default: ''
    }
  },
  computed: {
    initialClasses() {
      return { input_error: !!this.errorText, input: true }
    },
    classes() {
      return this.initialClasses
    }
  }
}
