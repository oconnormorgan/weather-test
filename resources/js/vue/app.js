import Vue from "vue";
import Vuetify from "vuetify";
import 'vuetify/dist/vuetify.min.css';
import Meteo from "./composants/Meteo.vue"

Vue.use(Vuetify);
Vue.component('meteo', Meteo)

const app = new Vue({
    el:"#meteo",
    vuetify: new Vuetify({})
})

export default new Vuetify(app)