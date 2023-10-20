Page({
    /**
     * 页面的初始数据
     */
    data: {
        show: false,
        form: {
            signType: 0,
            userType: 0,
            organizationName: "",
            phone: "",
            email: "",
            organizationCode: "",
            userId: "",
            businessLicense: "",
            openid: "",
            headPicture: "",
            wechatName: "",
        },
        isAgree: false,
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

    handleGoPrivacy() {
        this.setData({
            isAgree: !this.data.isAgree,
        });
    },
    handleUploadFile() {
        wx.chooseMedia({
            count: 1, // 默认3
            mediaType: ['image'],
            sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
            success: res => {
              // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                this.uploadFile(res.tempFiles[0])
            },
            fail: err => {
              console.log(err)
            }
          })
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
                        "form.businessLicense": _res.data.imgUrl,
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

    onSubmit() {
        console.log(this.data.form)
        this.setData({
            show: true
        })
    }
});
