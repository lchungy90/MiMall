const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false //关闭保存时进行eslint验证（解决[eslint] ESLint is not a constructor问题）
})
