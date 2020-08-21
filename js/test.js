$('.all_messages').on('click', '.message', function(e){
	console.log($(e.currentTarget));
	if ($(e.currentTarget).hasClass('select')) {
		$(e.currentTarget).removeClass('select');
	} else {
		$(e.currentTarget).addClass('select');
	}
});

let id_message = [];

$('.all_messages .message').each(function(index, element){
 	 id_message.push($(element).attr('data-id'));
});


$('.all_messages .message').each(function(index, element){
	for ( var i = 0; i < id_message.length; i++ ) {
		if ($(element).attr('data-answer') == id_message[i]){
				$(element).find('.message_content').prepend('<div class="block-anwser">' + $('.message').eq(id_message[i]).text() + '</div>');

		}
	}
});



