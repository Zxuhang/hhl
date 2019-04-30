// import '../style/style.css';
import 'swiper/dist/css/swiper.min.css';
import Swiper from 'swiper';
import SwiperAnimation from 'swiper-animation/build/SwiperAnimation';
import '../style/index.less';

window.onload = function() {
var mySwiper = new Swiper ('.swiper-container', {
    autoplay: {
      delay: 3000,//1秒切换一次
    },
    loop: true, // 循环模式选项
    
    // // 如果需要分页器
    // pagination: {
    //   el: '.swiper-pagination',
    // },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // // 如果需要滚动条
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  })  
  

}