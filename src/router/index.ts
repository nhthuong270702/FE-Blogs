import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import UsersRouter from "./routers/Users";
import ErrorRouter from "./routers/NotFound";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    ...UsersRouter,
    ...ErrorRouter,
  ],
});

export default router;
