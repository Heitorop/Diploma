const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/MainPage/MainPage.vue"),
    children: [
      {
        path: "/:pathMatch(.*)*",
        redirect: "/",
        name: "NotFound",
        component: () => import("@/views/MainPage/MainPage.vue"),
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
