window.onload = function(){
    
    window.onscroll = function(){
        if($(window).scrollTop()+window.innerHeight >=$('#num1').offset().top  ){
            numAnimation('#num1')
            numAnimation('#num2')
            numAnimation('#num3')
        }
        
    }
}
function numAnimation(id){ //数字的效果
    var num = $(id).attr("data-stop");
    var time = 100;
    var i = 0;
    var f = num - parseInt(num);
    var fn = f/20;
    var n = parseInt(num / 10);
    myTime(time)
    function myTime(time){
      setTimeout(function(){
          i = i + n;
          f = f + fn;
          // debugger
          if(i < num - n){
            if(i > n*10){
              time = 80
            }
            if(i > n*15){
              time = 130
            }
            if(f == 0){
              $(id).html(i)
            }else{
              $(id).html(i+Number(f.toFixed(2)))
            }
            myTime(time)
          }else{
            $(id).html(num)
          }
      },time)
    }
    window.onscroll = null;
  }
