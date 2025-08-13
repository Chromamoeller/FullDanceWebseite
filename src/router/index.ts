import { createRouter, createWebHistory } from "vue-router";

// Deine Seiten-Views importieren
import Choreography from "../views/Choreography.vue";
import AnwesenheitsView from "../views/AnwesenheitsView.vue";
import HomeView from "../views/HomeView.vue";
import Videos from "../views/Videos.vue";

// Hier definierst du deine Seiten
const routes = [
  { path: "/", component: HomeView },
  { path: "/Choreography", component: Choreography },
  { path: "/AnwesenheitsView", component: AnwesenheitsView },
  { path: "/Videos", component: Videos },
];

const router = createRouter({
  history: createWebHistory(), // ← für normale URLs wie /about
  routes,
});

export default router;
