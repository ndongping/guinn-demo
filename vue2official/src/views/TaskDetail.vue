<template>
  <div class="task-detail">
    <div class="task-banner">
      <div class="banner-header">眼线笔试用招募中</div>
      <div class="banner-body">
        <div class="time">截止日期2023-12-01</div>
        <div class="task-ul">
          <div class="task-li">
            <span class="title">博主类型:</span>
            <span class="tag">种草</span>
          </div>
          <div class="task-li">
            <span class="title">图文/视频：</span>
            <span class="desc">图文</span>
          </div>
          <div class="task-li">
            <span class="title">单品/合集：</span>
            <span class="desc">单品</span>
          </div>
          <div class="task-li">
            <span class="title">报名人数：</span>
            <span class="desc">88人</span>
            <span class="desc__gray">名额100人</span>
          </div>
          <div class="task-li">
            <span class="title">品牌名称：</span>
            <span class="desc">暂不公开</span>
          </div>
          <div class="task-li">
            <span class="title">粉丝要求：</span>
            <span class="desc">1k-3w</span>
          </div>
          <div class="task-li">
            <span class="title">稿费：</span>
            <span class="desc">800~1k</span>
          </div>
          <div class="task-li">
            <span class="title">国家名：</span>
            <span class="desc">中国大陆</span>
          </div>
        </div>
      </div>
    </div>
    <div class="detail-msg">
      <div class="msg-header">通告详情</div>
      <div class="msg-ul">
        <div class="task-li">
          <span class="title">通告明细：</span>
          <span class="desc">KISSME眼线笔-小红书</span>
        </div>
        <div class="task-li">
          <span class="title">达人预算：</span>
          <span class="desc">0-2k</span>
        </div>
        <div class="task-li">
          <span class="title">达人粉丝量级：</span>
          <span class="desc">1k-3w</span>
        </div>
        <div class="task-li">
          <span class="title">达人类型：</span>
          <span class="desc">美妆、妆教、好物分享、VLOG、时尚穿搭、颜值、COS等</span>
        </div>
        <div class="task-li">
          <span class="title">合作档期：</span>
          <span class="desc">10月</span>
        </div>
      </div>
      <div class="banner">
        <img class="img" src="@/assets/images/gg.png" alt="">
      </div>
    </div>
    <div class="detail-footer">
      <van-button class="btn" block type="default" @click="handleSunmit">报名参加</van-button>
    </div>
    <van-popup v-model="show" :close-on-click-overlay="false">
      <div class="pup-content">
        <div class="pup-header">
          <div class="icon">
            <img src="@/assets/icons/agree.png" alt="">
          </div>
          <div class="title">
            报名成功
          </div>
        </div>
        <div class="desc">我们将尽快核实您的信息</div>
        <van-button class="btn pop-btn" block type="default" @click="handleConfirm">确  认</van-button>
      </div>
    </van-popup>
  </div>
</template>
<script>

export default {
  data() {
    return {
      show: false
    };
  },
  created() {
    console.log(this.$route.query)
  },
  methods: {
    handleSunmit() {
      this.show = true;
    },
    handleConfirm() {
      this.show = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.task-detail {
  background: #f7f7f7;
  padding: 8px 5px;
  min-height: calc(100vh - 112px);
  padding-bottom: 160px;

  .task-banner {
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.01);

    .banner-header {
      background: $color-green;
      min-height: 51px;
      padding: 3px 14px;
      display: flex;
      font-size: 16px;
      align-items: center;
      text-shadow: -1px 0 rgba(255, 255, 255, 1), 0 1px rgba(255, 255, 255, 1), 1px 0 rgba(255, 255, 255, 1), 0 -1px rgba(255, 255, 255, 1);
      font-weight: bold;
      letter-spacing: 0.5px;
    }

    .banner-body {
      padding: 25px 18px;

      .time {
        color: $color-orange;
        font-weight: bold;
        padding-bottom: 20px;
      }

      .task-ul {
        .task-li {
          display: flex;
          align-items: center;
          min-height: 26px;
          margin-bottom: 2px;

          &:last-of-type {
            margin-bottom: 0;
          }

          .title {
            color: #7f7f7f;
            min-width: 84px;
          }

          .tag {
            background: #d0d0d0;
            padding: 0 10px;
            height: 26px;
            display: flex;
            align-items: center;
            border-radius: 26px;
            color: #525252;
          }

          .desc__gray {
            color: #7f7f7f;
            margin-left: 10px;
          }
        }
      }
    }
  }

  .detail-msg {
    padding: 19px 24px 20px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    margin-top: 14px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.01);

    .msg-header {
      position: relative;
      font-size: 16px;
      font-weight: bold;
      height: 28px;
      display: flex;
      align-items: center;

      &::after {
        content: '';
        width: 9px;
        height: 100%;
        background: $color-green;
        position: absolute;
        top: 0;
        left: -24px;
      }
    }

    .msg-ul {
      padding-top: 35px;

      .task-li {
        line-height: 200%;

        &:last-of-type {
          margin-bottom: 0;
        }

        .title {
          color: #7f7f7f;
          white-space: nowrap;
        }
      }
    }

    .banner {
      padding-top: 10px;
      margin-left: -4px;
      margin-right: -4px;
    }
  }

  .detail-footer {
    height: 112px;
    position: fixed;
    z-index: 10;
    bottom: 0;
    left: 0;
    right: 0;
    background: #f7f7f7;
    box-shadow: 0 -6px 16px 0 rgba(0, 0, 0, 0.08), 0 -3px 6px -4px rgba(0, 0, 0, 0.12), 0 -9px 28px 8px rgba(0, 0, 0, 0.05);
    padding: 23px 48px 0;
  }
}</style>
