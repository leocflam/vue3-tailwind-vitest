import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import InsuranceForm from "@/views/Insurance/InsuranceForm.vue";
import InsuranceSummary from "@/views/Insurance/InsuranceSummary.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/insurance/form",
    name: "InsuranceForm",
    component: InsuranceForm,
  },
  {
    path: "/insurance/summary",
    name: "InsuranceSummary",
    component: InsuranceSummary,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;