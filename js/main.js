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

 

 
//  выдвигающийся список select
$('.select').each(function() {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 450; // длительность анимации 

    _this.hide();
    _this.wrap('<div class="select"></div>');
    $('<div>', {
        class: 'new-select',
        text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
        class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
                text: selectOption.eq(i).text()
            })
        })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }

    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function() {
        if ( !$(this).hasClass('on') ) {
            $(this).addClass('on');
            selectList.slideDown(duration);

            selectItem.on('click', function() {
                let chooseItem = $(this).data('value');

                $('select').val(chooseItem).attr('selected', 'selected');
                selectHead.text( $(this).find('span').text() );

                selectList.slideUp(duration);
                selectHead.removeClass('on');
            });

        } else {
            $(this).removeClass('on');
            selectList.slideUp(duration);
        }
    });
});