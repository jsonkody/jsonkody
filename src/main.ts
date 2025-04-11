import { createApp } from "vue";
import { pop } from "vue-pop-directive";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);
app.directive("pop", pop);

app.mount("#app");
