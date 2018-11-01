# yang-utils

```
初始化css样式及常用js

npm i yang-utils  
or  
yarn add yang-utils  

vue > main.js  
import utils from "yang-init";  
import "yang-init/style.scss";  

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

3. 常用正则编录（待实现）  
