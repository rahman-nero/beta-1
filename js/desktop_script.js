//  Если ширина экрана больше 1200 пх, то показывваем верхний блок над меню
$(window).scroll(function(){
 if ($(window).scrollTop() >= 150){
	 $('.block-header-top').hide(200);
 }else if ($(window).scrollTop() <= 150) {
	 $('.block-header-top').show(200);
 }
});

// Если он незашел с мобилки, убираем звездочки со аниме - верхние звездочки
$('.raiting').remove();
$('.mobile-modal').remove();

//  slick слайдер
$.getScript("library/slick_slider/slick.min.js", function() {
	$(".regular").slick({
	     dots: false,
	     slidesToShow: 6,
	     autoplay: true,
	     autoplaySpeed: 5000,
	     infinite: true,
	     variableWidth: true,
	     slidesToScroll:2,
	     prevArrow: '<div class="prev"><img src="img/slider/left.svg"></div>',
	     nextArrow : '<div class="next"><img src="img/slider/right.svg"></div>'
	 });
});

//  скрипт с виджетом вк

$.getScript("https://vk.com/js/api/openapi.js?168", function() {
 $.getScript("js/vk_widget.js"); 
});


$('.content-section article').on('mouseover', '.img', function(e){
	if ($(this).find('.article__description').length == 0) {
		$.ajax({
			method: "GET",
			url: "ajax.html",
			success: function (res) {
				$(e.target).parent().append('<div class="article__description">' + res + '</div>');
			}
	});
	}
});



// Загрузка чата
$('.loading_chat').fadeOut('slow');

$('.up_block').click(function() {
 $(window).scrollTop(0);
});

// модальное окно инфо о пользователе
$('.open_modal_info').click(function(e){
 e.preventDefault();
 if ($('.modal-info-user').hasClass('open')) {
	 $('.modal-info-user').removeClass('open');
 } else {
	 $('.modal-info-user').addClass('open');
 }
});


$('.row-blocks-select').on('click', '.view-modal-section', function(e){
	let block_view = $(e.currentTarget).next();
	let icon_down = $(e.currentTarget).find('.icon-down');

	if ($(block_view).hasClass('open')) {
		$(icon_down).removeClass('open');
		$(block_view).removeClass('open');
	} else {
		$('.select-filters').removeClass('open');
		$('.icon-down').removeClass('open');
		$(icon_down).addClass('open');
		$(block_view).addClass('open');
	}
});




// показ скриншотов в модалке - если кликнуть на скриншот открывается модальное окно с ним
$('.screens').on('click', 'a', function(e){
  let img_link = $(e.currentTarget).data('src'); // ссылка на изображение

  if ($('.modal-view-img').hasClass('open') == false){
    $('.modal-view-img .center-view-img').html(
      '<span class="close-view-img-modal">&#10006;</span>' + // вставляем туда кнопку закрытия модалки
      '<img src="' + img_link + '">'
      );
    $('.modal-view-img').addClass('open'); 
  }

});

// обрабатываем модалку скриншотов - делаем возможность закрытия(выше)
$('.modal-view-img').click(function(e) {
  if ($(e.target).hasClass('open') ||  $(e.target).hasClass('close-view-img-modal')) {
    $('.modal-view-img').removeClass('open');
  }
})