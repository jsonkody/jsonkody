import { createApp } from "vue";
import Toolpop from "toolpop";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);
app.use(Toolpop);

app.mount("#app");
