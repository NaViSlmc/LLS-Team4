<template>
  <div>
    <div class="HeadMasterTitle_box" style="background-color: rgb(238, 82, 108); background-image: linear-gradient(45deg, rgb(238, 82, 108) 0%, rgb(238, 82, 108) 1%, rgb(243, 106, 128) 100%);">
      <div class="HeadMasterTitle_wrap">
        <div class="HeadMasterTitle_msg" style="margin-left: 110px;"><span style="margin-top: 40px;">发布考试</span>
          <p>在测验中分析 在测验中总结 在测验中成长</p>
        </div>
        <div class="HeadMasterTitle_bg3"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CreateExam',
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