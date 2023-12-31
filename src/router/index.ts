import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import Detail from "../views/Detail.vue";
import Folder from "../views/Folder.vue";
import List from "../views/List.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/folder",
  },
  {
    path: "/folder",
    name: "Folder",
    component: Folder,
  },
  {
    path: "/list/:category",
    name: "List",
    component: List,
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
