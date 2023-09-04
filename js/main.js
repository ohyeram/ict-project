$(document).ready(function(){

    // MENU작업
    var trigger=$("#trigger");
    var menu=$("nav ul");

    $(trigger).on("click",function(e){
        e.preventDefault(); //a링크를 막아줌
        menu.slideToggle();
    });

    // boxslider
    $(".bxslider").bxSlider({
        auto:true, //자동스크롤적용
        autoHover:true, //이미지위로 마우스포인터 올리면 멈춤
    });
});