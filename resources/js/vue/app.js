import Vue from "vue";
import Vuetify from "vuetify";
Vue.use(Vuetify);
Vue.component('meteo', require('./composants/Meteo.vue').default)

const app = new Vue({
    el:"#meteo",
    vuetify: new Vuetify({})
})

export default new Vuetify(app)