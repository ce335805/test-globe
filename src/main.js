import Vue from 'vue'
import IncludeGlobe from './includeGlobe.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(IncludeGlobe),
}).$mount('#includeGlobe')
