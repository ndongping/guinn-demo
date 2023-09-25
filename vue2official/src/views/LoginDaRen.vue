<template>
  <div class="login-mcn">
    <div class="logo">
      <img src="@/assets/icons/logo.png" alt="">
    </div>
    <div class="mcn-container">
      <div class="title-icon">
        <img src="@/assets/icons/hello.png" alt="">
      </div>
      <div class="title">
        欢迎登录达人合作平台
      </div>
      <div class="cy-form">
        <van-form @submit="onSubmit">
          <van-field v-model="form.companyName" label="小红书ID" placeholder="必填" />
          <van-field v-model="form.tel" label="电话：" placeholder="必填" type="tel" />
          <van-field v-model="form.email" label="邮箱：" placeholder="必填" />
          <div class="btn-view">
            <van-button class="btn" block type="default" native-type="submit">点击提交</van-button>
          </div>
        </van-form>
        <div class="privacy">
          <span class="txt" @click="handleGoPrivacy">授权条款</span>
          <div :class="['ratio', isAgree ? 'agree' : '']" @click="handleCkeckPrivacy"></div>
        </div>
      </div>
    </div>
    <van-popup v-model="show" :close-on-click-overlay="false">
      <div class="pup-content">
        <div class="pup-header">
          <div class="icon">
            <img src="@/assets/icons/agree.png" alt="">
          </div>
          <div class="title">
            感谢入驻！
          </div>
        </div>
        <div class="desc">我们将尽快核实您的信息</div>
        <div class="tips">
          <span>提示：</span>
          <span>回到个人中心完善更多信息 </span>
        </div>
        <van-button class="btn pop-btn" block type="default" @click="handleConfirm">确 认</van-button>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        xhsId: "",
        tel: "",
        email: "",
      },
      isAgree: false,
      show: false
    };
  },
  created() { },
  methods: {
    handleLogin() { },
    init() { },
    onSubmit() {
      this.show = true
    },
    handleCkeckPrivacy() {
      this.isAgree = !this.isAgree;
    },
    handleGoPrivacy() {
    },
    handleConfirm() {
      this.$router.replace({ path: '/personal' })
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
  background: linear-gradient(to bottom, #f7f7f7, #f5f6f4, #ebf3e4);

  .logo {
    width: 90px;
    margin-left: 21px;
  }

  .mcn-container {
    padding-top: 77px;

    .title-icon {
      width: 95px;
      margin-left: 40px;
    }

    .title {
      padding: 20px 0 24px 40px;
      font-size: 20px;
    }
  }

  .btn-view {
    padding-top: 38px;
  }

  .cy-form {
    padding: 0 40px;

    .van-cell {
      display: block;
      padding: 31px 0 9px;

      &.bor-bn {
        &::after {
          border-bottom: none;
        }
      }
    }
  }

  .file-view {
    display: flex;
    align-items: flex-end;

    .view-upload {
      width: 66px;
      height: 66px;

      .img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

    }

    .view-down {
      padding: 0 0 14px 24px;
      text-decoration: underline;
      font-size: 12px;
    }
  }

  .privacy {
    padding-top: 53px;
    display: flex;
    align-items: center;
    justify-content: center;

    .txt {
      font-size: 12px;
      letter-spacing: 1px;
    }

    .ratio {
      width: 14px;
      height: 14px;
      border: 1px solid #acacac;
      border-radius: 50%;
      margin-left: 10px;

      &.agree {
        background: $color-green;
      }
    }
  }
}
</style>
