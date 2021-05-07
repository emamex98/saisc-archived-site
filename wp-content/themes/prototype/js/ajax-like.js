jQuery(document).ready(function($) {
	var like_number = '';
	jQuery('.unlike-button').click(function(){
		console.log(1);
		if(jQuery(this).hasClass('unlike-button')){
			var post_id = jQuery(this).find('.post-id').val();
			like_number = jQuery(this).find('.like-number');
			var post_type = jQuery(this).attr('data-type');
			jQuery.ajax({
				type: "POST",
				url: MyAjax.ajaxurl,
				data: { 
					'post_id': post_id ,
					'action' : 'wope_post_like',
					'post_type'	: post_type,
				}
			}).done(function( msg ) {
				if(msg == 'success_liked'){
					var total_number = parseInt(like_number.html());
					var new_total_number = total_number + 1;
					like_number.html(new_total_number);
				}
			});
			jQuery(this).addClass('liked-button').removeClass('unlike-button');
		}
	});
	
});