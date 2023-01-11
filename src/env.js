let baseURL;
// 使用jssonp cros跨域时才需要创键这种变量以更加方便进行使用；本项目使用代理不需要
// process.env 获取当前node进程的环境变量 serve=development  build=production
switch(process.env.NODE_ENV){
  case 'development':
    baseURL = 'http://dev-mall-pre.springboot.cn/api';
    break;
  case 'test':
    baseURL = 'http://test-mall-pre.springboot.cn/api';
    break;
  case 'prod':
    baseURL = 'http://mall-pre.springboot.cn/api';
    break;
  default:
    baseURL = 'http://mall-pre.springboot.cn/api';
    break;
}
export default{
  baseURL
}