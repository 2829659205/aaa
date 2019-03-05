/**
 * ajax post数据
 * 
 */
function ajaxPost(data,url,successfn){
  $.ajax({
    type: "POST",
    url: url,
    data: data,
    dataType:"json",
    success: function (json) {
      successfn(json);   
    },
    error: function (request) {
    }
  });
}

/**
 * Messenger公共提示（用于替代operaMarks的tips）
 * @param  {string} content 内容
 */
function showTips(content) {
  $.globalMessenger().post({
    message:content,
    //hideAfter: 2,
    //type: 'error',
    showCloseButton: true
  });
}

/**
 * 提示请参考 http://tristanedwards.me/sweetalert
 * @param msg
 */
function successTips( msg, title ) {
  title = (title == undefined) ? '' : title;
  swal(msg, title, "success"); 
}

/**
 * 提示请参考 http://tristanedwards.me/sweetalert
 * @param msg
 */
function errorTips( msg, title ) {
  title = (title == undefined) ? '' : title;
  swal(msg, title, "error");
} 

/**
 * 获取url
 * @param app
 * @param m
 * @param action
 * @returns {String}
 */
function getUrl(app, m, action) {
  return '/index.php?app='+app+'&m='+m+'&action='+action;
}

/**
 * 创建空console对象，避免JS报错 
 * 解决IE内核浏览器因为console而无法执行下去的问题！
 */
(function (){ 
  if(!window.console) 
    window.console = {}; 
  var console = window.console; 

  var funcs = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 
               'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 
               'info', 'log', 'markTimeline', 'profile', 'profileEnd', 
               'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn']; 
  for(var i=0,l=funcs.length;i<l;i++) { 
    var func = funcs[i]; 
    if(!console[func]) 
      console[func] = function(){}; 
  } 
  if(!console.memory) 
    console.memory = {}; 
})();


/**
 * 过滤数组相同的值
 * @param  {array} arr 过滤数组
 * @return {array}     过滤后数组
 */
function unique (arr) {
  var result = [], hash = {};
  for (var i = 0, elem; (elem = arr[i]) != null; i++) {
    if (!hash[elem]) {
      result.push(elem);
      hash[elem] = true;
    }
  }
  return result;
}