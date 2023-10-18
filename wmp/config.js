const config = {
  mode: "dev", //dev, prod
  //接口开发路径
  api: {
    root: {
      dev: {
        baseUrl: "https://api.wrdan.com/",
      },
      prod: {
        baseUrl: "https://api.wrdan.com/",
      },
    },
    hash: {
      //登录
      login: "",
      config: "hitokoto",
    },
  },
  //分享
  share: {
    title: "分享描述",
    imageUrl: "",
  },
  //表单验证
  formPreset: {
    name: [
      {
        rule: "requied",
        erroMsg: "请输入姓名",
      },
      {
        rule: "name",
        erroMsg: "姓名仅支持输入中文英文以及符号",
      },
    ],
    password: [
      {
        rule: "requied",
        erroMsg: "请输入密码",
      },
      {
        rule: /^[a-zA-Z0-9@]{0,30}$/gi,
        erroMsg: "密码仅支持中文英文及数字",
      },
    ],
  },
  formRegExp: {
    requied: /\S/gi,
    name: /^[^0-9]+$/,
    email: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/gi,
    password: /^[a-zA-Z0-9@]{0,30}$/gi,
    tel: /^1\d{10}$/g,
    num: /^\d+$/gi,
    filter: /^[\w\u4e00-\u9fa5]+$/gi,
    phone: /^[2-9][0-9]{6,7}$/gi,
    zone: /^0[0-9]{2,3}$/gi,
    picCode: /^[a-zA-Z0-9]{6,6}$/gi,
    smsCode: /^[0-9]{6,6}$/gi,
    invoiceCode: /^[0-9a-zA-Z]+$/,
  },
};
export default config;
