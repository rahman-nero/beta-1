
//  Если ширина экрана больше 1200 пх, то показывваем верхний блок над меню
$(window).scroll(function(){
 if ($(window).scrollTop() >= 150){
	 $('.block-header-top').hide(200);
 }else if ($(window).scrollTop() <= 150) {
	 $('.block-header-top').show(200);
 }
});

// Если он незашел с мобилки, убираем звездочки со аниме - верхние звездочки
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

// показ инфы аниме , если навести на аниме
$('.content-section article').on('mouseover', '.img', function(e){
	let div = $(this).find('.article__description');
	setTimeout(function() {
		if (div.length <= 1) {
			$.ajax({
				method: "GET",
				url: "ajax.html",
				success: function (res) {
					$(div).html(res);
				}
			});
		}
	}, 600);

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