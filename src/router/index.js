import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomeLayout",
      component: () => import("@/layout/Home.vue"),
      redirect: { name: "home" },
      children: [
        {
          path: "/",
          name: "home",
          component: Home,
        },
      ],
    },
    {
      path: "/",
      name: "Default",
      component: () => import("@/layout/Default.vue"),
      redirect: { name: "home" },
      children: [
        {
          path: "/about",
          name: "about",
          component: () => import("../views/About.vue"),
        },
        {
          path: "/portfolio",
          name: "portfolio",
          alias: ["/projects"],
          component: () => import("../views/Portfolio.vue"),
        },
        {
          path: "/projects/:id",
          name: "projects",
          component: () => import("../views/Project.vue"),
        },
      ],
    },
  ],
});
router.beforeEach((to, from) => {
  window.scrollTo(0, 0);
  // to and from are both route objects. must call `next`.
});
export default router;
