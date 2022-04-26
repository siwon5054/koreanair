$(document).ready(function(){
    $(".slide > .slide_all > li").eq(0).siblings().css({left:"-1540px"});
    var slideI=0;
    setInterval(function(){
    if(slideI<2){
        slideI++;
    }else{
        slideI=0;
    }
    $(".slide > .slide_all > li").eq(slideI).siblings().animate({"left":"-1540px"},500);
    $(".slide > .slide_all > li").eq(slideI).animate({"left":"0px"},500);
    },5000);//이미지슬라이드
});//ready