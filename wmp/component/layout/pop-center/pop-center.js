const App = getApp();
Component({
    properties: {
        zIndex:{
            type:Number,
            value:99
        }
    },
    data: {},
    observers:{},
    attached(){},
    methods: {
        /*属性监听*/
        /*逻辑事件*/
		/*接口请求*/
        /*页面交互*/
        tapMask(evt){
            let _tar=evt.target.dataset.tar;
            if(_tar=='mask'){
                this.triggerEvent('callClose')
            }
        },
        tapPrevent(evt){
            return false;
        },
        /*父级回调*/
		/*组件响应*/
    }
})