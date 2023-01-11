const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭保存时进行eslint验证（解决[eslint] ESLint is not a constructor问题）
  devServer:{
    host:'localhost',
    port:8080,
    // 用代理方式进行跨域
    proxy:{
      '/api':{
        target: 'https://www.imooc.com',
        changeOrigin:true,
        pathRewrite:{
          '/api':'' // /api/a/b => /a/b
        }
      }
    }
  }
})
