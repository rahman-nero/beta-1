$(window).scroll(function(){
	if ($(window).scrollTop() >= 150) {
		$('.block-header-top').hide(200);
	} else if ($(window).scrollTop() <= 150){
		$('.block-header-top').show(200);
	}
	console.log($(window).scrollTop());
});


// Загрузка чата
$('.loading_chat').fadeOut('slow');