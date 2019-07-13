//下面封装的是一个ajax请求函数
//引入axios模块
import axios from 'axios'

//ajax请求函数模块,返回值是个promise对象(异步返回的数据是：response.data)
//向外默认暴露一个请求函数,有三个参数
// url是请求地址
//data是传参，是一个对象
//type是请求方式，get或者post
export default function ajax(url,data={},type='GET'){
  return new Promise(function(resolve,reject){    //resolve,reject这两个参数是函数function类型
    //执行异步ajax请求
    let promise;
    //如果是get请求，就做如下操作
    if(type === 'GET'){
      //准备url，query参数数据
      let dataStr = ''    //数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' +data[key] + '&'
      })
      if(dataStr !== ''){
        dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      //发get请求
      promise = axios.get(url)
    }else {    //如果不是就发post请求
      //发post请求
      promise = axios.post(url,data)
    }


    promise.then(function (response) {
      //请求成功就调用resolve（）函数
      resolve(response.data)
    }).catch(function (error) {
      //请求失败就调用reject（）函数
      reject(error)
    })

  })
}
