import { createApp } from "vue";
import { createPinia } from "pinia";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import "@/assets/index.css";
import App from "./App.vue";
import router from "./router";
import Paginate from "vuejs-paginate-next";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Paginate);
app.use(autoAnimatePlugin);
app.mount("#app");
