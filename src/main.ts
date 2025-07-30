import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router"; // 👈 WICHTIG: dein Router-Objekt

const app = createApp(App);

app.use(router); // 👈 OHNE DAS gibt's kein <RouterLink>
app.mount("#app");
