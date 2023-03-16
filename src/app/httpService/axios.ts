import axios from "axios";

export const BaseURL = "http://localhost:8081";

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

// axios instance
export const axiosInstance = axios.create({
  baseURL: BaseURL,
  timeout: 10000,
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
