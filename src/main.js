import Vue from 'vue'
import App from './App.vue'
import router from './Router'
Vue.config.productionTip = false

/*********************************************VEEVALIDATE PACKAGE */
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import { ValidationObserver } from 'vee-validate';
Vue.component('ValidationProvider',ValidationProvider);
Vue.component('ValidationObserver',ValidationObserver);

/*********************************************VUELIDATE PACKAGE */
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
