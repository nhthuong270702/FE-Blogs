import { apiAuth } from "../../utils/apiurls";
import Register from "@/pages/auth/Register.vue";
import Login from "@/pages/auth/Login.vue";
import HomePage from "@/pages/HomePage.vue";
import authentication from "@/middleware/authentication";

const AuthRouter = [
  {
    path: apiAuth + '/register',
    name: "register",
    component: Register,
    meta: {
      middleware: [authentication],
    },
  },

  {
    path: apiAuth + '/login',
    name: "login",
    component: Login,
    // beforeEnter: (to, from, next) => {
    //     if (localStorage.getItem('user')) next('/auth/home-page');
    //     else next();
    //   },
    meta: {
      middleware: [authentication],
    },
  },

    {
    path: apiAuth + '/home-page',
    name: "homepage",
    component: HomePage,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('user')) next('/auth/login');
      else next();
    },
  },

];

export default AuthRouter;
