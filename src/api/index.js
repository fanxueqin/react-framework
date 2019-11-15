import axios from "./axios";
import { notification } from 'antd';
const $http = (url, method = "GET", data, config = {}) => {
  const _config = Object.assign({ url, method, data }, config);
  return axios(_config).then(res => {
    if (res.status === 200) {
      if (res.data.code === -1) {
        notification.error({
          message: '出错啦',
          description: res.data.msg
        });
        throw new Error("请求出错啦");
      }
      return res;
    }
  });
};
export default {
  /*注册*/
  signIn: ({ username, password }) => $http(`/user/register`, "POST", { username, password }),
  /*登录 */
  login: ({ username, password }) => $http("/user/login", "POST", {username,password}),
  /*登出 */
  logout: () => $http("/logout", "POST"),
  /*上传文件 */
  uploadCSV: file => $http(
    "/upload/csv",
    "POST",
    {},
    {
      headers: { "Content-Type": "multipart/form-data" },
      processData: false,
      cache: false,
      data: file
    }
  )
};




