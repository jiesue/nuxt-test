
import Vue from 'vue'
let install = {
  install (Vue) {
    Vue.prototype.$test = ()=>{ alert('test') }
  }
}

Vue.use(install)
