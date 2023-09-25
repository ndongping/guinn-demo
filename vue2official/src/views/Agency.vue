<template>
    <div class="agency-view">
        <div class="num-all">达人粉丝数：8</div>
        <div class="agency-list">
            <div class="list-li" v-for="(item, index) in [1, 2, 3, 4]" :key="index">
                <div class="avator">
                    <img src="@/assets/images/avator.png" alt="">
                </div>
                <div class="msg">
                    <div class="name">小森森baby</div>
                    <div class="code">小红书ID: 12341234</div>
                </div>
                <div class="num-view">
                    <div class="num">100w</div>
                    <div class="txt">粉丝数</div>
                </div>
                <div class="edit">
                    <img src="@/assets/icons/edit.png" alt="">
                </div>
            </div>
        </div>
        <div class="agency-footer">
            <van-button class="btn" block type="default" @click="handleSunmit">去接单</van-button>
        </div>
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
    },
    methods: {
        handleSunmit(){}
    },
};
</script>
  
<style lang="scss" scoped>
.agency-view {
    background: #f7f7f7;
    padding: 20px 6px;
    min-height: calc(100vh - 112px);
    padding-bottom: 160px;

    .num-all {
        padding-left: 18px;
        margin-bottom: 14px;
        font-size: 16px;
    }

    .agency-list {
        .list-li {
            display: flex;
            background: #fff;
            overflow: hidden;
            border-radius: 10px;
            padding: 24px 19px 24px 22px;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
            margin-bottom: 12px;
            .avator {
                width: 65px;
                height: 65px;
                border-radius: 50%;
                overflow: hidden;
                flex-shrink: 0;
            }
            .msg {
                flex: 1;
                padding-left: 13px;
                padding-right: 10px;
                padding-bottom: 10px;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                .name {
                    font-size: 18px;
                    margin-bottom: 6px;
                    width: 128px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .code {
                    color: #9e9e9e;
                    font-size: 10px;
                }
            }
            .num-view {
                width: 92px;
                text-align: center;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: center;
                padding-bottom: 10px;
                flex-shrink: 0;
                .num {
                    color: $color-green;
                    font-size: 18px;
                    font-weight: bold;
                }
                .txt {
                    font-size: 10px;
                }
            }
            .edit {
                width: 16px;
                height: 16px;
                margin-bottom: 14px;
                align-self: flex-end;
                flex-shrink: 0;
            }
        }
    }

    .agency-footer {
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
}
</style>
  