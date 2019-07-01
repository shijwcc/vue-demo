module.exports = {
  '/api1': {
    target: 'http://192.168.0.77:8012/',
    secure: false,/* 如果是https接口，需要配置这个参数 */
    changeOrigin: true,
    pathRewrite: {
      '^/api1': '/new'
    }
  },
  '/jiawen': {
    target: 'http://192.168.0.155:8888',
    pathRewrite: {
      '^/jiawen': ''
    }
  }
}

