	if (screen.availWidth > 1200) {
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
		 
		 //  скрипт с виджетом вк
		 $.getScript("library/slick_slider/slick.min.js", function() {
		 	$.getScript("js/slick_settings.js");
		 });

		 $.getScript("https://vk.com/js/api/openapi.js?168", function() {
			 $.getScript("js/vk_widget.js"); 
		 });

		 $('.timetable__block').on('click', '.button-open', (e) =>{

		 	let block_time = $(e.target).next();
		 	let icon = $(e.target).find('.right_icon');

		 	if ($(block_time).hasClass('open')) {
		 		$(block_time).removeClass('open');
		 		$(icon).removeClass('open');
		 	} else {
		 		$('.block-time').removeClass('open'); // до открытия, мы сначала закрываем все открытые секции
		 		$('.right_icon').removeClass('open');

		 		$(block_time).addClass('open');
		 		$(icon).addClass('open');
		 	}
		 });

	 }
	 
	 // Загрузка чата
	 $('.loading_chat').fadeOut('slow');
	 
	 $('.up_block').click(function() {
		 $(window).scrollTop(0);
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
		
	// модальное окно инфо о пользователе
	 $('.open_modal_info').click(function(e){
		 e.preventDefault();
		 if ($('.modal-info-user').hasClass('open')) {
			 $('.modal-info-user').removeClass('open');
		 } else {
			 $('.modal-info-user').addClass('open');
		 }
	 });
		 



