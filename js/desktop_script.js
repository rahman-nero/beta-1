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


		 $('.content-section article').on('mouseover', '.img', function(e){
		 	if ($(this).find('.article__description').length == 0) {
		 		let content = $(this).html();
		 		$.ajax({
	  				method: "GET",
	  				url: "ajax.html",
	  				success: function (res) {
	 					$(e.target).parent().html(content + '<div class="article__description">' + res + '</div>');
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