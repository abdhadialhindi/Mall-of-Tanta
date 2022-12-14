import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
Vue.use(Vuetify);

export default new Vuetify({
  rtl: false,
});
// eslint-disable-next-line no-unused-vars
const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#562d5f",
        secondary: "#b0bec5",
        accent: "#8c9eff",
        error: "#b71c1c",
      },
    },
  },
});
