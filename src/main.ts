import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store/store";
import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import { useCookies } from "vue3-cookies";
import middleware from '@grafikri/vue-middleware';

router.beforeEach(middleware());

createApp(App)
    .use(store)
    .use(router)
    .use(BootstrapVue3)
    .use(useCookies)
    .mount("#app")
