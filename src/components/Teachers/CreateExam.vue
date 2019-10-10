<template>
  <div class="CreateExam">
    <div
      class="HeadMasterTitle_box"
      style="background-color: rgb(238, 82, 108); background-image: linear-gradient(45deg, rgb(238, 82, 108) 0%, rgb(238, 82, 108) 1%, rgb(243, 106, 128) 100%);"
    >
      <div class="HeadMasterTitle_wrap">
        <div class="HeadMasterTitle_msg" style="margin-left: 110px;">
          <span style="margin-top: 40px;">发布考试</span>
          <p>在测验中分析 在测验中总结 在测验中成长</p>
        </div>
        <div class="HeadMasterTitle_bg3"></div>
      </div>
    </div>
    <div class="basic_data">
      <p class="basic_data_tit">发布考试</p>
      <!-- 第一行 -->
      <el-row>
        <el-col :span="2">考试名称</el-col>
        <el-col :span="4">
          <el-input placeholder="请输入考试名称"></el-input>
        </el-col>
      </el-row>

      <!-- 第二行 -->
      <el-row>
        <!-- 选择班级 -->
        <el-col :span="2">选择班级</el-col>
        <el-col :span="4">
          <el-select v-model="value" clearable placeholder="请选择考试班级">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
      </el-row>

      <!-- 第三行 -->
      <el-row>
        <!-- 考试时长 -->
        <el-col :span="2">考试时长</el-col>
        <el-col :span="1">
          <el-input>0</el-input>
        </el-col>
        <el-col :span="1" style="margin-left:5px;">
          <el-tag type="success">分钟</el-tag>
        </el-col>
      </el-row>

      <!-- 第四行 -->
      <el-row>
        <!-- 开始时间 -->
        <el-col :span="2">
          <span class="demonstration">开始时间</span>
        </el-col>
        <el-col :span="3">
          <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间"></el-date-picker>
        </el-col>
      </el-row>

      <!-- 第五行 -->
      <el-row>
        <!-- 考试类型 -->
        <el-col :span="2">考试类型</el-col>
        <el-col :span="10">
          <el-radio v-model="radio" label="1">每日一练</el-radio>
          <el-radio v-model="radio" label="2">每周一测</el-radio>
          <el-radio v-model="radio" label="3">每月一考</el-radio>
          <el-radio v-model="radio" label="4">期末考试</el-radio>
        </el-col>
      </el-row>

      <el-row>
        <el-col>
          <el-button type="primary">请选择您要关联的试卷</el-button>
        </el-col>
      </el-row>

      <el-table ref="multipleTable" tooltip-effect="dark" style="width: 100%" :data="data1">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="试卷" width="300" prop="name"></el-table-column>
        <el-table-column prop="typeName" label="专业分类" width="120"></el-table-column>
        <el-table-column prop="remark" label="备注信息" width="425"></el-table-column>
        <el-table-column prop="createTime" label="创建时间" width="300"></el-table-column>
      </el-table>

      <el-row>
        <el-col>
          <el-button type="primary" plain>创建考试</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "CreateExam",
  data() {
    return {
      radio: "1",
      // 时间
      pickerOptions: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value1: "",
      page:'1',//页数
      pageSize:'4', //每页显示数量
      data1:'', //表格内容
      userId:'',
      label:null,
      value:''
    };
  },
  methods: {
    },
  created() {
    this.userId = window.localStorage.getItem('userId')
    var app = this;
      // 获取试卷集合
      this.$http
        .post("/exam/examPage/page", {
          page: this.page, //  当前页
          pageSize: this.pageSize, //每一页显示条数
          params: {
            typeId: null //typeId 试卷类型id 默认传nulll 获取所有的
          }
        })
        .then(function(res) {
          app.data1 = res.data.data;
        });

        // 获取考试类型
      this.$http.get('/business/examType/listAll',{

      }).then(function(res){
          
        // console.log(res)
      });
      
      // 获取老师带过的班级
      this.$http.get('/business/organClassUser/currentClassListByTeacherId/'+app.userId,{
          
      }).then(function(res){
        app.label = res.data
        console.log(res.data)
      });
  }
};
</script>
<style>
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
.CreateExam .el-col {
  line-height: 40px;
  text-align: left;
  margin-top: 10px;
}
</style>