const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/layouts/Default.vue"),
    children: [
      {
        path: '',
        name: 'Main',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/MainPage/MainPage.vue'),
      },
      {
        path: "/:pathMatch(.*)*",
        redirect: "/",
        name: "NotFound",
        component: () => import("@/layouts/Default.vue"),
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
