if (screen.availWidth > 1200) {
	$.getScript("js/desktop_script.js"); 
} else {
	$.getScript("js/mobile_script.js"); 
}

// Таблица расписании
$('.timetable__block').on('click', '.button-open', function(e){
 	var block_time = $(e.target).next();
 	var icon = $(e.target).find('.right_icon');

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
 
