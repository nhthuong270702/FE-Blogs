import { createRouter, createWebHistory } from "vue-router";
// import HomePage from "../pages/Home.vue";
// import ContactPage from "../pages/Contact.vue";
// import CatelogyPage from "../pages/Catelogy.vue";
// import PostPage from "../pages/Post.vue";
// import PostNosidebarPage from "../pages/PostNosidebar.vue";
// import RegularPage from "../pages/Regular.vue";
import UsersRouter from "./routers/Users";

function lazyLoad(view){
  return() => import(`@/pages/${view}.vue`)
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: lazyLoad('Home'),
    },
    {
      path: "/contact",
      name: "contact",
      component: lazyLoad('Contact'),
    },
    {
      path: "/catelogies",
      name: "catelogy",
      component: lazyLoad('Catelogy'),
    },
    {
      path: "/posts",
      name: "post",
      component: lazyLoad('Post'),
    },
    {
      path: "/posts-nosidebar",
      name: "post_nosidebar",
      component: lazyLoad('PostNosidebar'),
    },
    {
      path: "/regulars",
      name: "regular",
      component: lazyLoad('Regular'),
    },
    ...UsersRouter,
  ],
});

export default router;
