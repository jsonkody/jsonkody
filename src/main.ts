import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// import Toolpop from "toolpop";
import { createPop } from "./pop";

const app = createApp(App);
app.directive("pop", createPop());
// app.use(Toolpop);

app.mount("#app");
