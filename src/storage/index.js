/**
 * Storage封装
 */
const STORAGE_KEY = 'mall';

export default{
  // 存储值
  setItem(key,value,module_name){
    if(module_name){
      let val = this.getItem(module_name);
      val[key] = value;
      // 递归设置，不过与初始信息的下一层同级（mall>{}）,即存储值都在初始key内，而不是跟初始key同级增加（使得storage存储变得整洁方便）
      this.setItem(module_name,val);
    }else{
      // 设置初始模块（mall）内属性
      let val = this.getStorage();
      val[key] = value;
      window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val));
    }
  },

  // 获取值 - 获取某一个模块下面的属性（e.g. user->username）
  getItem(key,module_name){
    if(module_name){
      // 如果不是mall（初始）信息模块，则获取该模块信息
      let val = this.getItem(module_name);
      if(val) return val[key];
    }
    // 获取mall信息模块下的属性
    return this.getStorage()[key];
  },

  // 获取所有值（初始模块-mall）
  getStorage(){
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
  },

  // 清空某个值
  clear(key, module_name){
    let val = this.getStorage();
    if(module_name){
      if(!val[module_name]) return;
      delete val[module_name][key];
    }else{
      delete val[key];
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
  }
}