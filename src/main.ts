import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";

import router from "./router"; // 👈 WICHTIG: dein Router-Objekt
const pinia = createPinia();

const app = createApp(App);
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

ModuleRegistry.registerModules([AllCommunityModule]);

app.use(router); // 👈 OHNE DAS gibt's kein <RouterLink>
app.use(pinia);
app.mount("#app");
