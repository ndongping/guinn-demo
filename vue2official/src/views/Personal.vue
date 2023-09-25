<template>
  <div class="login-mcn">
    <div class="logo">
      <img src="@/assets/icons/logo.png" alt="">
    </div>
    <div class="mcn-container">
      <div class="upload-avator">
        <van-uploader :max-count="1" :max-size="500 * 1024" @oversize="onOversize" :after-read="afterRead">
          <template v-if="form.imgUrl != ''">
            <div class="preview-cover van-ellipsis">
              <img :src="form.imgUrl" alt="" />
            </div>
          </template>
          <div v-else>
            <img src="@/assets/icons/upload.png" alt="">
          </div>
        </van-uploader>
      </div>
      <div class="cy-form">
        <van-form @submit="onSubmit">
          <van-field v-model="form.nickName" label="达人昵称" placeholder="达人昵称" />
          <van-field v-model="form.mcnId" label="小红书ID" placeholder="小红书ID" />
          <van-field v-model="form.fansNum" label="粉丝数量" type="number" placeholder="粉丝数量" />
          <div class="btn-view">
            <van-button class="btn" block type="primary" native-type="submit">修改信息</van-button>
            <van-button class="btn" block type="default" @click="handleTask">去接单</van-button>
          </div>
        </van-form>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      form: {
        imgUrl: "",
        mcnId: "",
        fansNum: "",
        nickName: "",
      }
    };
  },
  created() { },
  methods: {
    handleLogin() { },
    init() { },
    onOversize(file) {
      console.log(file);
      Toast("文件大小不能超过 500kb");
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      this.form.imgUrl = file.content;
    },
    onSubmit() {
      if (this.form.imgUrl == '') return Toast('请输上传头像');
      if (this.form.nickName == '') return Toast('请输入昵称');
      if (this.form.mcnId == '') return Toast('请输入小红书ID');
      if (this.form.fansNum == '') return Toast('请输入粉丝数量');
    },
    handleTask() {
      this.$router.push({
        path: '/agency'
      })
    }
  },
};
</script>

<style lang="scss" scoped>
$pad: 100px;

.login-mcn {
  width: 100vw;
  min-height: 100vh;
  padding-top: 18px;
  padding-bottom: 100px;
  background: linear-gradient(to bottom, #f7f7f7, #f3f6f1);

  .logo {
    width: 90px;
    margin-left: 21px;
  }

  .mcn-container {
    padding-top: 44px;

    .upload-avator {
      width: 76px;
      height: 76px;
      margin: 0 auto;
      border-radius: 50%;
      overflow: hidden;
      margin-bottom: 14px;
    }
  }

  .btn-view {
    padding-top: 38px;
  }

  .cy-form {

    .van-cell {

      .van-field__label {
        span {
          font-weight: bold;
        }

      }
    }

  }
}
</style>
