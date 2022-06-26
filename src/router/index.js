import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Paginate from "../views/Paginate.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/paginate",
      name: "Paginate",
      component: Paginate,
    },
  ],
});

export default router;
