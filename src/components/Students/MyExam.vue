<template>
  <div class="MyExam">
    <!-- 头部我的考试 -->
    <div class="MyExam_box">
      <div class="MyExam_wrap">
        <div class="MyExam_msg" style="margin-left: 110px;">
          <span style="margin-top: 40px;">我的考试</span>
          <p style="color:#ffffff">记录我在联想班的考试成绩以及学校的考试成绩各个方面的表现与进步积极向上 努力进取 养成习惯 成长为未来社会栋梁</p>
        </div>
        <div class="HeadMasterTitle_bg3"></div>
      </div>
    </div>

    <!-- 标题 -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">
        每日一练
        <i class="el-icon-edit"></i>
      </el-menu-item>
      <el-menu-item index="2">
        每周一测
        <i class="el-icon-data-line"></i>
      </el-menu-item>
      <el-menu-item index="3">
        每月一考
        <i class="el-icon-collection"></i>
      </el-menu-item>
      <el-menu-item index="4">
        期末测试
        <i class="el-icon-star-off"></i>
      </el-menu-item>
    </el-menu>

    <div class="Exam_center">
      <p>基本资料</p>
      <el-table style="width: 100%" ref="table" :data="data1">
        <el-table-column label="班级姓名" width="210">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.className }}</span>
          </template>
        </el-table-column>

        <el-table-column label="考试名称" width="210">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>

        <el-table-column label="开考时间" width="210">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.createTime }}</span>
          </template>
        </el-table-column>

        <el-table-column label="考试时长" width="210">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.duration }}</span>
          </template>
        </el-table-column>

        <el-table-column label="结束时间" width="210">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.endTime }}</span>
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">缺考</el-button>
          </template>
        </el-table-column>
      </el-table>
<el-pagination
  background
  layout="prev, pager, next"
  :total="3">
</el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyExam",
  data() {
    //组件用到的数据
    return {
      activeIndex: "1",
      page: "1",
      pageSize: "4",
      typeId: "1",
      data1: null
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick(row) {
      console.log(row);
    }
  },
  created() {
    var app = this;
    this.$http
      .post("/business/examPlan/studentPage", {
        page: +this.page, //页数
        pageSize: this.pageSize, //每页显示条数
        params: {
          typeId: +this.typeId //考试类型id
        }
      })
      .then(function(res) {
        console.log(res.data.data);
        app.data1 = res.data.data;
      });
  }
};
</script>
<style>
.MyExam_box {
  height: 144px;
  background: linear-gradient(60deg, #6cc4ce, #65f1ce);
}
.MyExam_box .MyExam_wrap {
  width: 1280px;
  margin: 0 auto;
}
.MyExam_box .MyExam_msg {
  float: left;
  margin-left: 147px;
}
.MyExam_box .MyExam_msg span {
  /* width: 110px; */
  height: 26px;
  color: #ffffff;
  font-size: 26px;
  font-weight: 400;
  line-height: 24px;
  display: block;
  margin-top: 50px;
}
.MyExam_box .HeadMasterTitle_msg p {
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
.MyExam .el-menu-demo {
  background: #f2f5f7;
}
.MyExam .el-menu-item {
  color: #999;
}
.MyExam .el-menu-item:nth-child(1) {
  margin-left: 250px;
}
.MyExam_box .HeadMasterTitle_bg3 {
  background: url(../../images/myExam.png) no-repeat center top;
  float: right;
  width: 300px;
  height: 144px;
}
.Exam_center {
  width: 80%;
  margin-left: 210px;
  /* background: cadetblue; */
  margin-top: 30px;
}
.Exam_center p {
  border-left: 4px solid #4abfe0;
  box-sizing: border-box;
  padding-left: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 18px;
  color: #606060;
}
</style>