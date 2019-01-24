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
  arrayDedup(array) {
    return array.reduce(function(ret, cur) {
      if(ret.indexOf(cur) === -1) ret.push(cur);
      return ret;
    }, []);
  },
  // 判断是否json字符串
  isJSON(str) {
    if (typeof str == "string") {
      try {
        // var obj = JSON.parse(str);
        if (str.indexOf("{") > -1) {
          return true;
        } else {
          return false;
        }
      } catch (e) {
        console.log(e);
        return false;
      }
    }
    return false;
  },
  // 数组元素移动
  // fromIndex: 当前元素所在位置索引, toIndex: 移动到交换的位置索引
  swapItem(arr, fromIndex, toIndex) {
    arr[toIndex] = arr.splice(fromIndex, 1, arr[toIndex])[0];
    return JSON.parse(JSON.stringify(arr));
  },
  // 常用正则校验
  regExp: {
    // 存在中文
    existChinese: /([\u4e00-\u9fa5]+)/,
    // 只有中文
    onlyChinese: /^[\u4e00-\u9fa5]*$/,
    // 存在数字
    existNum: /\d+/,
    // 只有数字
    onlyNum: /^\d*$/,
    // 存在字母
    existLetter: /([\u4e00-\u9fa5]+)/,
    // 只有字母
    onlyLetter: /^[a-zA-Z]*$/,
    // 匹配数字+字母
    num_letter: /^[0-9a-zA-Z]*$/,
    // 匹配数字 + 字母 + 特殊字符
    num_letter_special: /^[0-9a-zA-Z~/`!@#$%^&*()_+|{}?;:><\-\]\\[\/]*$/,
    // 匹配数字 + 字母,且必须包含
    num_letter_require: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/,
    // 手机号
    phone: /^[1][0-9]{10}$/,
    // Email
    email: /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/,
    // 网址URL
    url: /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/,
    // qq号
    qq: /[1-9]([0-9]{5,11})/,
    // 邮政编码
    postalCode: /\d{6}/,
    // ip
    ip:/(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)/,
    // 身份证号
    idCard: /\d{17}[\d|x]|\d{15}/,
    // 格式日期
    date: /\d{4}(\-|\/|.)\d{1,2}\1\d{1,2}/,
    // 金钱
    money: /^\d*(?:\.\d{0,2})?$/
  }
};
