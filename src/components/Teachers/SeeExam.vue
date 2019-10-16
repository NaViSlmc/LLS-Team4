<template>
  <div class="SeeExam">
    <el-container>
      <el-header class="top">
        <!-- 基本资料 -->
        <div class="top1">
          <!-- 头部左边 -->
          <div class="top1-left">
            <div class="top1-left-1">
              <i class="el-icon-user-solid"></i>
              姓名
            </div>
            <div class="top1-left-2">试卷名称</div>
          </div>
          <!-- 头部中间 -->
          <div class="top1-center">开启时间：2019-07-01 13:45</div>
          <!-- 头部右边 -->
          <div class="top1-right">已完成23/23</div>
        </div>
        <!-- 分数 -->
        <div class="top2">
          <b>成绩100分</b>
        </div>
        <!-- 退出 -->
        <div class="top3">
          <el-button>x</el-button>
        </div>
      </el-header>
      <el-main>
        <div class="main">
          <div class="danxuan">
            <span class="h-cubiud"></span>
            <span class="danxuan1">
              <b>一、</b>
              单选题
              <i>(20分，每题2分)</i>
            </span>
          </div>

          <!-- 题 -->
          <div>
            <div class="dx_item">
              <div class="dx_l">
                <div class="dx_l_l">
                  <i class="el-icon-check" style="color:#4ac0e0;font-weight:bold;font-size:20px;"></i>
                  <span style="font-weight:bold;">
                    <span style="font-size:20px">01</span>/10
                  </span>
                </div>
                <div class="dx_l_r">
                  <div
                    class="r_top"
                  >（ ）可理解为依附在微信上的app，它的优点是应用无处不在，随时可用，又无需安装和卸载。而（ ）偏重为用户传递资讯，类似报纸杂志。</div>
                  <div class="r_bottom">已选
                    <span class='xuanxiangStyle'></span>
                    选项</div>
                </div>
              </div>
              <div class="dx_r">
                <i>得分 : 加2分</i>
              </div>
            </div>
            <div class="ti2">
              <el-row>
                <el-radio v-model="radio" label="1">A &nbsp; &nbsp;正确</el-radio>
              </el-row>
              <el-row>
                <el-radio v-model="radio" label="2">B &nbsp; &nbsp;错误</el-radio>
              </el-row>
              
            </div>
            <!-- 正确答案 -->
            <div class="ti3">
              <span class="ti3-1">
                正确答案：
                <span>A</span>
              </span>
            </div>
          </div>
          
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "SeeExam",
  data () {
    return {

    };
  },
  methods: {

  },
  created () {
    console.log(this.$route.params)
  }
};
</script>
<style>
.SeeExam .dx_r i {
  font-style:normal;
  display: inline-block;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  color: #ff7245;
}
.SeeExam .dx_item {
  overflow: hidden;
  position: relative;
  margin-top: 5px;
  background: #f5f5f5;
  padding: 5px;
  box-sizing: border-box;
}
.SeeExam .dx_r {
  width: 15%;
  height: 100%;
  float: left;
  position: absolute;
  top: 0;
  right: 0;
  text-align: center;
  vertical-align: middle;
  background: #fcd6cb;
}
.SeeExam .dx_l {
  overflow: hidden;
  width: 85%;
  float: left;
}
.SeeExam .dx_l_r {
  float: left;
  width: 90%;
  box-sizing: border-box;
  line-height: 28px;
}
.SeeExam .dx_l_l {
  float: left;
  width: 10%;
}
.SeeExam .top {
  background: black;
  height: 80px !important;
}
.SeeExam .top1 {
  width: 55%;
  height: 100%;
  margin-left: 250px;
  float: left;
}
.SeeExam .top1-left {
  height: 100%;
  width: 40%;
  font-size: 17px;
  float: left;
  color: #989898;
}
.SeeExam .top1-left .top1-left-1 {
  margin-top: 10px;
}
.SeeExam .top1-center {
  height: 100%;
  width: 30%;
  float: left;
  line-height: 80px;
  text-align: center;
  color: #989898;
}
.SeeExam .top1-right {
  height: 100%;
  width: 29%;
  float: right;
  line-height: 80px;
  text-align: right;
  color: #989898;
  margin-right: 2px;
}

.SeeExam .top2 {
  height: 100%;
  width: 10%;
  background: red;
  float: left;
  color: white;
  font-size: 22px;
  line-height: 80px;
  text-align: center;
}
.SeeExam .top3 {
  height: 100%;
  width: 10%;
  float: left;
  margin: 0 0 auto;
  line-height: 80px;
}
.SeeExam .top3 .el-button {
  background: black;
  color: white;
  border: black;
  font-size: 30px;
}
.SeeExam .main {
  height: 500px;
  width: 60%;
  margin-left: 20%;
  /* background: wheat; */
}
.SeeExam .danxuan .h-cubiud {
  width: 4px;
  height: 20px;
  margin: 0 7px -4px 3px;
  padding-top: 8px;
  display: inline-block;
  background-color: #4ac0e0;
}
.SeeExam .danxuan .danxuan1 {
  font-size: 16px;
}
.SeeExam .danxuan1 i {
  font-size: 10px;
}
</style>