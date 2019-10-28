<template>
  <div class="Myjoin">
    <div
      class="Myjoin_box"
      style="background-color: rgb(238, 82, 108); background-image: linear-gradient(45deg, rgb(238, 82, 108) 0%, rgb(238, 82, 108) 1%, rgb(243, 106, 128) 100%);"
    >
      <div class="Myjoin_wrap">
        <div class="Myjoin_msg" style="margin-left: 110px;">
          <span style="margin-top: 40px;">我的参与</span>
          <p>记录我在联想班学习的问答 反馈以及对相关系统功能等的评价 积极参与 主动贡献 养成习惯 成长为未来社会的栋梁</p>
        </div>
        <div class="Myjoin_bg3"></div>
      </div>
    </div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <!-- 我的问答 -->
      <el-tab-pane label="我的问答" name="first">
        <div class="Myjoin_center">
          <p>我的问答</p>
          <el-table ref="table" :data="questionsData">
            <el-table-column label="问题" width="250">
              <template slot-scope="scope">
                <span>{{ scope.row.subject }}</span>
              </template>
            </el-table-column>

            <el-table-column label="问题描述" width="370">
              <template slot-scope="scope">
                <span>{{ scope.row.question }}</span>
              </template>
            </el-table-column>

            <el-table-column label="提问类型" width="110" style="text-align:left">
              <template slot-scope="scope">
                <span>{{ scope.row.typeName }}</span>
              </template>
            </el-table-column>

            <el-table-column label="发起时间" width="240">
              <template slot-scope="scope">
                <span>{{ scope.row.explanationTime }}</span>
              </template>
            </el-table-column>

            <el-table-column label="状态" width="130">
              <template slot-scope="scope">
                <el-tag type="success" v-if="scope.row.isSolution == 'Y'">已回复</el-tag>
                <el-tag v-else type="warning">未回复</el-tag>
              </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
              <template slot-scope="{row}">
                <el-link type="primary" :underline="false" @click="getQuestionDetail(row.id)">
                  <i class="el-icon-tickets"></i>详情
                </el-link>
                <el-col :span="24">
                <el-dialog
                  class="dialog"
                  title="解答详情"
                  :visible.sync="dialogVisible"
                  width="60%"
                  :before-close="handleClose"
                >
                  问题：<span>1</span>
                </el-dialog>
                </el-col>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination background layout="prev, pager, next" :total="40"></el-pagination>
        </div>
      </el-tab-pane>

      <!-- 我的反馈 -->
      <el-tab-pane label="我的反馈" name="second">
        <div class="Myjoin_center">
          <p>我的反馈</p>
          <el-table ref="table" :data="feedbackData">
            <el-table-column label="意见" width="250">
              <template slot-scope="scope">
                <span>{{ scope.row.subject }}</span>
              </template>
            </el-table-column>

            <el-table-column label="反馈类别" width="140">
              <template slot-scope="scope">
                <span>{{ scope.row.typeName }}</span>
              </template>
            </el-table-column>

            <el-table-column label="问题说明" width="400" style="text-align:left">
              <template slot-scope="scope">
                <span>{{ scope.row.content }}</span>
              </template>
            </el-table-column>

            <el-table-column label="发起时间" width="180">
              <template slot-scope="scope">
                <span>{{ scope.row.handleTime }}</span>
              </template>
            </el-table-column>

            <el-table-column label="状态" width="240">
              <template slot-scope="scope">
                <el-tag type="success" v-if="scope.row.isHandle == 'Y'">已回复</el-tag>
                <el-tag v-else type="warning">未回复</el-tag>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination background layout="prev, pager, next" :total="40"></el-pagination>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "MyJoin",
  data() {
    //组件用到的数据
    return {
      //我的问题
      apage: "1",
      apageSize: "4",
      activeName: "first",
      questionsData: null,
      feedbackData: null,
      // 我的反馈
      page: "1",
      pageSize: "4",
      dialogVisible:false
    };
  },
  methods: {
    handleClose() {
      this.dialogVisible = false
    },
    // 我的问答中的查看详情
    getQuestionDetail(id) {
      console.log(id);
      this.dialogVisible = true
    },
    //当前组件用到的函数
    handleClick(tab) {
      if (tab.name == "second") {
        // 我的反馈
        this.$http
          .post("/business/opinionsSuggestions/page", {
            page: this.page, //获取数据的第几页  页数
            pageSize: this.pageSize, //每页的数据条数
            params: {} //默认先传空值
          })
          .then(res => {
            this.feedbackData = res.data.data;
          });
      } else {
        this.$http
          .get("/business/studentQuestion/listAll", {
            page: this.apage, //获取数据的第几页  页数
            pageSize: +this.apageSize, //每页的数据条数
            params: {} //默认先传空值
          })
          .then(res => {
            this.questionsData = res.data;
          });
      }
    }
  },
  created() {
    //组件加载完成后的生命周期回调,如果页面一加载就需要展示数据，那么数据在这获取
    // 我的问题
    this.$http
      .get("/business/studentQuestion/listAll", {
        page: this.apage, //获取数据的第几页  页数
        pageSize: +this.apageSize, //每页的数据条数
        params: {} //默认先传空值
      })
      .then(res => {
        this.questionsData = res.data;
      });
  }
};
</script>
<style>
.Myjoin .el-table td,
.el-table th.is-leaf {
  text-align: center;
}
.Myjoin_box {
  height: 144px;
}

.Myjoin_box .Myjoin_wrap {
  width: 1280px;
  margin: 0 auto;
}

.Myjoin_box .Myjoin_msg {
  float: left;
  margin-left: 147px;
}

.Myjoin_box .Myjoin_msg span {
  /* width: 110px; */
  height: 26px;
  color: #ffffff;
  font-size: 26px;
  font-weight: 400;
  line-height: 24px;
  display: block;
  margin-top: 50px;
}

.Myjoin_box .Myjoin_msg p {
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

.Myjoin_box .Myjoin_bg3 {
  background: url("../../images/my_participate.png") no-repeat center top;
  float: right;
  width: 455px;
  height: 144px;
  background-size: 485px 144px;
}
.Myjoin .el-tabs__nav-scroll {
  margin-left: 15%;
}
.Myjoin_center {
  width: 80%;
  margin-left: 210px;
  /* background: cadetblue; */
  margin-top: 30px;
}
.Myjoin_center p {
  border-left: 4px solid #4abfe0;
  box-sizing: border-box;
  padding-left: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 18px;
  color: #606060;
}
</style>