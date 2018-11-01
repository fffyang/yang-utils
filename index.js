/* eslint-disable */

// 时间格式化
Date.prototype.Format = function (fmt) {
  var o = {
    'M+': this.getMonth() + 1, // 月份
    'd+': this.getDate(), // 日
    'h+': this.getHours(), // 小时
    'm+': this.getMinutes(), // 分
    's+': this.getSeconds(), // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    'S': this.getMilliseconds()
    // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}
// new Date().Format('yyyy-MM-dd hh:mm:ss')

/* eslint-enable */

export default {
  // 深copy
  newData(data) {
    return JSON.parse(JSON.stringify(data));
  },
  // 取出两个数组中的不同元素
  getDifferent(arr1, arr2) {
    return arr1.concat(arr2).filter(function(v, i, arr) {
      return arr.indexOf(v) === arr.lastIndexOf(v);
    });
  },
  // 数组去重
  arrayDedup(arr) {
    return Array.from(new Set(arr));
  },
  // 数组元素移动
  // fromIndex: 当前元素所在位置索引, toIndex: 移动到交换的位置索引
  swapItem(arr, fromIndex, toIndex) {
    arr[toIndex] = arr.splice(fromIndex, 1, arr[toIndex])[0];
    return JSON.parse(JSON.stringify(arr));
  }
};
