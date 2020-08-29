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


// выбор страницы в мобильном версии - на read_manga.html
$('.select-page-modal').on('click', function (e) {

  if ($(e.target).hasClass('open-select-page-list')) {
    if($('.select-page-modal .list-pages').hasClass('list-open'))
      $('.select-page-modal .list-pages').removeClass('list-open');
    else
      $('.select-page-modal .list-pages').addClass('list-open');
  }
  if ($(e.target).is('li') && $('.select-page-modal .list-pages').hasClass('list-open') ) {
      $('.select-page-modal .list-pages').removeClass('list-open');
      $('.select-page-modal .open-select-page-list').html($(e.target).text());
  }

});

// показ модалки в нижнем меню
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

// убераем боковое меню десктопа
$('aside').remove();