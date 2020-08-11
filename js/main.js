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
// показ модалки со фильтрами
$('#main.sort-page .content-section .block_sort .filters-sort-block span').click(function(){
   if ($('.modal_selects').hasClass('open')) {
       $('.modal_selects').removeClass('open');
   } else {
       $('.modal_selects').addClass('open');
   }
});

// закрытие модалки со фильтрами
$('.modal_selects__close').click(function(){
   if ($('.modal_selects').hasClass('open')) {
       $('.modal_selects').removeClass('open');
   }
});

// закрытие модалки со фильтрами  - если клинуть на черную область
$('.modal_selects').click(function(e){
   if ($(e.target).hasClass('open')) {
       $('.modal_selects').removeClass('open');
   }
});

// закрытие модалки со фильтрами  - если клинуть на черную область
$('.add-to-list').click(function(e){

  if ($('.list-link').hasClass('open'))
       $('.list-link').removeClass('open');
  else 
       $('.list-link').addClass('open');
   
});


// перелистивание серии на странице view.html
$('.scroll-left').on('click', function(){
  var valueScroll = 200;
  var leftValue = $('.list-series').css('left').match(/[0-9-]+/)[0];

  if (+leftValue + valueScroll <= 0  ) {
    $('.list-series').css({'left' : +leftValue + valueScroll});
  } else {
    $('.list-series').css({'left' : '0px'});
  }

});

// перелистивание серии на странице view.html
$('.scroll-right').on('click', function(){
  var valueScroll = 200;
  var leftValue = $('.list-series').css('left').match(/[0-9-]+/)[0];
  var widthBlock = parseInt($('.list-series').width());
  widthBlock = widthBlock - (widthBlock * 2);
  console.log(widthBlock);
  
  if (+leftValue - valueScroll < widthBlock)  {
    $('.list-series').css({'left' : '-' + widthBlock});
  } else {
    $('.list-series').css({'left' : +leftValue - valueScroll});
  }
});
 
