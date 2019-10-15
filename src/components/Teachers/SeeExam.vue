<template>
  <div class="SeeExam">
    <el-container>
      <el-header class="top" style="height:80px;">
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
          <div class="ti">
            <div class="ti-1">
              <!-- 题目详情 -->
              <div class="ti1">

                <!-- 题目内容 -->
                <div class="ti1-center">
                <!-- 第几个题 -->
                  <div class="ti1-left">
                    <div style="font-weight:bold">1/10</div>
                  </div>
                  <div class="ti1-center-1">WXML与HTML完全一模一样，WXSS与CSS也是完全一模一样，没有做任何改变。这句话是（ ）的。</div>
                   <div style="clear:both;height:0;"></div>
                   
                  <div class="ti1-center-2">
                    <span>已选</span>
                    <span class="xuanxiangstyle"></span>
                    <span>选项</span>
                  </div>
                 
                <!-- 题目分数 -->
                  <div class="ti1-right">
                  <span class="rightScore">
                    <i class="display:inline-block">得分 : 加2分</i>
                  </span>
                </div>
                </div>
              </div>
              <!-- 选项 -->
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
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "SeeExam",
  data() {
    return {};
  },
  methods: {},
  created() {
    console.log("a");
  }
};
</script>
<style>
.SeeExam .top {
  background: black;
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
.top1-left .top1-left-1 {
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
.top3 .el-button {
  background: black;
  color: white;
  border: black;
  font-size: 30px;
}
.main {
  height: 500px;
  width: 60%;
  margin-left: 20%;
  /* background: wheat; */
}
.danxuan .h-cubiud {
  width: 4px;
  height: 20px;
  margin: 0 7px -4px 3px;
  padding-top: 8px;
  display: inline-block;
  background-color: #4ac0e0;
}
.danxuan .danxuan1 {
  font-size: 16px;
}
.danxuan1 i {
  font-size: 10px;
}
.main .ti {
  margin-top: 30px;
}
.ti-1 {
  margin-left: 2.5%;
  margin-top: 15px;
  height: 80%;
  width: 95%;
}
.ti .ti1 {
  /* background: chartreuse; */
  height: 23%;
  overflow: hidden;
}
.ti1-left {
  text-align: center;
  background: #f5f5f5;
  float: left;
  width: 8%;
}
.ti1-center {
  width: 81%;
  float: left;
  background: #f5f5f5;
  height: 100%;
  padding: 5px;
  box-sizing: border-box;
}
.ti1-center-1 {
  /* margin-left: 15px; */
  float: left;
  width: 90%;
}
.ti1-center-2 {
  margin-top: 10px;
  margin-left: 8%;
  width: 100%;
}
.xuanxiangstyle {
  text-align: center;
  line-height: 15px;
  margin-bottom: -3px;
  padding-left: 0px;
  width: 73px;
  display: inline-block;
  border-bottom: 1px solid black;
}
.ti1-right {
  height: 100%;
  width: 14%;
  float: left;
}
.rightScore {
  float: left;
  background: #fcd6cb;
  color: #ff7245;
  width: 100%;
  text-align: center;
  /* line-height: 90px; */
}

.ti2 {
  margin-left: 10%;
}
.ti2 .el-radio {
  margin-top: 10px;
}
.ti3 {
  width: 100%;
  background: #ebf9fc;
  margin-top: 20px;
  padding-top: 6px;
  padding-bottom: 6px;
  color: #4ac1e1;
}
.ti3-1 {
  margin-left: 10%;
}
</style>