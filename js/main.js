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
} 

// Загрузка чата
$('.loading_chat').fadeOut('slow');