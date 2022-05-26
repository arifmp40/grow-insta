$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(this).toggleClass("fa-times");
    $("nav").toggleClass("show");
  });
  $(window).scroll(function () {
    $("nav").removeClass("show");
    $(".fa-bars").removeClass("fa-times");
    if ($(this).scrollTop() > 20) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
    var a = document.getElementById("k");
    var b = a.getContext("2d");
    getContext("2d");
    getc;
  });
});
