import axios from "axios";
import qs from "qs";
import { notification } from 'antd';
// http请求拦截器
axios.interceptors.request.use(
  config => {
    if (config.method.toUpperCase() === "GET") {
      config.url =
        config.url.indexOf("?") > 0
          ? config.url + "&clearCache=" + new Date().valueOf()
          : config.url + "?clearCache=" + new Date().valueOf();
    }
    if (config.method.toUpperCase() === "POST") {
      if (Object.prototype.toString.call(config.data) === "[object FormData]") {
        console.log("数据类型", Object.prototype.toString.call(config.data));
      } else {
        config.data = qs.stringify(config.data); //序列化
        config.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
    }
    config.headers["Authorization"] = window.localStorage.getItem("token") ? window.localStorage.getItem("token") : '';
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
// http响应拦截器
let tipLock = false;
axios.interceptors.response.use(
  data => {
    if (data.data["code"] && data.data["code"] === -2) {
      window.location.hash = "#/login";
    }
    window.localStorage.setItem('token', data.headers.authorization)
    return data;
  },
  err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = "请求错误";
          break;
        case 401:
          err.message = "登录已过期，请重新登录！";
          window.location.hash = "#/login";
          break;
        case 403:
          err.message = "拒绝访问";
          window.location.hash = "#/notAuth";
          break;
        case 404:
          err.message = `请求地址出错: ${err.response.config.url}`;
          break;
        case 405:
          err.message = `License已过期，请重新上传`;
          window.location.hash = "#/info/license";
          break;
        case 408:
          err.message = "请求超时";
          break;
        case 500:
          err.message = "服务器内部错误";
          break;
        case 501:
          err.message = "服务未实现";
          break;
        case 502:
          err.message = "网关错误";
          break;
        case 503:
          err.message = "服务不可用";
          break;
        case 504:
          err.message = "网关超时";
          break;
        case 505:
          err.message = "HTTP版本不受支持";
          break;
        default:
      }
    }
    if(!tipLock){
      tipLock = true;
      if (err.response.status === 401 || err.response.status === 405) {
        notification.info({
          message: '提示',
          description: err.message
        })
      }else{
        notification.error({
          message: '出错啦',
          description: err.message
        });
      }
      setTimeout(function () {   //需要了解一下js执行机制,这是一个异步宏任务
        tipLock = false;
      }, 1000)
    }
    return Promise.reject(err);
  }
);
export default axios;
