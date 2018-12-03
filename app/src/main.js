import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource);

Vue.http.headers.common['Content-Type'] = 'application/json'
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'
Vue.http.headers.common['Accept'] = 'application/json, text/plain, */*'
Vue.http.headers.common['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin'

new Vue({
  el: '#app',
  render: h => h(App)
})
