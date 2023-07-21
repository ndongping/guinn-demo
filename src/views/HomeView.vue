<template>
  <div>
    <div class="form-view">
      <div class="form-title">美妆达人</div>
      <div class="form-row">
        <van-form @failed="onFailed" @submit="onSubmit" input-align="right" error-message-align="right">
          <van-field v-model="form.nickName" name="nickName" label="昵称" placeholder="请填写" :rules="ruls.nickName" />
          <van-field v-model="form.id" name="id" label="小红书ID" placeholder="请填写" :rules="ruls.id" />
          <van-field v-model="form.wechatCode" name="wechatCode" label="微信号" placeholder="请填写" :rules="ruls.wechatCode" />
          <van-field readonly clickable name="fansNum" :value="form.fansNum" label="粉丝数量" is-link placeholder="请选择"
            :rules="ruls.fansNum" @click="showPicker = true" />
          <van-field readonly clickable name="age" :value="form.age" label="年龄" is-link placeholder="请选择"
            :rules="ruls.age" @click="showPickerAge = true" />
          <van-field readonly clickable name="sex" :value="form.sex" label="性别" is-link placeholder="请选择"
            :rules="ruls.sex" @click="showPickerSex = true" />
          <van-field readonly clickable name="area" :value="form.area" label="所在地域" is-link placeholder="请选择"
            :rules="ruls.area" @click="showPickerArea = true" />
          <van-field readonly clickable name="career" rows="1" autosize :value="form.career" label="职业" is-link
            placeholder="请选择" :rules="ruls.career" @click="showPickerCareer = true" type="textarea" />
          <van-field readonly clickable name="fansGroup" rows="1" autosize :value="form.fansGroup" label="粉丝人群" is-link
            placeholder="请选择" :rules="ruls.fansGroup" @click="showPickerFansGroup = true" type="textarea" />
          <van-field readonly clickable name="peopleGroup" rows="1" autosize :value="form.peopleGroup" label="达人分类"
            is-link placeholder="请选择" :rules="ruls.peopleGroup" @click="showPickerPeopleGroup = true" type="textarea" />
          <div style="margin: 50px 16px 100px;">
            <van-button round block type="info" native-type="submit">提交</van-button>
          </div>
        </van-form>
      </div>
    </div>
    <!-- 粉丝数量 -->
    <van-popup v-model="showPicker" position="bottom">
      <van-picker show-toolbar :columns="columns" @confirm="onConfirm" @cancel="showPicker = false" />
    </van-popup>
    <!-- 年龄 -->
    <van-popup v-model="showPickerAge" position="bottom">
      <van-picker show-toolbar :columns="columnsAge" @confirm="onConfirmAge" @cancel="showPickerAge = false" />
    </van-popup>
    <!-- 性别 -->
    <van-popup v-model="showPickerSex" position="bottom">
      <van-picker show-toolbar :columns="columnsSex" @confirm="onConfirmSex" @cancel="showPickerSex = false" />
    </van-popup>
    <!-- 所在地域 -->
    <van-popup v-model="showPickerArea" position="bottom">
      <van-picker show-toolbar :columns="columnsArea" @confirm="onConfirmArea" @cancel="showPickerArea = false" />
    </van-popup>
    <!-- 职业 -->
    <van-popup v-model="showPickerCareer" position="bottom">
      <div class="van-picker__toolbar">
        <button type="button" class="van-picker__cancel" @click="showPickerCareer = false">取消</button>
        <button type="button" class="van-picker__confirm" @click="onConfirmCareer">确认</button>
      </div>
      <div class="popup-content">
        <van-checkbox-group v-model="result">
          <van-cell-group>
            <van-cell v-for="(item, index) in list" clickable :key="item" :title="`${item}`" @click="toggle(index)">
              <template #right-icon>
                <van-checkbox :name="item" ref="checkboxes" />
              </template>
            </van-cell>
          </van-cell-group>
        </van-checkbox-group>
      </div>
    </van-popup>
    <!-- 粉丝人群 -->
    <van-popup v-model="showPickerFansGroup" position="bottom">
      <div class="van-picker__toolbar">
        <button type="button" class="van-picker__cancel" @click="showPickerFansGroup = false">取消</button>
        <button type="button" class="van-picker__confirm" @click="onConfirmFansGroup">确认</button>
      </div>
      <div class="popup-content">
        <van-checkbox-group v-model="resultGroup">
          <van-cell-group>
            <van-cell v-for="(item, index) in listGroup" clickable :key="item" :title="`${item}`"
              @click="toggleGroup(index)">
              <template #right-icon>
                <van-checkbox :name="item" ref="checkboxesGroup" />
              </template>
            </van-cell>
          </van-cell-group>
        </van-checkbox-group>
      </div>
    </van-popup>
    <van-popup v-model="showPickerPeopleGroup" position="bottom">
      <div class="van-picker__toolbar">
        <button type="button" class="van-picker__cancel" @click="showPickerPeopleGroup = false">取消</button>
        <button type="button" class="van-picker__confirm" @click="onConfirmPeopleGroup">确认</button>
      </div>
      <div class="popup-content people">
        <van-checkbox-group v-model="resultPeopleGroup">
          <van-cell-group>
            <template v-for="(item, index) in options">
              <template v-if="item.children">
                <van-collapse v-model="item.activeNames">
                  <van-collapse-item :key="item.text" :title="item.text" :name="index">
                    <van-cell v-for="(citem, cindex) in item.children" clickable :key="citem.text"
                      :title="`${citem.text}`" @click="togglePeopleGroup(citem.text)">
                      <template #right-icon>
                        <van-checkbox :name="citem.text" ref="checkboxesPeople" />
                      </template>
                    </van-cell>
                  </van-collapse-item>
                </van-collapse>
              </template>
              <van-cell v-else clickable :key="item.text" :title="`${item.text}`" @click="togglePeopleGroup(item.text)">
                <template #right-icon>
                  <van-checkbox :name="item.text" ref="checkboxesPeople" />
                </template>
              </van-cell>
            </template>
          </van-cell-group>
        </van-checkbox-group>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Toast } from 'vant';

