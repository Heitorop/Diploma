const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/Main/index.vue"),
    children: [
      {
        path: "/:pathMatch(.*)*",
        redirect: "/",
        name: "NotFound",
        component: () => import("@/pages/Main/index.vue"),
      },
    ],
  },
  {
    path: "/conclusion",
    name: "Conclusion",
    component: () => import("@/views/Conclusion/index.vue"),
  },
];

export default routes;
