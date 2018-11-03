# yang-utils

```
初始化css样式及常用js

npm i yang-init
or  
yarn add yang-init  

vue > main.js  
import utils from "yang-init";  
import "yang-init/style.scss";  
  
Vue.prototype.$utils = utils;
```
scs依赖于scss预编译(持续更新)

js方法说明：（持续更细）

1. 原型方法
* 时间日期格式化  
new Date().Format('yyyy-MM-dd hh:mm:ss')

2. 函数方法
* newData  
深copy

* getDifferent(arr1,arr2)  
// 取出两个数组中的不同元素

* arrayDedup(arr)  
// 数组去重

* swapItem(arr,fromIndex,toIndex)  
// 数组元素移动  
// fromIndex: 当前元素所在位置索引, toIndex: 移动到交换的位置索引

3. 常用正则编录（持续更细）  
* regExp.existChinese  
// 存在中文

* regExp.onlyChinese  
// 只有中文

* regExp.existNum  
// 存在数字

* regExp.onlyNum 
// 只有数字

* regExp.existLetter
// 存在字母

* regExp.onlyLetter
// 只有字母

* regExp.num_letter
// 匹配数字+字母

* regExp.num_letter_special
// 匹配数字 + 字母 + 特殊字符

* regExp.num_letter_require
// 匹配数字 + 字母,且必须包含

* regExp.phone
// 手机号

* regExp.email 
// Email

* regExp.url
// 网址URL

* regExp.qq
// qq号

* regExp.postalCode
// 邮政编码

* regExp.ip
// ip

* regExp.idCard
// 身份证号

* regExp.date
// 格式日期

* regExp.money
// 金钱
