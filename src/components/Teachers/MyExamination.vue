<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <div class="header-1">
        <div class="header-2">
          <p>考试管理</p>
          <span>贴合知识点 自动判卷 多维度统计</span>
        </div>
        <img src="../../images/01.png" alt="" class='img1'>
      </div>
    </div>
    <!-- 中间 -->
    <div class='container'>
        <el-tag>发布考试</el-tag>
        <el-tag>考试管理</el-tag>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyExamination",
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>
<style lang="">
.header {
  width: 100%;
  height: 144px;
  background-size: 38%;
  background: linear-gradient(60deg, #6cc4ce, #65f1ce);
}
.header-1 {
  width: 1280px;
  /* margin: 0 auto; */
  margin-left:200px;
  overflow: hidden;
}
.header-2 {
  width: 548px;
  float: left;
}
.header-2 p {
  font-size: 26px;
  color: #ffffff;
  font-weight: 400;
}
.header-2 span {
  display: inline-block;
  width: 500px;
  color: #ffffff;
  opacity: 0.9;
  font-weight: 300;
  font-size: 16px;
  line-height: 18px;
  margin-top: 3px;
}
.img1 {
  float: right;
}
.container{
  margin-left:50px;
  background: bisque;
  /* width:100%; */
  /* height:500px; */
}

</style>