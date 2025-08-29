import { createApp } from "vue";
import { router } from "./router";
import App from "./App.vue";
import { createVuetify } from "vuetify";
import "vuetify/styles";
import '@mdi/font/css/materialdesignicons.css'
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});

createApp(App).use(vuetify).use(router).mount("#app");
