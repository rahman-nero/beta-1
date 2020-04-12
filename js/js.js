jQuery(function(){
 	// Функция которая включает меняет тему, на черную или на белую
	function darkTheme(whiteTheme = null) {
			// в параметрах передает переменную, если она равняется нулл. то вклю. черную тему иначе белую
			if (whiteTheme == null) {
				$("#header").css({'background-color': '#242526' }); 
			}else{
				$("#header").css({'background-color': '#fff' });
				$("#header").css({'color': '#000' });
			}
            
		}

	// Проверяем если в Localstorage тема выбрана как белая, то вызываем функцию, с параметром

	if (localStorage.getItem('theme') == 'white' ) {
		darkTheme('white');
	}else{
		$('.theme > input').click();
	}

	

    // Menu down icon click - open menu ) you understand

	

    $('.click_for_open').click(function() {

        if ($('.menu_icon_down_click').hasClass('open_menu')) {
            $('.click_for_open span').toggleClass('active_link');
        }else{
           $('.click_for_open span').toggleClass('active_link');
        }
        $('.menu_icon_down_click').toggleClass('open_menu');
        
    });



    // Черная тема кнопка в меню
    $('.theme > input').change(function(event) {

   		if (event.delegateTarget.checked) {
   		   darkTheme();
   		   localStorage.removeItem('theme');
        }else {
        	darkTheme('white');
        	localStorage.setItem('theme', 'white');
        }

    });


    // Menu

   $(window).scroll(function(event) {
   	 if ($(window).scrollTop() > 200){
	   	 	$('#header').css({'position' : 'fixed'});

   	 }

   	   });
    



});



