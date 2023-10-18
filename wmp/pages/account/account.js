const App = getApp();
Page({
    data: {
        form: {
            imageUrl: "",
            nickName: "",
            mcnId: "",
            fansNum: "",
        },
    },

    async onLoad(options) {
        wx.hideHomeButton();
        // const ret = await App.getLogin;
        // this.devDetail()
    },
    
    handleChooseAvatar(evt) {
        console.log(evt);
        this.setData({
            "form.imageUrl": evt.detail.avatarUrl,
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

    handleAgency() {
        wx.navigateTo({
          url: '/pages/agency/agency',
        })
    }
});
