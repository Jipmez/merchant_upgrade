import "./bootstrap";
import { createApp } from "vue";
import Swal from "sweetalert2";
import { dialog } from "./components/utils/dialog";
import { createPinia } from "pinia";
import piniaPluginPersistedState from "pinia-plugin-persistedstate";

import Landing from "./components/landing/home/home.vue";
import "../../public/assets/css/index.css";

window.Swal = Swal;
window.dialog = dialog;

const app = createApp({
    components: {
        Landing,
    },
});

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);
app.use(pinia);
app.mount("#app");
