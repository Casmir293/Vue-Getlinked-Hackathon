import "./assets/scss/main.scss";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "@popperjs/core";

const app = createApp(App);

app.use(router);

app.mount("#app");
