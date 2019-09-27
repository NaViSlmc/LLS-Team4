import Vue from 'vue';
import VueRouter from 'vue-router';

import Logined from '../components/common/Login.vue'

// ---------------------教师端----------------------
import Thome from '../components/Teachers/Home.vue'
import MyMajor from '../components/Teachers/MyMajor.vue' // 我教的专业
import MyTeachCourses from '../components/Teachers/MyTeachCourses.vue' // 我教的课程
import MyExamination from '../components/Teachers/MyExamination.vue' // 考试管理
import MyStudents from '../components/Teachers/MyStudents.vue' // 学员管理
import MyCourse from '../components/Teachers/MyCourse.vue' // 课程管理
import MyContribution from '../components/Teachers/MyContribution.vue' // 我的贡献
import MyData from '../components/Teachers/MyData.vue' // 个人资料

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
        path: 'MyMajor', // 我教的专业
        component: MyMajor,
        name: 'MyMajor',
      },
      {
        path: 'MyTeachCourses', // 我教的课程页面
        component: MyTeachCourses,
        name: 'MyTeachCourses',
      },
      {
        path: 'MyExamination', // 考试管理
        component: MyExamination,
        name: 'MyExamination',
      },
      {
        path: 'MyStudents', // 学员管理
        component: MyStudents,
        name: 'MyStudents',
      },
      {
        path: 'MyCourse', // 课程管理
        component: MyCourse,
        name: 'MyCourse',
      },
      {
        path: 'MyContribution', // 我的贡献
        component: MyContribution,
        name: 'MyContribution',
      },
      {
        path: 'MyData', // 个人资料
        component: MyData,
        name: 'MyData',
      },
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