

/*
    App.store.set('token','0001');
    App.store.get('token');
*/
//储存临时数据
const TemplateData = {}

const Store = {
    /**
     * 储存临时数据
     * @param {key} String, 必填, description: 临时数据对应的key值
     * @param {value} Any, 必填, description: 需要存放的数据
     */
    set: (key, value) => {
        TemplateData[key] = value;
    },
    /**
     * 获取临时数据
     * @param {key} String, 必填, description: 获取临时数据对应的key值
     */
    get: (key) => {
        return TemplateData[key];
    },
}
export default Store;