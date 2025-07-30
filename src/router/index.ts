import { createRouter, createWebHistory } from "vue-router";

// Deine Seiten-Views importieren
import HomeView from "../views/HomeView.vue";
import AnwesenheitsView from "../views/AnwesenheitsView.vue";

// Hier definierst du deine Seiten
const routes = [
  { path: "/", component: HomeView },
  { path: "/Anwesenheit", component: AnwesenheitsView },
];

const router = createRouter({
  history: createWebHistory(), // ← für normale URLs wie /about
  routes,
});

export default router;
