import Config from "../config";
/*
	let _data={};
	App.request({
		key: 'test', 
		data: _data,
		success:()=>{
		    
		}
	})
*/

let IsLoading = false;

function Request(params) {
    let _params = _initial(params);
    _request(_params)
        .then()
        .catch((erro) => {
            console.log(erro);
        });
}
function _initial(params) {
    let _params = {
        url: null, //请求地址
        key: null, //未设置key时，url为必填
        method: "POST", //请求的类型,默认POST， 如果是GET方式，需要参数设置
        header: null,
        data: {}, //提交参数
        getData: null,
        dataType: "json", //返回的数据格式
        responseType: "text", //设置响应的数据类型。合法值：text、arraybuffer
        isLoading: true, //默认显示加载蒙版（防多重点击）
        success: null, //接口成功回调
        fail: null, //接口失败回调
        complete: null, //接口完成回调
        timeout: 12000, //超时判定
    };
    _params = Object.assign(_params, params);
    _params.url = params.url || _getApiUrl(_params);
    return _params;
}

function _request(params) {
    return new Promise((resolve, reject) => {
        _requestStart(params)
            .then((resData) => {
                if (params.success) params.success(resData);
                resolve(resData);
            })
            .catch((erro) => {
                reject(erro);
            });
    });
}
function _requestStart(params) {
    return new Promise((resolve, reject) => {
        //更新token
        params.header = _getApiHeader(params);
        //请求打印
        console.log(
            "@request-params:",
            params.key || params.url,
            params.data || ""
        );
        //过滤入参
        let _obj = {};
        let _keys = [
            "url",
            "data",
            "header",
            "method",
            "dataType",
            "responseType",
            "timeout",
        ];
        _keys.forEach((k, i) => {
            if (params[k]) _obj[k] = params[k];
        });
        //显示loading
        if (params.isLoading) {
            wx.showLoading({
                title: "加载中",
            });
        }
        wx.request(
            Object.assign(_obj, {
                complete: (res) => {
                    if (res.errMsg.indexOf("ok") >= 0) {
                        _requestEnd(params, res.data);
                        resolve(res.data);
                    } else {
                        console.log(
                            "@request-terminate:",
                            params.key || params.url,
                            res || ""
                        );
                        if (params.isLoading) {
                            wx.hideLoading();
                        }
                        reject(res);
                    }
                },
            })
        );
    });
}
function _requestEnd(params, resData) {
    console.log("@request-complete:", params.key || params.url, resData || "");
    if (params.complete) params.complete(resData);
    if (params.isLoading) {
        wx.hideLoading();
    }
}
function _getApiHeader() {
    let _obj = {};
    let _token = wx.getStorageSync("userToken");
    if (_token) {
        _obj.token = _token;
    }
    return _obj;
}
function _getApiUrl(params) {
    let _url = "";
    let _mode = Config.mode;

    let _filePath = params.key;
    if (Config.api.hash[params.key]) {
        _filePath = Config.api.hash[params.key];
    }

    let _root = Config.api.root[_mode].baseUrl;
    _url = _root + _filePath;

    if (params.getData) _url += `/${params.getData}`;
    return _url;
}
export default Request;
