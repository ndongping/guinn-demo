const App = getApp();
Page({
    data: {
        form: {
            id: "",
            headPicture: "",
            nickName: "",
            userId: "",
            fansNum: "",
        },
    },

    async onLoad(options) {
        wx.hideHomeButton();
        const ret = await App.getLogin;
        if (ret.token) {
            wx.reLaunch({
                url: "/pages/login/login",
            });
        } else {
            this.signDataInfo();
        }
    },

    handleChooseAvatar(evt) {
        console.log(evt);
        this.uploadFile(evt.detail.avatarUrl);
    },

    uploadFile(file) {
        wx.uploadFile({
            url: "", // 图片上传地址
            filePath: file,
            name: "file",
            formData: {},
            success: (res) => {
                console.log("res", res);
                const _res = JSON.parse(res.data);
                if (_res?.data?.imgUrl) {
                    this.setData({
                        "form.headPicture": _res.data.imgUrl,
                    });
                }
            },
            fail: (err) => {
                console.warn(err);
                wx.showToast({
                    title: "图片大小超出限制，请重新上传",
                    icon: "none",
                });
            },
        });
    },

    inputChange(evt) {
        const _type = evt.currentTarget.dataset.type;
        if (evt.detail.value.trim() != "") {
            this.setData({
                [`form.${_type}`]: evt.detail.value,
            });
        }
    },

    inputBlue(evt) {
        if (evt.detail.value.trim() != "") {
            this.setData({
                "form.nickName": evt.detail.value,
            });
        }
    },

    onSubmit() {
        console.log(this.data.form);
        if (this.data.form.id == "") return App.toast("请重新登录");
        if (this.data.form.headPicture == "") return App.toast("请输上传头像");
        if (this.data.form.nickName == "") return App.toast("请输入昵称");
        if (this.data.form.userId == "")
            return App.toast("请输入" + this.signType);
        if (this.data.form.fansNum == "") return App.toast("请输入粉丝数量");
    },

    signDataInfo() {
        App.request({
            key: "signDataInfo",
            method: "GET",
            data: {},
            success: (res) => {
                console.log(res);
            },
        });
    },

    handleAgency() {
        wx.navigateTo({
            url: "/pages/agency/agency",
        });
    },
});
