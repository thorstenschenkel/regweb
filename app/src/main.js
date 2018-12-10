import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSpinner)

Vue.use(VueResource);
//Vue.http.headers.common['Access-Control-Allow-Headers'] = 'Accept, Content-Type, Access-Control-Allow-Origin';
//Vue.http.headers.common['access-control-allow-origin'] = '*';
//Vue.http.headers.common['accept'] = 'application/json';
//Vue.http.headers.common['content-type'] = 'application/json';

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  el: '#app',
  render: h => h(App)
})
