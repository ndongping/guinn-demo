const App = getApp();
Component({
  options: {
    multipleSlots: true,
    addGlobalClass: true,
  },
  properties: {
    // 顶部背景色
    background: {
      type: String,
      value: "#FFFFFF",
    },
    // 左侧按钮定制类型
    pageType: {
      type: String,
      value: "none",
    },
    // 自定义头部是否占位
    enableSeat: {
      type: Boolean,
      value: true,
    },
    // 标题
    title: {
      type: String,
      value: "",
    },
    // 是否有左侧slot
    slotLeft: {
      type: Boolean,
      value: false,
    },
  },
  data: {
    isAble: true,
    pageIndex: 0,
  },
  observers: {},
  attached() {
    let _si = App.systemInfo;
    this.setData({
      headerHeight: _si.statusBarHeight,
      pageIndex: getCurrentPages().length - 1,
      titleHeight:
        (_si.mbinfo.top - _si.statusBarHeight) * 2 + _si.mbinfo.height,
      navRight: _si.windowWidth - _si.mbinfo.left,
      centerWidth: _si.windowWidth - (_si.windowWidth - _si.mbinfo.left) * 2,
    });
  },
  methods: {
    /*属性监听*/
    /*逻辑事件*/
    /*接口请求*/
    /*页面交互*/
    tapGoBack() {
      wx.navigateBack();
    },
    tapGoHome() {
      wx.reLaunch({
        url: "/pages/home/home",
      });
    },
    tapGoSearch() {
      wx.navigateTo({
        url: "/pages/search/search",
      });
    },
    /*父级回调*/
    /*组件响应*/
  },
});
