function handleHotUpdate(_router, _generateRoutes) {
}
const _routes = [
  {
    name: "index",
    path: "/",
    component: () => import("../pages/index.vue.mjs")
  },
  {
    name: "login",
    path: "/login",
    component: () => import("../pages/login.vue.mjs")
  },
  {
    name: "Projects",
    path: "/Projects",
    component: () => import("../pages/Projects.vue.mjs")
  },
  {
    name: "ContactUs",
    path: "/ContactUs",
    component: () => import("../pages/ContactUs.vue.mjs")
  },
  {
    name: "latestNews",
    path: "/latestNews",
    component: () => import("../pages/latestNews.vue.mjs")
  },
  {
    name: "contentUpload",
    path: "/contentUpload",
    component: () => import("../pages/contentUpload.vue.mjs")
  },
  {
    name: "myIIInvestors",
    path: "/myIIInvestors",
    component: () => import("../pages/myIIInvestors.vue.mjs")
  },
  {
    name: "aboutUs-section",
    path: "/aboutUs/:section()",
    component: () => import("../pages/aboutUs/_section_.vue.mjs")
  },
  {
    name: "adminPanel-section",
    path: "/adminPanel/:section()",
    component: () => import("../pages/adminPanel/_section_.vue.mjs")
  },
  {
    name: "ourInvestors-section",
    path: "/ourInvestors/:section()",
    component: () => import("../pages/ourInvestors/_section_.vue.mjs")
  },
  {
    name: "VerticalArea-section",
    path: "/VerticalArea/:section()",
    component: () => import("../pages/VerticalArea/_section_.vue.mjs")
  },
  {
    name: "ourInvestors-VerticalArea",
    path: "/ourInvestors/VerticalArea",
    component: () => import("../pages/ourInvestors/VerticalArea.vue.mjs")
  },
  {
    name: "VerticalArea-VerticalArea",
    path: "/VerticalArea/VerticalArea",
    component: () => import("../pages/VerticalArea/VerticalArea.vue.mjs")
  }
];
export {
  _routes as default,
  handleHotUpdate
};
//# sourceMappingURL=virtual_nuxt_D__Project_1205_maxearth_.nuxt_routes.mjs.map
