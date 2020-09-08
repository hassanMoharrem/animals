$(function() {
    'use strict';
    var winH =$(window).height(),
        upperH=$('.upper-bar').innerHeight(),
        navH=$('.navbar').innerHeight();
    $('.carousel-inner').height(winH - (upperH + navH));
$('.container .lorem3 ul li').on('click',function () {
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).data('class')==='all'){
        $('.shuffle .col-md-3').css('opacity',1);
    }else{
        $('.shuffle .col-md-3').css('opacity','.08');
        $($(this).data('class')).parent().css('opacity',1)
    }
});
});