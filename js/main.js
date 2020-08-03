	if (screen.availWidth > 1200) {
		//  Если ширина экрана больше 1200 пх, то показывваем верхний блок над меню
		 $(window).scroll(function(){
			 if ($(window).scrollTop() >= 150) 
				 $('.block-header-top').hide(200);
			 else if ($(window).scrollTop() <= 150)
				 $('.block-header-top').show(200);
		 });
	 
		 // Если он незашел с мобилки, убираем звездочки со аниме - верхние звездочки
		 $('.raiting').remove();

		 $.getScript("vk_widget.js"); 
	 } 
	 
	 // Загрузка чата
	 $('.loading_chat').fadeOut('slow');
	 
	 $('.up').on('click', function() {
		 $(window).scrollTop(0);
	 });
	 
	 $('.modal_menu').on('click', (e) => {
		 e.preventDefault();
		 if ($('.mobile-modal').hasClass('open')) {
			 $('.mobile-modal').removeClass('open');
			 $('.modal_menu').html("<img src='img/icons2/close.svg'>");
		 } else {
			 $('.mobile-modal').addClass('open');
			 $('.modal_menu').html("<img src='img/header/menu.svg'>");
		 }
	 
	 });
	 

