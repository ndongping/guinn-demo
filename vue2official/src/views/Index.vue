<template>
  <div class="wrap-index">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div class="list" v-for="(item, index) in list" :key="index" @click="handleGoDetail(index)">
        <div class="list-l">
          <div class="l-name">
            <div class="name-icon">
              <img class="img" v-if="index < 2" src="@/assets/icons/dy.jpg" alt="">
              <img class="img" v-else src="@/assets/icons/xhs.png" alt="">
            </div>
            <div class="name-txt">试用使用试用使用试用</div>
          </div>
          <div class="l-price">
            <div class="price-icon">
              <img class="img" src="@/assets/icons/rmb.png" alt="">
            </div>
            <div class="price-txt">一口价 ￥100</div>
          </div>
          <div class="desc">
            <span class="txt">品牌：新生儿礼盒</span>
            <span class="txt">粉丝要求：1000-1w</span>
          </div>
          <div class="num">
            <span class="tag">种草</span>
            <div class="num-r">
              <div class="icon">
                <img class="img" src="@/assets/icons/eye.png" alt="">
              </div>
              <span class="num-txt">100</span>
            </div>
          </div>
        </div>
        <div class="list-r">
          <img class="img" src="@/assets/images/bg.png" alt="">
        </div>
      </div>
    </van-list>
  </div>
</template>
<script>

export default {
  data() {
    return {
      list: [
      ],
      /** 加载loading */
      loading: false,
      /** 数据是否全部加载完 */
      finished: false,
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    handleGoDetail(index) {
      this.$router.push({
        path: '/task-detail',
        query: {
          id: index
        }
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.wrap-index {
  background: #f7f7f7;
  padding: 12px 6px;
  min-height: 100vh;
  padding-bottom: 100px;

  .list {
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.01);
    padding: 18px;
    background: #fff;
    border-radius: 10px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .list-l {
      width: calc(100% - 80px);
      padding-right: 18px;

      .l-name {
        margin-bottom: 10px;
        display: flex;
        align-items: center;

        .name-icon {
          width: 16px;
          height: 16px;
          margin-right: 8px;
          display: flex;
          align-items: center;
        }

        .name-txt {
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 1px;
          text-indent: 1px;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }

      .l-price {
        height: 26px;
        border-radius: 26px;
        background: #75e512;
        display: flex;
        align-items: center;
        padding: 0 10px 0 6px;
        width: fit-content;

        .price-icon {
          width: 12px;
          height: 12px;

          .img {
            vertical-align: top;
          }
        }

        .price-txt {
          font-size: 12px;
          padding-left: 4px;
        }
      }

      .desc {
        padding-top: 15px;

        .txt {
          color: #999;
          font-size: 12px;

          &:first-of-type {
            margin-right: 18px;
          }
        }
      }

      .num {
        padding-top: 16px;
        display: flex;
        align-items: center;

        .tag {
          font-weight: bold;
          color: $color-green;
        }

        .num-r {
          padding-left: 18px;
          display: flex;
          align-items: center;

          .icon {
            width: 14px;
            display: flex;
            align-items: center;

            .img {
              vertical-align: top;
            }
          }

          .num-txt {
            padding-left: 4px;
            color: #999;
          }
        }
      }
    }

    .list-r {
      width: 80px;
      height: 80px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ffe2e4;
      border-radius: 8px;
      overflow: hidden;

      .img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>
