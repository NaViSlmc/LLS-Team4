<template>
  <div id="navMenus">
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <img src="../../images/lenovo.png" alt="">
        </div>
      </el-col>
      <el-col :span="14">
        <div class="grid-content bg-purple">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="MyMajor">我教的专业</el-menu-item>
            <el-submenu index="MyTeachCourses">
              <template slot="title">我教的课程</template>
              <el-menu-item index="MyTeachCourses">课程1</el-menu-item>
              <el-menu-item index="MyTeachCourses">课程2</el-menu-item>
            </el-submenu>
            <el-menu-item index="MyExamination">考试管理</el-menu-item>
            <el-menu-item index="MyStudents">学员管理</el-menu-item>
            <el-menu-item index="MyCourse">课程管理</el-menu-item>
            <el-menu-item index="MyContribution">我的贡献</el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <span class="ask_title1" @click="toggUserData">
            {{ userName }}
          </span>
          <div class="ask_title2">
            在线解答
          </div>
          <span class="ask_title3" @click="userOut">
            退出
          </span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'navMenus',
  data () {
    return {
      activeIndex: 'MyMajor',// 当前选择导航栏
      userName: '' // 用户名
    }
  },
  methods: {
    // 用户详情页跳转
    toggUserData () {
      if ('/teacher/MyData' !== this.$router.history.current.fullPath) {
        this.activeIndex = '';
        this.$router.push('/teacher/MyData');
      }
    },
    // 导航栏切换
    handleSelect (key) {
      this.activeIndex = key;
      // 当前要跳转的path不能等于当前path，否则会路由报错
      if (`/teacher/${key}` !== this.$router.history.current.fullPath) {
        this.$router.push(`/teacher/${key}`);
      }
    },
    // 用户退出
    userOut () {
      try {
        this.$http.get('/permit/logout').then((response) => {
          if (response.data === '') {
            this.$message({
              message: `${this.userName} 退出成功`,
              type: 'success'
            });
            // 清空localStorage
            window.localStorage.removeItem('userId');
            window.localStorage.removeItem('userName');
            this.$router.push('/');
          } else if (response.data.code === 403) {
            this.$message({
              message: '超时未操作,请重新登录',
              type: 'warning'
            });
            window.localStorage.removeItem('userId');
            window.localStorage.removeItem('userName');
            this.$router.push('/');
          } else {
            this.$message.error('退出失败')
          }
        })
      } catch (err) {
        this.$message.error('请检查您的网络')
      }
    }
  },
  created () {
    this.userName = window.localStorage.getItem('userName'); // 从本地仓库拿到用户名
    this.activeIndex = this.$route.name?this.$route.name:'MyMajor';
  }
}
</script>
<style>
a {
  color: #6c6868;
  font-size: 12px;
}
.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
  padding-left: 0 !important;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.grid-content img {
  height: 46px;
  display: block;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.loginUser {
  overflow: hidden;
}
.loginUser li {
  float: left;
  margin-left: 20px;
}
.logoutSvg {
  opacity: 0.1;
}
.ask_title2 {
  width: 70px;
  height: 46px;
  line-height: 46px;
  text-align: center;
  cursor: pointer;
  color: rgb(163, 163, 164);
  position: relative;
  transition: 0.2s linear;
  display: inline-block;
  font-size: 14px;
}
.ask_title2:after {
  width: 70px;
  cursor: pointer;
  position: absolute;
  content: "";
  top: 50%;
  bottom: 50%;
  right: 0;
  left: 0;
  z-index: -1;
  background: rgb(133, 188, 243);
  transition: 0.2s linear;
  border-radius: 4px;
}
.ask_title2:hover {
  color: #ffffff;
}
.ask_title2:hover:after {
  top: 0;
  bottom: 0;
}
.ask_title1 {
  width: 70px;
  height: 46px;
  line-height: 46px;
  text-align: center;
  cursor: pointer;
  color: rgb(163, 163, 164);
  position: relative;
  transition: 0.2s linear;
  display: inline-block;
  font-size: 14px;
}
.ask_title1:after {
  width: 0px;
  cursor: pointer;
  position: absolute;
  content: "";
  top: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background: #409EFF;
  transition: 0.2s linear;
  border-radius: 4px;
}
.ask_title1:hover {
  color: #ffffff;
}
.ask_title1:hover:after {
  width: 70px;
}
.ask_title3 {
  width: 50px;
  height: 46px;
  line-height: 46px;
  text-align: center;
  cursor: pointer;
  color: rgb(163, 163, 164);
  position: relative;
  transition: 0.2s linear;
  display: inline-block;
  font-size: 14px;
}
.ask_title3:after {
  width: 0px;
  cursor: pointer;
  position: absolute;
  content: "";
  top: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  background: rgb(165, 208, 250);
  transition: 0.2s linear;
  border-radius: 4px;
}
.ask_title3:hover {
  color: #ffffff;
}
.ask_title3:hover:after {
  width: 50px;
}
#navMenus .el-badge__content.is-fixed {
  top: 11px;
  line-height: 13px;
  padding: 0px 3px;
  height: 13px;
}
</style>