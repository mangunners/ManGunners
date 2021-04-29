$(".header__right").click(function(){
  $(".menu").slideToggle();
  $(".bar__top").toggleClass("cross");
  $(".bar__mid").toggleClass("cross");
  $(".bar__bottom").toggleClass("cross");
})