const App = getApp();
let Observer = null
Component({
    properties: {
        bgColor:{
            type:String,
            value:null
        },
        useSubstance:{
            type:Boolean,
            value:true
        }
    },
    data: {
        substance: 0
    },
    attached() {},
    ready() {
        if(this.data.useSubstance){
            const _query = this.createSelectorQuery()
            _query.select('#content').boundingClientRect()
            _query.exec((res) => {
                this.setData({
                    substance:res[0].height
                })
            })
        }
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