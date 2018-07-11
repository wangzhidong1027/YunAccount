let test= {
  /**
   *  @description 清除左右空格
   */
  trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, '');
  },
  /* @description 清除全部空格*/
  trimall(str) {
    return str.replace(/\s+/g, '');
  },
  /* @description 清除左空格*/
  trimLeft(str) {
    return str.replace(/(^\s*)/g, '');
  },
  // 清除右空格
  trimRight(str) {
    return str.replace(/(\s*$)/g, '');
  },
  //正则匹配
  checkType:(function(){
    let rules={
      email(str){
        return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
      },
      mobile(str){
        return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
      },
      tel(str){
        return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
      },
      number(str){
        return /^[0-9]$/.test(str);
      },
      english(str){
        return /^[a-zA-Z]+$/.test(str);
      },
      text(str){
        return /^\w+$/.test(str);
      },
      chinese(str){
        return /^[\u4E00-\u9FA5]+$/.test(str);
      },
      lower(str){
        return /^[a-z]+$/.test(str);
      },
      upper(str){
        return /^[A-Z]+$/.test(str);
      }
    };
    return {
      /**
       * @description 检测接口
       * @param str 待处理字符串
       * @param type 待检测的类型
       */
      check(str, type){
        return rules[type]?rules[type](str):false;
      },
      /**
       * @description 添加规则扩展接口
       * @param type 规则名称
       * @param fn 处理函数
       */
      addRule(type,fn){
        rules[type]=fn;
      }
    }
  })()
}

