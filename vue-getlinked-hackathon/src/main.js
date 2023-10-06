import "./assets/scss/main.scss";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "@popperjs/core";
import { MotionPlugin } from "@vueuse/motion";

const app = createApp(App);

app.use(router);
app.use(MotionPlugin);
app.mount("#app");
