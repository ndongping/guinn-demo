const App = getApp();
Component({
    properties: {},
    data: {
        activeIndex: null,
        tabbarHeight: 0,
        list: [
            {
                path: "/pages/home/home",
                name: "广场首页",
                icon: "/assets/icons/home.png",
            },
            {
                path: "/pages/account/account",
                name: "个人中心",
                icon: "/assets/icons/personal.png",
            },
        ],
    },
    lifetimes: {
        async attached() {
            // 当前选中项
            const { list } = this.data;
            const _pages = getCurrentPages();
            const _page = "/" + _pages[_pages.length - 1].route;
            const index = list.findIndex(
                (item) => item.path.indexOf(_page) > -1
            );
            this.setData({
                activeIndex: index,
            });
            // tabbar高度
            const _query = this.createSelectorQuery();
            _query.select(".tabbar").boundingClientRect();
            _query.exec((res) => {
                this.setData({
                    tabbarHeight: res[0].height,
                });
            });
            const ret = await App.getLogin;
            console.log(111, ret);
        },
    },
    methods: {
        tapItem(evt) {
            const { item } = evt.currentTarget.dataset;
            wx.reLaunch({
                url: item.path,
            });
        },
    },
});
