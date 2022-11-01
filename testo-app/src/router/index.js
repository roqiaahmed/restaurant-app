import { createRouter, createWebHistory } from "vue-router";
import SignView from "../views/SignView.vue";
import Home from "../views/HomeView.vue";
import signIn from "../components/signIn.vue";
import Add from "../components/Add.vue";
import Update from "../components/Update.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Add",
    name: "Add",
    component: Add,
  },
  {
    path: "/Update/:id",
    name: "Update",
    component: Update,
  },
  {
    path: "/SignView",
    name: "SignView",
    component: SignView,
  },
  {
    path: "/signIn",
    name: "signIn",
    component: signIn,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
