$(document).ready(function(){

	$('#new_note').on('click', function(){
		
		var key = $('#title').val();
		var message = $('#message').val();
		localStorage.setItem(key, message);
		$('#message-box').prepend('<div class="ghost"><p>' + key + '</p><p>' + message + '</p></div>');
		$('#form')[0].reset();
		return false;
	});

	for (var i = 0; i < localStorage.length; i++) {
		if (localStorage.getItem(localStorage.key(i))){	
				$('#message-box').prepend('<div class="ghost"><p>' + localStorage.key(i) +'</p><p>'+ localStorage.getItem(localStorage.key(i)) + '</p></div>');
			}
	}

	 $('#clear').on('click',function() {
        localStorage.clear();
        location.reload();
        return false;
    });
});
