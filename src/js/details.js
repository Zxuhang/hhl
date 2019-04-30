import './public.js';
import '../style/details.less';

function getRequest() {   //获取url传的参数
    var url = window.location.search; //获取url中"?"符后的字串   
    var theRequest = new Object();   
    if (url.indexOf("?") != -1) {   
       var str = url.substr(1);   
       var strs = str.split("&");   
       for(var i = 0; i < strs.length; i ++) {   
           //就是这句的问题
          theRequest[strs[i].split("=")[0]]=decodeURI(strs[i].split("=")[1]); 
          //之前用了unescape()会出现乱码  
       }   
    }   
    return theRequest;   
 }

var Request = getRequest()
$(function(){
    console.log(Request)
    $('.hhl-details-con').eq(Request.id).addClass('active')
})
