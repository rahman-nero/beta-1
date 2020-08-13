// slick - слайдер
$.getScript("library/slick_slider/slick.min.js", function() {
	$(".regular").slick({
     dots: false,
     slidesToShow: 1,
     variableWidth: true,
     slidesToScroll:1,   
     centerMode: true,
     lazyLoad : 'ondemand',
     prevArrow: false,
     nextArrow : false
});

});

$('.modal_menu').click(function(e){
 e.preventDefault();
 if ($('.mobile-modal').hasClass('open')) {
	 $('.mobile-modal').removeClass('open');
 } else {
	 $('.mobile-modal').addClass('open');
 }

 if ($('.mobile-modal').hasClass('open')) {
 	$('.modal_menu').html("<img src='img/icons2/close.svg'>");
 } else {
 	$('.modal_menu').html("<img src='img/header/menu.svg'>");
 }
});

// slick - слайдер

$('aside').remove();