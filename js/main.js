if (screen.availWidth > 1200) {
	$.getScript("js/desktop_script.js"); 
} else {
	$.getScript("js/mobile_script.js"); 
}

// В header, в конце инпута есть иконка, этого мы обрабатываем)
$('.settings-search').on('click', '.open-setting-list', function (e) {
    if ($('#settings-search-list').hasClass('open')) {
        $('#settings-search-list').removeClass('open');
        $('.settings-search').removeClass('active');
    } else {
        $('#settings-search-list').addClass('open');
        $('.settings-search').addClass('active');
    }

});

// обработка инпута поиска, крч когда что-то введешь в поиск - показываеются результаты в отдельном блоке
$('#search-input').on('input', function (e) {
  if ($('.result-search').hasClass('open') == false) {
    $('.result-search').addClass('open');
    $('.icon-search').html('<img src="img/icons2/close.svg" alt="">');
  }
});

// закрытие блоки поиска - т.е когда пользовател ввел чтот-то и показались результаты, то если он хочеть не искать аниме, то тогда кликнув на иконку закрыть результаты убераются
$('.icon-search').on('click', function(e) {
  if ($('.result-search').hasClass('open')) {
    $('.result-search').removeClass('open');
    $('.icon-search').html('<img src="img/header/search.svg" alt="">');
    $('#search-input').val('');
  }
  console.log('нажали на кнопку');  
});

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
$('#main.modification-page .content-section .block_sort .filters-sort-block span').click(function(){
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
 


// в блоке коментарии - при клике на кнопку 'ответить' появляется форма для добваления коментария
$('.block-review-comment-content .comment').on('click', '.comment_controls', function(e){
  e.preventDefault();
  if ($(e.target).hasClass('link-to-answer') &&  $(e.currentTarget).find('.form-add-answer').length == 0) {
    $(e.currentTarget).append('<div class="form-add-answer"><form action=""><textarea name="" placeholder="Введи хоть что-нибудь"></textarea><button type="submit">Отправить</button><button class="close-answer-form">Закрыть</button></form></div>');
  }

  if ($(e.target).hasClass('close-answer-form') &&  $(e.currentTarget).find('.form-add-answer').length == 1) {
    $(e.currentTarget).find('.form-add-answer').remove();
  }

});


// Модалка подачи жалобы на коментарии
$('.link-complain').click(function() {
  if ($('.modal-complaint-comments').hasClass('open') == false) {
    $('.modal-complaint-comments').addClass('open');
  }
});

// обработка закрытия модалки подачи жалобы на коментарии
$('.modal-complaint-comments').on('click', function(e) {
 if ($(e.target).hasClass('close-complaint-modal') || $(e.target).hasClass('modal-complaint-comments') && $(e.currentTarget).hasClass('open')) {
    $('.modal-complaint-comments').removeClass('open');
  }
});

// показ формы т.е textarea, при клике на чекбокс 'Другое', в блоке Жалоба на коментатора
$('.modal-complaint-body input').on('click', function(e){
  if ($(e.target).attr('id') == 'other-complaint' && $(e.target).is(':checked') ) {
        $('.modal-complaint-body textarea').css({'display' : 'block'});
  } else {
    if ($('.modal-complaint-body textarea').css('display') == 'block')
        $('.modal-complaint-body textarea').css({'display' : 'none'});
  }

})




// фильтры на странице anime.html - с боку
$('.row-blocks-select').on('click', '.view-modal-section', function(e){
  var block_view = $(e.currentTarget).next();
  var icon_down = $(e.currentTarget).find('.icon-down');

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

// Страница read_manga.html - обработка списка, т.е выпадающий список - где можно выбирать главу манги
$('.open-chapter-list').click(function(){
  if ($('.all-manga-chapters').hasClass('open-list')) {
    $('.all-manga-chapters').removeClass('open-list');
    $('.open-chapter-list').removeClass('active');
  }else {
    $('.open-chapter-list').addClass('active');
    $('.all-manga-chapters').addClass('open-list');
  }
});
