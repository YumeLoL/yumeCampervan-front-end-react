import axios, { AxiosInstance, AxiosResponse } from "axios";
import { ResponseData } from "../libs/interface/res";

export const BaseURL = "http://localhost:8081";

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

// axios instance
export const axiosInstance: AxiosInstance = axios.create({
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
axiosInstance.interceptors.response.use((res: AxiosResponse<ResponseData>) => {
  if (res.data.code === 0 && res.data.msg === 'NOTLOGIN') {// back to login page
    localStorage.removeItem('yumeCamp_member')

    const loginRemandMsg = 'You must be logged in first'
    localStorage.setItem('loginRemandMsg', loginRemandMsg)
    
    window.location.href = '/login'
  } 
  return res
},
(error) => {
  // Handle errors here
  console.error(error);
  return Promise.reject(error);
})