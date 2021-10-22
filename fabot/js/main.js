$(function () {
  //스크롤내리면 헤더포지션 fix하기

  $(window).on('scroll', function () {
    var winScr = $(window).scrollTop();
    //console.log(winScr);
    var headerH = $('#header').outerHeight();
    //console.log(headerH);

    if (winScr > headerH) {
      //console.log('스크롤의 top값이 헤더 높이보다 큼');
      
      $('#header').addClass('fix');
    }else{
      $('#header').removeClass('fix');
    }
  });

  //메인메뉴를 클릭하면 해당부분으로 이동,애니메이션
  $('#header nav a').on('click',function(){
    var href = $(this).attr('href');
  
if(href=='#'){
  $('html,body').animate({scrollTop:0},700);
}else{
  var offsetT = $(href).offset().top; //해당요소의 위쪽 높이값
  $('html,body').animate({scrollTop:offsetT},700);
}
return false;
  });
});