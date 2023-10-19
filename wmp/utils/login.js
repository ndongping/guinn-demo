import Request from "./render.request";

export const fetchLoginDefault = () => {
    return new Promise((resolve, reject) => {
        wx.login({
            success: (res) => {
                if (res.code) {
                    Request({
                        key: "login",
                        data: {
                            code: res.code,
                        },
                        success: (res) => {
                            console.log(res);
                            wx.setStorageSync('userInfo', res.data)
                            resolve(res.data);
                        },
                        fail: (err) => {
                            reject(err);
                        },
                    });
                } else {
                    reject();
                }
            },
            fail: (err) => {
                reject(err);
            },
        });
    });
};
