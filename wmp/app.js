import Store from 'utils/render.store';
import Request from 'utils/render.request';
import Config from 'config.js';
import Onfire from 'assets/lib/onfire.min';
import { fetchLoginDefault } from 'utils/login'

App({
    /*
     * 状态管理
     */
    store: Store,
    /*
     * 本地配置
     */
    config: Config,
    /*
     * 接口请求
     */
    request: Request,
    /*
     * 事件订阅与发布
     * clear,fire,fireSync,on,one,un
     * https://github.com/hustcc/onfire.js
     */
    onfire: Onfire,

    /*
     * 系统信息
     */
    systemInfo: null,

    // 静默登录
    getLogin: null,
    /*
     * 生命周期
     */
    onLaunch(option) {
        this.systemInfo = wx.getSystemInfoSync()
        this.systemInfo.mbinfo = wx.getMenuButtonBoundingClientRect()

        console.log('@App-onLaunch.systemInfo=', this.systemInfo);
        console.log('@App-onLaunch.option=', option);
        // 静默登录
        this.getLogin = fetchLoginDefault()
    },
    onPageNotFound(res) {
        console.log('@onPageNotFound', res)
        wx.redirectTo({
            url: '/pages/not-found/not-found'
        })
    },
    /*
     * 设置上一节点页
     */
    setLastPage(url = null) {
        if (!url) url = this.util.getCurPagePath()
        wx.setStorageSync('lastPagePath', url);
    },
    /*
     * 返回上一节点页
     */
    backLastPage() {
        let _url = wx.getStorageSync('lastPagePath');
        if (!_url) _url = '/pages/home/home'
        wx.setStorageSync('lastPagePath', null);
        wx.reLaunch({
            url: _url
        })
    },
    /*
     * 当前页面缺少入参
     */
    missingParam() {
        wx.showModal({
            title: '提示',
            content: '网络异常',
            showCancel: false,
            success: () => {
                wx.reLaunch({
                    url: '/pages/home/home'
                })
            },
        });
    },
    /*
     * 敬请期待
     */
    comingSoon() {
        wx.showModal({
            title: '提示',
            content: '敬请期待',
            showCancel: false,
            success: () => { },
        });
    },
    /*
     * 404
     */
    onPageNotFound() {
        wx.reLaunch({
            url: 'pages/home/home'
        });
    },
})