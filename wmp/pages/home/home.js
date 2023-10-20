const App = getApp();
Page({
    data: {
        list: [],
    },

    async onLoad(options) {
        this.init();
        const ret = await App.getLogin;
        console.log(ret)
        if(ret.token) {
            wx.reLaunch({
              url: '/pages/login/login',
            })
        } else {
            this.init();
        }
    },
    init() {
        this.devDetail();
        let _list = [];
            for (let i = 0; i < 20; i++) {
                  _list.push(i);
            }
            this.setData({
                list: _list,
            });
    },
    devDetail() {
        App.request({
            key: "config",
            method: "GET",
            data: {},
            success: (res) => {
                console.log(res);
            },
        });
    },
    handleGoDetail() {
        wx.navigateTo({
          url: '/pages/task-detail/task-detail',
        })
    }
});
