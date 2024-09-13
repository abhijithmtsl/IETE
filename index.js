import Vue from 'vue';
import VueRouter from 'vue-router';
import AboutUs from '../components/AboutUs.vue';
import ContactUs from '../components/ContactUs.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/about', component: AboutUs },
  { path: '/contact', component: ContactUs },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
