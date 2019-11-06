<template>
  <div class="Myjoin">
    <div class="Myjoin_box" style="background-color: rgb(238, 82, 108); background-image: linear-gradient(45deg, rgb(238, 82, 108) 0%, rgb(238, 82, 108) 1%, rgb(243, 106, 128) 100%);">
      <div class="Myjoin_wrap">
        <div class="Myjoin_msg" style="margin-left: 110px;">
          <span style="margin-top: 40px;">我的参与</span>
          <p>记录我在联想班学习的问答 反馈以及对相关系统功能等的评价 积极参与 主动贡献 养成习惯 成长为未来社会的栋梁</p>
        </div>
        <div class="Myjoin_bg3"></div>
      </div>
    </div>
    <el-col :span="24">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <!-- 我的问答 -->
        <el-tab-pane label="我的问答" name="first">
          <div class="Myjoin_center">
            <p>我的问答</p>
            <el-table ref="table" :data="questionsData">
              <el-table-column label="问题" width="200">
                <template slot-scope="scope">
                  <span>{{ scope.row.subject }}</span>
                </template>
              </el-table-column>

              <el-table-column label="问题描述" width="240">
                <template slot-scope="scope">
                  <span>{{ scope.row.question }}</span>
                </template>
              </el-table-column>

              <el-table-column label="提问类型" width="110" style="text-align:left">
                <template slot-scope="scope">
                  <span>{{ scope.row.typeName }}</span>
                </template>
              </el-table-column>

              <el-table-column label="发起时间" width="200">
                <template slot-scope="scope">
                  <span>{{ scope.row.explanationTime }}</span>
                </template>
              </el-table-column>

              <el-table-column label="状态" width="100">
                <template slot-scope="scope">
                  <el-tag type="success" v-if="scope.row.isSolution == 'Y'">已回复</el-tag>
                  <el-tag v-else type="warning">未回复</el-tag>
                </template>
              </el-table-column>
              <el-table-column label="操作" align="center" width="80">
                <template slot-scope="{row}">
                  <el-link type="primary" :underline="false" @click="getQuestionDetail(row.id)">
                    <i class="el-icon-tickets"></i>详情
                  </el-link>
                </template>
              </el-table-column>
            </el-table>

            <!-- <el-pagination background layout="prev, pager, next" :total="40"></el-pagination> -->
          </div>
        </el-tab-pane>

        <!-- 我的反馈 -->
        <el-tab-pane label="我的反馈" name="second">
          <div class="Myjoin_center">
            <div class="fankui">
              <p id="fktit">我的反馈</p>
              <el-button id="fkbtn" type="primary" @click="Mynew">新建反馈</el-button>
            </div>
            <!-- 我的反馈 -->
            <div class="Mycenter-table" v-show="isShow">
              <el-table ref="table" :data="feedbackData">
                <el-table-column label="意见" width="240">
                  <template slot-scope="scope">
                    <span>{{ scope.row.subject }}</span>
                  </template>
                </el-table-column>

                <el-table-column label="反馈类别" width="140">
                  <template slot-scope="scope">
                    <span>{{ scope.row.typeName }}</span>
                  </template>
                </el-table-column>

                <el-table-column label="问题说明" width="200" style="text-align:left">
                  <template slot-scope="scope">
                    <span>{{ scope.row.content }}</span>
                  </template>
                </el-table-column>

                <el-table-column label="发起时间" width="180">
                  <template slot-scope="scope">
                    <span>{{ scope.row.commitTime }}</span>
                  </template>
                </el-table-column>

                <el-table-column label="状态" width="100">
                  <template slot-scope="scope">
                    <el-tag type="success" v-if="scope.row.isHandle == 'Y'">已回复</el-tag>
                    <el-tag v-else type="warning">未回复</el-tag>
                  </template>
                </el-table-column>
              </el-table>

              <el-pagination @current-change="currentChange" :current-page="+page" :total="recordsTotal" :page-size="+pageSize" background layout="prev, pager, next">

              </el-pagination>

            </div>
            <!-- 新建反馈 -->
            <div class="Mycenter-new" v-show="!isShow">
              <el-form ref="form" :rules="rules" label-position="right" label-width="80px" :model="formLabelAlign">
                <el-form-item label="问题分类" prop="type">
                  <el-select v-model="formLabelAlign.type">
                    <el-option value="产品bug"></el-option>
                    <el-option value="功能建议"></el-option>
                    <el-option value="用户体验"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="意见" prop="name">
                  <el-input v-model="formLabelAlign.name" placeholder="请输入你的问题建议"></el-input>
                </el-form-item>
                <el-form-item label="问题说明" prop="desc">
                  <el-input type="textarea" :rows="4" v-model="formLabelAlign.desc"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">提交</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-col>
    <el-dialog v-if="detailData" class="dialog" title="解答详情" :visible.sync="dialogVisible" width="60%" :before-close="handleClose">
      <el-row :gutter="20">
        <el-col :span="20" :offset="2">问题：{{detailData.subject}}</el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="20" :offset="2">问题说明：{{detailData.question}}</el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="9" :offset="2">提问人：{{detailData.proposeStudentId}}</el-col>
        <el-col :span="9" :offset="2">提问时间：{{detailData.explanationTime}}</el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="20" :offset="2">问题标签：<el-tag>{{detailData.typeName}}</el-tag>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="20" :offset="2">答案详情：{{detailData.explanation}}</el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "MyJoin",
  data () {
    //组件用到的数据
    return {
      //我的问答
      apage: "1",
      apageSize: "4",
      activeName: "first",
      questionsData: null,
      feedbackData: null,
      // 我的反馈
      page: "1",
      pageSize: "7",
      dialogVisible: false, // dialog显示隐藏控制
      isShow: true, // 新建反馈切换
      recordsTotal: 0, // 总条目数
      detailData: null, // 查看详情数据
      // 表单
      formLabelAlign: {
        name: "",
        desc: "",
        type: "产品bug"
      },
      // 表单规则
      rules: {
        name: [
          { required: true, message: '请输入正确的意见', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请选择问题分类', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请输入问题说明', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    // 关闭详情页
    handleClose () {
      this.dialogVisible = false;
      this.detailData = null;
    },
    // 新建反馈分页
    currentChange (current) {
      this.page = current;
      this.handleClick();
    },
    // 新建反馈提交
    onSubmit () {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.$http.post('/business/opinionsSuggestions/submitComments', {
            content: this.formLabelAlign.desc,   //反馈问题说明
            subject: this.formLabelAlign.name,   //反馈意见
            typeName: this.formLabelAlign.type   //问题分类
          }).then(res => {
            if (res.data == '') {
              this.$message({
                type: 'success',
                message: '反馈提交成功'
              });
              // 切换到我的反馈页面
              this.Mynew();
              // 初始化新建反馈内容
              this.formLabelAlign = { name: '', region: '', type: '产品bug' };
              // 重新请求页面内容
              this.handleClick();
            } else {
              this.$message({
                type: 'warning',
                message: `${res.data.msg}`
              });
            }
          })
        }else {
          return false
        }
      });

    },
    // 新建反馈切换按钮
    Mynew () {
      if (this.isShow) {
        document.getElementById('fktit').textContent = '新建反馈'
        document.querySelector('#fkbtn span').textContent = '我的反馈'
      } else {
        document.getElementById('fktit').textContent = '我的反馈'
        document.querySelector('#fkbtn span').textContent = '新建反馈'
      }
      this.isShow = !this.isShow;
    },
    // 我的问答中的查看详情
    getQuestionDetail (id) {
      this.$http.get(`/business/studentQuestion/detail/${id}`).then(res => {
        this.detailData = res.data;
        this.dialogVisible = true;
      })

    },
    // 切换标签页
    handleClick () {
      if (this.activeName == "second") {
        // 我的反馈
        this.$http
          .post("/business/opinionsSuggestions/page", {
            page: this.page, //获取数据的第几页  页数
            pageSize: this.pageSize, //每页的数据条数
            params: {} //默认先传空值
          })
          .then(res => {
            this.feedbackData = res.data.data;
            this.recordsTotal = res.data.recordsTotal;
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
  created () {
    // 我的问题
    this.$http.get("/business/studentQuestion/listAll", {
        page: this.apage, //获取数据的第几页  页数
        pageSize: +this.apageSize, //每页的数据条数
        params: {} //默认先传空值
      }).then(res => {
        this.questionsData = res.data;
      });
  }
};
</script>
<style>
.Myjoin .el-pagination {
  margin-top: 10px;
}
.Myjoin .el-tabs__nav {
  margin-left: 15%;
}
.Myjoin .el-table td,
.el-table th.is-leaf {
  text-align: center;
}
.Myjoin .fankui {
  width: 100%;
  height: 50px;
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
.Myjoin .el-row {
  margin-bottom: 20px;
}
.Myjoin .el-col {
  padding: 10px;
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
.Myjoin_center {
  width: 80%;
  margin-left: 210px;
  /* background: cadetblue; */
  margin-top: 30px;
  min-height: 500px;
}
.Myjoin_center p {
  border-left: 4px solid #4abfe0;
  box-sizing: border-box;
  padding-left: 20px;
  width: 88%;
  height: 20px;
  line-height: 20px;
  font-size: 18px;
  color: #606060;
  float: left;
}
.Mycenter-new {
  margin-top: 10px;
  height: 400px;
}
.Mynew-1 {
  height: 50px;
  width: 100%;
}
.Myjoin .input1 {
  width: 70%;
}
</style>