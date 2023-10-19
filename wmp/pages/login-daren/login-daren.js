// pages/login-mcn/login-mcn.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        show: false,
        form: {
            userId: "",
            phone: "",
            email: "",
        },
        isAgree: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {},
    inputChange(evt) {
        const _type = evt.currentTarget.dataset.type;
        if (evt.detail.value.trim() != "") {
            this.setData({
                [`form.${_type}`]: evt.detail.value,
            });
        }
    },

    handleCkeckPrivacy() {
        this.setData({
            isAgree: !this.data.isAgree,
        });
    },
    onSubmit() {
        console.log(this.data.form);
        this.setData({
            show: true
        })
    },
    handleConfirm() {
        this.setData({
            show: false
        })
    }
});
