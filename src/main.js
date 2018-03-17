import Vue from 'vue'
import App from './App'
import router from './router'
import VueMoment from 'vue-moment'
import VuePaginate from 'vue-paginate'
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueMoment)
Vue.use(VuePaginate)
Vue.use(VueLocalStorage)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