export default {
  name: 'Home',
  data() {
    return {
      ruls: {
        nickName: [{ required: true, }],
        id: [{ required: true }],
        wechatCode: [{ required: true }],
        fansNum: [{ required: true }],
        age: [{ required: true }],
        sex: [{ required: true }],
        area: [{ required: true }],
        career: [{ required: true }],
        fansGroup: [{ required: true }],
        peopleGroup: [{ required: true }],
      },
      form: {
        nickName: '',
        id: '',
        wechatCode: '',
        fansNum: '',
        age: '',
        sex: '',
        area: '',
        career: '',
        fansGroup: '',
        peopleGroup: '',
      },
      columns: ['100万以上', '50万-100万', '10万-50万', '1万-10万', '5千-1万', '1千-5千', '1千以下'],
      columnsAge: ['18-23岁', '24-30岁', '31-40岁', '41-50岁', '大于50岁'],
      columnsSex: ['男', '女'],
      columnsArea: ['一线', '二线', '三线', '四线', '五线'],
      list: ['模特', '学生', '摄影师', '创业者', '插画师', '化妆师', '甜点师', '室内设计师', '教练', '厨师', '品牌创始人', '造型师', '画家', '平面设计师', '服装设计师', '主播', '编辑', '妈妈', '萌娃', '情侣',
        '夫妻', '家庭', '爸爸', '留学背景', '户外爱好者', '海外华人', '数码爱好者', '铲屎官', '手账爱好者', '孕妈', '二次元', '独居人群', '汉服爱好者', '手办爱好者'],
      listGroup: ['少男少女', '新手宝妈', '潮男潮女', '轻奢白领', '恋爱女生', '爱美少女', '孕妇妈妈', '专注护肤党', '爱买彩妆党', '网红潮人', '追星族', '在校大学生'],
      showPicker: false,
      showPickerAge: false,
      showPickerSex: false,
      showPickerArea: false,
      showPickerCareer: false,
      showPickerFansGroup: false,
      showPickerPeopleGroup: false,
      result: [],
      resultGroup: [],
      show: false,
      fieldValue: '',
      cascaderValue: '',
      activeNames: false,
      options: [
        {
          text: '彩妆',
          type: 'show',
          activeNames: [],
          children: [{ text: '美妆合集' }, { text: '妆教' }, { text: '妆容' }],
        },
        {
          text: '护肤',
        },
        {
          text: '洗护香氛',
        },
        {
          text: '母婴育儿',
        },
        {
          text: '服饰穿搭',
          type: 'show',
          activeNames: [],
          children: [{ text: '穿搭OOTD' }, { text: '服装' }],
        },
        {
          text: '鞋靴箱包',
        },
        {
          text: '珠宝配饰',
        },
        {
          text: '时尚潮流',
        },
        {
          text: '教育',
        },
        {
          text: '家居家装',
        },
        {
          text: '健身减肥',
        },
        {
          text: '科技数码',
        },
        {
          text: '动漫',
        },
        {
          text: '萌宠动物',
        },
        {
          text: '影视娱乐',
        },
        {
          text: '情感两性',
        },
        {
          text: '星座情感',
        },
        {
          text: '出行工具',
        },
        {
          text: '婚嫁',
        },
        {
          text: '美甲',
        },
        {
          text: '旅行住宿',
        },
        {
          text: '摄影',
        },
        {
          text: '医疗养生',
        },
        {
          text: '民生资讯',
        },
        {
          text: '游戏应用',
        },
        {
          text: '赛事',
        },
        {
          text: '生活经验',
        },
        {
          text: '其他',
        },
      ],
      resultPeopleGroup: []
    };
  },
  methods: {
    onSubmit() {
      return new Promise((resolve) => {
        Toast.loading('提交中...');

        setTimeout(() => {
          Toast.clear();
          resolve();
        }, 1000);
      });
    },
    onFailed(errorInfo) {
      console.log('failed', errorInfo);
    },
    onConfirm(value) {
      this.form.fansNum = value;
      this.showPicker = false;
    },
    onConfirmAge(value) {
      this.form.age = value;
      this.showPickerAge = false;
    },
    onConfirmSex(value) {
      this.form.sex = value;
      this.showPickerSex = false;
    },
    onConfirmArea(value) {
      this.form.area = value;
      this.showPickerArea = false;
    },
    onConfirmCareer() {
      this.form.career = this.result.join(',');
      this.showPickerCareer = false;
    },
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },
    onConfirmFansGroup() {
      this.form.fansGroup = this.resultGroup.join(',');
      this.showPickerFansGroup = false;
    },
    toggleGroup(index) {
      this.$refs.checkboxesGroup[index].toggle();
    },
    togglePeopleGroup(txt) {
      this.$refs.checkboxesPeople.find(item => item.name === txt).toggle();
    },
    onConfirmPeopleGroup() {
      this.form.peopleGroup = this.resultPeopleGroup.join(',');
      this.showPickerPeopleGroup = false;
    }
  },
};
</script>

<style lang="scss">
.popup-content {
  max-height: 500px;
  overflow-y: scroll;
}

.title-people {
  padding-left: 16px;
  font-weight: bold;
  padding-top: 10px;
}

.form-view {
  .van-cell {
    padding-top: 30px;
  }

  .form-title {
    font-size: 20px;
    padding-top: 40px;
    padding-bottom: 30px;
    text-align: center;
    background: #f8f8f8;
  }

  .form-row {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-top: -10px;
    overflow: hidden;
  }
}
</style>
