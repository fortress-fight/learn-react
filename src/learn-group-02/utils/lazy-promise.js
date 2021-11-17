/*
 * @Description: 延时 promise
 * @Author: F-Stone
 * @Date: 2021-11-17 11:01:32
 * @LastEditTime: 2021-11-17 11:07:34
 * @LastEditors: F-Stone
 */
export const lazyPromise = new Promise((res, rej) => {
   setTimeout(() => {
       res({
           msg: "数据已经加载结束。"
       })
   }, 5000); 
})
