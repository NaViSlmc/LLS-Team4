import Vue from 'vue';
import VueRouter from 'vue-router';

import Logined from '../components/common/Login.vue'

// ---------------------教师端----------------------
import Thome from '../components/Teachers/Home.vue'
import MyMajor from '../components/Teachers/MyMajor.vue'

// ---------------------学生端----------------------
import Shome from '../components/Students/Home.vue'
import MyMajorStudent from '../components/Students/MyMajorStudent.vue' //我的专业
import MyGrow from '../components/Students/MyGrow.vue'  // 我的成长
import MyJoin from '../components/Students/MyJoin.vue'// 我的参加
import MyExam from '../components/Students/MyExam.vue'// 我的考试
import MyData from '../components/Students/MyData.vue'// 个人资料
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
    component: Shome,
    children:[
      {
        // 我的专业
        path: 'MyMajorStudent', //匹配路径
        component: MyMajorStudent,//组件
        name: 'MyMajorStudent',//名字
      },
      {
        // 我的成长
        path: 'MyGrow', 
        component: MyGrow,
        name: 'MyGrow',
      },
      {
        // 我的参加
        path: 'MyJoin', 
        component: MyJoin,
        name: 'MyJoin',
      },
      {
        // 我的考试
        path: 'MyExam', 
        component: MyExam,
        name: 'MyExam',
      },
      {
        // 个人资料
        path: 'MyData', 
        component: MyData,
        name: 'MyData',
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;