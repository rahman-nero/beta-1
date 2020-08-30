// slick - слайдер
$.getScript("library/slick_slider/slick.min.js", function() {
	$(".regular").slick({
     dots: false,
     slidesToShow: 1,
     variableWidth: true,
     slidesToScroll:1,   
     centerMode: true,
     lazyLoad : 'ondemand',
     prevArrow: false,
     nextArrow : false
});

});


// выбор страницы в мобильном версии - на read_manga.html
$('.select-page-modal').on('click', function (e) {

  if ($(e.target).hasClass('open-select-page-list')) {
    if($('.select-page-modal .list-pages').hasClass('list-open'))
      $('.select-page-modal .list-pages').removeClass('list-open');
    else
      $('.select-page-modal .list-pages').addClass('list-open');
  }
  if ($(e.target).is('li') && $('.select-page-modal .list-pages').hasClass('list-open') ) {
      $('.select-page-modal .list-pages').removeClass('list-open');
      $('.select-page-modal .open-select-page-list').html($(e.target).text());
  }

});

// показ модалки в нижнем меню
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

// убераем боковое меню десктопа
$('aside').remove();


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


// показ модалки со фильтрами
dropdown('.filters-sort-block', 'span', '.modal_selects');


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
dropdown('.add-to-list', '', '.list-link');

//  страница admin.html - выпадающий список выбора списков
dropdown('.mobile-select-list', '.open-list', '.mobile-select-list ul');

