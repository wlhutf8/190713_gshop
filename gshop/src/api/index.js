import ajax from './ajax';   //引入ajax封装函数
const BASE_URL = '/api';

//包含n个接口请求函数的模块,返回值为promise对象
// [1，根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`);  //这是箭头函数写法

//普通写法
// export function reqAddress(geohash){    
//     ajax(`${BASE_URL}/position/${geohash}`,{

//     });
//  }   

// [2、获取食品分类列表](#2获取食品分类列表)<br/>,index_category是数据库中集合的名称
export const reqFoodCategorys = () => ajax(BASE_URL+'/index_category');  ///这是箭头函数写法

// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
export const reqShops = (latitude,longitude) => ajax(BASE_URL+'/shops',{
    longitude,
    latitude
});  ///这是箭头函数写法

// [4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)<br/>
// export const reqSearchShops = (geohash,keyword) => ajax('/search_shops',{
//     geohash,
//     keyword
// });  ///这是箭头函数写法

// [5、获取一次性验证码](#5获取一次性验证码)<br/>
//export const reqCaptcha = () => ajax('/captcha');  ///这是箭头函数写法

// [6、用户名密码登陆](#6用户名密码登陆)<br/>
//export const reqLoginPwd = (name,pwd,captcha) => ajax('/login_pwd');

// [7、发送短信验证码](#7发送短信验证码)<br/>
// export const reqNoteVerification = (phone) => ajax('/sendcode',{
//     phone
// });

// [8、手机号验证码登陆](#8手机号验证码登陆)<br/>


// [9、根据会话获取用户信息](#9根据会话获取用户信息)<br/>


// [10、用户登出](#10用户登出)<br/>

