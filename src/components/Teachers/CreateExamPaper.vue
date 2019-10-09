<template>
  <div class="CreateExamPaper">
    <div class="HeadMasterTitle_box" style="background-color: rgb(238, 82, 108); background-image: linear-gradient(45deg, rgb(238, 82, 108) 0%, rgb(238, 82, 108) 1%, rgb(243, 106, 128) 100%);">
      <div class="HeadMasterTitle_wrap">
        <div class="HeadMasterTitle_msg" style="margin-left: 110px;"><span style="margin-top: 40px;">创建试卷</span>
          <p>在测验中分析 在测验中总结 在测验中成长</p>
        </div>
        <div class="HeadMasterTitle_bg3"></div>
      </div>
    </div>
    <div class="basic_data">
      <p class="basic_data_tit">创建试卷</p>
      <!-- 第一行 -->
      <el-row>
        <el-col :span="2">试卷名称</el-col>
        <el-col :span="4">
          <el-input placeholder="请输入试卷名称"></el-input>
        </el-col>
        <el-col :span="4" :offset="14">
          <el-button type="primary">保存试卷</el-button>
        </el-col>
      </el-row>
      <!-- 第二行 -->
      <el-row>
        <el-col :span="2">试卷类型</el-col>
        <el-col :span="4">
          <el-select v-model="value" clearable placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CreateExamPaper',
  data () {
    return {

    }
  },
  methods: {

  },
  created () {

  }
}
</script>
<style>
.CreateExamPaper .el-col {
  line-height: 40px;
  text-align: left;
  margin-top: 10px;
}
.basic_data {
  width: 1200px;
  margin: 0 auto;
}
.basic_data_tit {
  border-left: 4px solid #4abfe0;
  box-sizing: border-box;
  padding-left: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 18px;
  color: #606060;
}
.HeadMasterTitle_box {
  height: 144px;
}
.HeadMasterTitle_box .HeadMasterTitle_wrap {
  width: 1280px;
  margin: 0 auto;
}
.HeadMasterTitle_box .HeadMasterTitle_msg {
  float: left;
  margin-left: 147px;
}
.HeadMasterTitle_box .HeadMasterTitle_msg span {
  /* width: 110px; */
  height: 26px;
  color: #ffffff;
  font-size: 26px;
  font-weight: 400;
  line-height: 24px;
  display: block;
  margin-top: 50px;
}
.HeadMasterTitle_box .HeadMasterTitle_msg p {
  width: 465px;
  height: 18px;
  opacity: 0.79;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  margin-top: 8px;
  white-space: pre-wrap;
}
.HeadMasterTitle_box .HeadMasterTitle_bg3 {
  background: url(../../images/my_participate.png) no-repeat center top;
  float: right;
  width: 455px;
  height: 144px;
  background-size: 485px 144px;
}
</style>