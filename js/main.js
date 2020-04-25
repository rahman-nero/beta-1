
jQuery(function(){
  // Крч когда кликаешь на в любое место кроме открытого блока. то он закрывается, например, у нас открыть верхний блок в меню где ссылки, черная тема и редактировать аккаунт  и тд, если она открыта, мы делаем так чтобы она закрывалась если кликнуть не на нее, чтобы не приходилось кликать опять на иконку чтобы зарктыь блок 

$("body").click(function(event) {
  console.log(event);
  console.log(event.target.className);

    // если он не кликнул на иконку 'развернуть' - в меню , то сработает ,  
    if (  event.target.className == 'visible'  || event.target.className == 'active_link' ){
          //  модалка открыта, и он кликнул на другое место, тогда модалка в правом углу закрывается
            if ( $('.menu_icon_down_click').hasClass('open_menu')){

                   $('.menu_icon_down_click').toggleClass('open_menu');
              }else{

                  $('.click_for_open span').toggleClass('active_link');
                  $('.menu_icon_down_click').toggleClass('open_menu');
              }

          }else{
          // в Ином случае мы открываем модалку
          if ($('.menu_icon_down_click').hasClass('open_menu')) {
            $('.click_for_open span').toggleClass('active_link');
            $('.menu_icon_down_click').toggleClass('open_menu');
          }
             
        }



      // Мобильный меню
      if (event.target.className == 'icon_mobile open_mb_menu' || event.target.parentElement.className == 'icon_mobile open_mb_menu') {
       
          if ( $('.menu_mb').css('transform') == 'matrix(1, 0, 0, 1, 340, 0)' ) {
              $('.menu_mb').css({'transform': 'translateX(0%)'});
              $('.menu_mb').toggleClass('close_menu');
              
          
          }else{
            $('.menu_mb').css({'transform': 'translateX(100%)'});
            $('.menu_mb').toggleClass('close_menu');

          }
    
      }else{

        // if ( $('.menu_mb').css('transform') == 'matrix(1, 0, 0, 1, 0, 0)' ) {
        //      $('.menu_mb').css({'transform': 'translateX(100%)'});
        //     $('.menu_mb').toggleClass('close_menu');
          
        //   }

      }

    // Показ смайликов
    if (event.target.className != 'smile_i') {
        if ($('.smiles_all').css('display') == 'block') {
          $('.smiles_all').css({'display' : 'none'});
        }
    }else{
        if ($('.smiles_all').css('display') == 'block') {
            $('.smiles_all').css({'display' : 'none'});
        }else{
          $('.smiles_all').css({'display' : 'block'});
        }
    }

    

});

// Мобильное меню




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


    // Показ меню при скроле

   $(window).scroll(function(event) {
   	 if ($(window).scrollTop() > 250){
	   	 	$('#header').css({'position' : 'fixed'});
   	 }
   	});
    

    // Открытие чата, когда загуржена страница убирается лоадер с чата
    $('.loading_chat').fadeOut('slow');

    // всталяет смайлик в чат

    $('.smile_icon_code').each(function(){
        $(this).on('click', function(){
             let code_smile =  $(this).attr('data-code');
                let message_chat =  $('#input_chat').val() + code_smile;
               $('#input_chat').val(message_chat);
        });
    });


    // Смайлы в чате, отображение смайлов в сообщение место кода, подставляем смайлы

    let chat_smiles = $('.text_message .text'); // берем все сообщение в чате, и перебираем их

    chat_smiles.each(function(index, elem){

    let reg = elem.innerHTML.matchAll(/(=ad=)|(=s=)/gi); // сделаем проверку на регул. выр. 

    reg = Array.from(reg); // и из него делаем массив, а сам он не массив а объект какой-та

    if (reg.length > 0) { // если массив не пустой, перебираем массив

        reg.forEach(function(element){ // крч берем, то что нашел matchAll, перебирая вставляяем что нашел в img, и потом загружаем в чат
           let result_replace =  elem.innerHTML.replace(element[0], "<img src='img/smile/$&.png'>");
           elem.innerHTML = result_replace;
        });
    }
   });






});

