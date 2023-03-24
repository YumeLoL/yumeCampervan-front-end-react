import axios from "axios";

export const BaseURL = "http://localhost:8081";

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

// axios instance
export const axiosInstance = axios.create({
  baseURL: BaseURL,
  timeout: 10000,
  withCredentials: true,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(config => {
  // GET request with params
  if (config.method === 'get' && config.params) {
    let url = config.url + '?';
    for (const propName of Object.keys(config.params)) {
      const value = config.params[propName];
      var part = encodeURIComponent(propName) + "=";
      if (value !== null && typeof(value) !== "undefined") {
        if (typeof value === 'object') {
          for (const key of Object.keys(value)) {
            let params = propName + '[' + key + ']';
            var subPart = encodeURIComponent(params) + "=";
            url += subPart + encodeURIComponent(value[key]) + "&";
          }
        } else {
          url += part + encodeURIComponent(value) + "&";
        }
      }
    }
    url = url.slice(0, -1);
    config.params = {};
    config.url = url;
  }
  return config
}, error => {
    console.log(error)
    Promise.reject(error)
});


// request interceptor for login check
// axiosInstance.interceptors.response.use(res => {
//   if (res.data.code === 0 && res.data.msg === 'NOTLOGIN') {// back to login page
//     console.log("axios interceptors", res.data)
//     localStorage.removeItem('yumeCamp_member')
//     window.location.href = '/login'
//   } else {
//     return res.data
//   }
// })
// error => {
//   console.log('err' + error)
//   let { message } = error;
//   if (message === "Network Error") {
//     message = "Backend api Error";
//   }
//   else if (message.includes("timeout")) {
//     message = "The system api request timed out";
//   }
//   else if (message.includes("Request failed with status code")) {
//     message = "The system api" + message.substr(message.length - 3) + "issue";
//   }
//   // window.ELEMENT.Message({
//   //   message: message,
//   //   type: 'error',
//   //   duration: 5 * 1000
//   // })
//   return Promise.reject(error)
// }
// )