Page({
    /**
     * 页面的初始数据
     */
    data: {
        show: false,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {},
    handleSunmit() {
        this.setData({
            show: true,
        });
    },
    handleConfirm() {
        wx.navigateBack();
    },
});
