import ErrorPageVue from "@/pages/ErrorPage.vue";

export default [
  {
    path: "/:pathMatch(.*)*",
    name: "Error",
    component: ErrorPageVue,
  },
];
