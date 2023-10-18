const App = getApp();
Component({
    properties: {
        barColor:{
            type:String,
            value:'#fff'
        }
    },
    data: {
        isPhoneX:false,
        substance:0,
    },
    observers:{},
    attached() {
        let _model=App.systemInfo.model
    },
    ready(){
        //页面附加内容        
        const _query = this.createSelectorQuery()
        _query.select('#content').boundingClientRect()
        _query.exec((res)=>{
            this.setData({
                substance:res[0].height
            })
        })
    },
    methods: {
        /*属性监听*/
        /*逻辑事件*/
		/*接口请求*/
        /*页面交互*/
        /*组件响应*/
        /*数据分析*/
    }
})