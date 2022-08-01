/**
 * 封装Storage
 */
const STORAGE_KEY = 'mall'

export default {
  /**
   * @description 往sessionStorage添加数据
   * @method setItem
   * @param {string} key
   * @param {string} value
   * @param {string} moduleName(可选)
   */
  setItem (key, value, moduleName) {
    // 判断模块名是否空
    if (moduleName) {
      // 根据传入的模块名，获取模块对应的数据
      const module = this.getItem(moduleName)
      // 将键值对添加到该模块
      module[key] = value
      // 将更改之后的module存储进sessionStorage
      this.setItem(moduleName, module)
    } else {
      // 获取sessionStorage存储的值
      const sessionVal = this.getStorage()
      // 将新的键值对添加进val中
      sessionVal[key] = value
      // 将更新之后的val重新存储进sessionStorage
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(sessionVal))
    }
  },

  /**
   * @description 根据key从sessionStorage的某个模块获取值
   * @method getItem
   * @param {string} key
   * @param {string} moduleName（可选）
   * @return {object}
   */
  getItem (key, moduleName) {
    // 判断模块名是否为空
    if (moduleName) {
      // 根据模块名获取模块对应的信息
      const module = this.getItem(moduleName)
      // 如果session中存在该模块
      if(module) {
        return module[key]
      }
    }
    return this.getStorage()[key]
  },

  /**
   * @description 从sessionStorage获取整个模块的值
   * @method getStorage
   * @return {JSON}
   */
  getStorage () {
    return window.sessionStorage.getItem(STORAGE_KEY) || {}
  },

  /**
   * @description 根据key从sessionStorage删除某个值
   * @method clear
   * @param {string} key
   * @param {string} moduleName（可选）
   */
  clear (key, moduleName) {
    // 先从sessionStorage获取数据
    const sessionVal = this.getStorage()
    // 判断模块名是否为空
    if (moduleName) {
      // 若模块存在，则删除模块下的键值对
      if (sessionVal[moduleName]) {
        delete sessionVal[moduleName][key]
      } else { // 否则直接返回
        return
      }
    } else {
      // 否则直接删除val的键值对
      delete sessionVal[key]
    }
    // 将更新之后的数据重新存储进sessionStorage
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(sessionVal))
  }
}
