import Vue from 'vue'
import vClickOutside from 'v-click-outside'

if (process.browser) {
  Vue.use(vClickOutside)
}
