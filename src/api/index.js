// import store from '../store'

// 配置API接口地址（代理地址----真实地址）
const root = '/jiawen'
// const root = process.env.NODE_ENV === 'development' ? '/jiawen' : 'http://192.168.0.155:8888'
// const root = process.env.NODE_ENV === 'development' ? store.state.proxyUrl : store.state.baseUrl
// 引用axios
const axios = require('axios')

// 自定义判断元素类型JS
function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull (o) {
  for (let key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}

// 接口处理函数
function apiAxios (method, url, params, timeout) {
  if (params) {
    params = filterNull(params)
  }
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: url,
      data: method === 'POST' || method === 'PUT' ? params : null,
      params: method === 'GET' || method === 'DELETE' ? params : null,
      baseURL: root,
      timeout: timeout && timeout.timeout ? timeout.timeout : 0,
      withCredentials: false
      /* 当前请求为跨域类型时是否在请求中协带cookie */
      /* 设置为true时，必须在后端增加response头信息Access-Control-Allow-Origin，并且必须指定域名，不能为* */
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        if (err) {
          reject(err.data)
        }
      })
  })
}

// 返回在vue模板中的调用接口
export default {
  /* RESTful API设计规范 易于理解与使用 */
  get: function (url, params, timeout) {
    return apiAxios('GET', url, params, timeout)
  },
  post: function (url, params = {}, timeout) {
    return apiAxios('POST', url, params, timeout)
  },
  put: function (url, params, timeout) {
    return apiAxios('PUT', url, params, timeout)
  },
  delete: function (url, params, timeout) {
    return apiAxios('DELETE', url, params, timeout)
  }
}
