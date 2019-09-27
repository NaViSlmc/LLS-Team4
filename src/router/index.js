import Vue from 'vue';
import VueRouter from 'vue-router';

import Logined from '../components/common/Login.vue'

// ---------------------教师端----------------------
import Thome from '../components/Teachers/Home.vue'
import MyMajor from '../components/Teachers/MyMajor.vue'

// ---------------------学生端----------------------
import Shome from '../components/Students/Home.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/logined'
  },
  {
    path: '/logined',
    component: Logined
  },
  {
    path: '/teacher', // 教师端主页面
    component: Thome,
    children: [
      {
        path: 'MyMajor',
        component: MyMajor,
        name: 'MyMajor',
      }
    ]
  },
  {
    path: '/student', // 学生端主页面
    component: Shome
  }
];

const router = new VueRouter({
  routes
});

export default router;