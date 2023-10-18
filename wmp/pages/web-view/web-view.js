const App = getApp();
Page({
    data: {},
    onLoad: function (option) {
        console.log('@page-onload:' + App.util.getCurPagePath())
        
        if(option.url){
            this.setData({
                webUrl:decodeURIComponent(option.url)
            });
        }else{
            wx.showModal({
                title: '提示',
                content: '跳转，点击确定返回上一页',
                showCancel:false,
                success(res) {
                    App.href({
                        type:'navigateBack',
                        data:{delta:1}
                    });
                }
            });
        }
    },
})