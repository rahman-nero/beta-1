//  Если ширина экрана больше 1200 пх, то показывваем верхний блок над меню
if (screen.availWidth > 1200) {
	$(window).scroll(function(){
		if ($(window).scrollTop() >= 150) 
			$('.block-header-top').hide(200);
		else if ($(window).scrollTop() <= 150)
			$('.block-header-top').show(200);
	},  {passive: true});
}

// Загрузка чата
$('.loading_chat').fadeOut('slow');