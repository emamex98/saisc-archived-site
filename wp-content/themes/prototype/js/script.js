jQuery(document).ready(function(){
	

	var show_menu = false;
	
	jQuery('.share-button').click(function(){
		jQuery(this).find('.share-button-container').toggle();
	});
	
	jQuery('.widget_archive, .widget_categories, .widget_pages, .widget_meta, .widget_recent_entries, .widget_nav_menu').find('li a').prepend('<i class="fa fa-angle-right"><i>');
	
	jQuery('.widget_recent_comments').find('li').prepend('<i class="fa fa-angle-right"><i>');
		
	jQuery('.portfolio-filter-container').isotope({
		// options
		itemSelector : '.portfolio_filter_item',
		layoutMode : 'fitRows',
	});
	
	jQuery(window).scroll(function() {
		jQuery('.portfolio-filter-container').isotope('reLayout');
	});
	
	setTimeout(function(){
		jQuery('.portfolio-filter-container').isotope('reLayout');
	},1000)
	
	/* filter */
	jQuery('.filters span').click(function(){
		var selector = jQuery(this).attr('data-filter');
		var parent = jQuery(this).parent().parent().parent().parent();
		jQuery(parent).find('.portfolio-filter-container').isotope({ filter: selector });
		jQuery(this).parent().parent().find('span').removeClass('active');
		jQuery(this).addClass('active');
		return false;
	});
	
	//ACCORDION
	jQuery('.accordion').accordion({
		header: '.accor-title',
		heightStyle: 'content',
		active  : false,
		collapsible : true,
		create: function( event, ui ) {
			jQuery(this).find('.ui-state-active').find('.accor-title-icon').html('<i class="fa fa-plus"></i>');
			
			var this_collapsible = jQuery(this).data('collapsible');
			if(this_collapsible == 0){
				jQuery(this).accordion( "option", "collapsible", false );
			}else{
				jQuery(this).accordion( "option", "collapsible", true );
			}
			
			var this_active = parseInt(jQuery(this).data('active'));
			if(this_active == 0){
				jQuery(this).accordion( "option", "collapsible", true );
				jQuery(this).accordion( "option", "active", false );
			}else{
				this_active = this_active - 1;
				jQuery(this).accordion( "option", "active", this_active );
			}
			
			
			
		},
		beforeActivate: function( event, ui ) {
			ui.newHeader.find('.accor-title-icon').html('<i class="fa fa-minus"></i>');
			ui.oldHeader.find('.accor-title-icon').html('<i class="fa fa-plus"></i>');
		}
	});
	
	//TAB
	jQuery('.tab-title').click(function(){
		var tab_id = jQuery(this).find('.tab-id').html();
		var parent_top = jQuery(this).parent();
		var parent_tab = jQuery(parent_top).parent();
		jQuery(parent_top).find('.tab-current').removeClass("tab-current");
		jQuery(this).addClass("tab-current");
		jQuery(parent_tab).find('.tab-content').hide();
		jQuery(parent_tab).find('.tab-content'+tab_id).fadeIn();
	});
	
	jQuery('.tab-vertical-title').click(function(){
		var tab_id = jQuery(this).find('.tab-vertical-id').html();
		var parent_top = jQuery(this).parent();
		var parent_tab = jQuery(parent_top).parent();
		jQuery(parent_top).find('.tab-vertical-current').removeClass("tab-vertical-current");
		jQuery(this).addClass("tab-vertical-current");
		jQuery(parent_tab).find('.tab-vertical-content').hide();
		jQuery(parent_tab).find('.tab-vertical-content'+tab_id).fadeIn();
	});
	
	//TESTIMONIALS
	jQuery('.testimonials-button-next').click(function(){
		var root = jQuery(this).parent().parent().parent();
		var current_id = parseInt( jQuery(root).find('.testimonials-current-id').html());
		var total = parseInt( jQuery(root).find('.testimonials-total').html());
		var next_currennt_id = 1;
		if(current_id == total ){
			next_current_id = 1;
		}else{
			next_current_id = current_id + 1;
		}
		jQuery(root).find('.testimonials-current-id').html(next_current_id);
		
		jQuery(root).find('.testimonials-each').each(function(){
			var this_id = parseInt( jQuery(this).find('.testimonials-id').html());
			if( this_id == next_current_id){
				jQuery(this).fadeIn(1000);
			}else{
				jQuery(this).hide();
			}
		});
	});
	
	jQuery('.testimonials-button-prev').click(function(){
		var root = jQuery(this).parent().parent().parent();
		var current_id = parseInt( jQuery(root).find('.testimonials-current-id').html() );
		var total = parseInt( jQuery(root).find('.testimonials-total').html() );
		var next_currennt_id = 1;
		if(current_id == 1 ){
			next_current_id = total;
		}else{
			next_current_id = current_id - 1;
		}
		jQuery(root).find('.testimonials-current-id').html(next_current_id);
		
		jQuery(root).find('.testimonials-each').each(function(){
			var this_id = parseInt( jQuery(this).find('.testimonials-id').html() );
			if( this_id == next_current_id){
				jQuery(this).fadeIn(1000);
			}else{
				jQuery(this).hide();
			}
		});
	});
	
	jQuery('#back_top').click(function(){
		jQuery('html, body').animate({scrollTop:0}, 'normal');
		return false;
	});
	

	
	jQuery(window).scroll(function() {
		if(jQuery(this).scrollTop() !== 0) {
			jQuery('#back_top').fadeIn();	
		} else {
			jQuery('#back_top').fadeOut();
		}
	});
	
	if(jQuery(window).scrollTop() !== 0) {
		jQuery('#back_top').show();	
	} else {
		jQuery('#back_top').hide();
	}
	
	//prettyPhoto
	jQuery("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools : '',
	});
	
	//play all slider
	jQuery('.flexslider').flexslider({
		controlNav: false,                    
		directionNav: true,
		animation : 'fade',
		slideshowSpeed :5000 ,	
	});
	
	jQuery('.info-box-remove').click(function(){
		jQuery(this).parent().hide();
	});

	//add flexslider icon
	jQuery('.flex-prev').html('<i class="fa fa-angle-left"></i>');
	jQuery('.flex-next').html('<i class="fa fa-angle-right"></i>');
	
	jQuery('.gallery-thumb').each(function(){
		//save the original width
		jQuery(this).attr('data-width',jQuery(this).width());
		
		var gallery_main = jQuery(this).find('.gallery-thumb-main');
		
		//set height of first image
		jQuery('.gallery-main0').find('img').load(function() {	
			var this_gallery_height = jQuery(this).height();
			jQuery(this).parent().parent().attr('data-height',this_gallery_height);
			jQuery(this).parent().parent().height(this_gallery_height);
			
			jQuery(gallery_main).css('opacity',1);
			jQuery(gallery_main).css('height',this_gallery_height);
		});
	});
	
	jQuery(window).resize(function(){
		jQuery('.gallery-thumb').each(function(){
			//set new width
			var original_width = jQuery(this).attr('data-width');
			var new_width = jQuery(this).width();
			jQuery(this).attr('data-width',new_width);
			
			//update new height of each main image
			jQuery(this).find('.gallery-thumb-each').each(function(){
				var current_height = jQuery(this).attr('data-height');
				var new_height = Math.round(current_height*new_width/original_width);
				jQuery(this).attr('data-height',new_height);
			});
			
			//set new height for main image and container
			var current_gallery = jQuery(this).find('.gallery-current');
			var current_height = jQuery(current_gallery).attr('data-height');
			jQuery(this).find('.gallery-thumb-main').animate({
				height: current_height,
			}, 500);
			jQuery(current_gallery).height(current_height);
		});
	});
	
	//gallery with thumb
	jQuery('.gallery-thumb-border').click(function(){
		var number 						= jQuery(this).data('number');
		var the_gallery 				= jQuery(this).parent().parent().parent();
		var gallery_main 				= jQuery(the_gallery).find('.gallery-thumb-main');
		var gallery_current 			= jQuery(gallery_main).find('.gallery-current');
		var gallery_new					= jQuery(gallery_main).find('.gallery-main'+number);
		
		var gallery_changing 			= jQuery(the_gallery).attr('data-changing');
		
		if(gallery_changing == 'no'){
			jQuery(the_gallery).attr('data-changing','yes');
			
			//check if click on current gallery
			if(jQuery(gallery_new).hasClass('gallery-current')){
				jQuery(the_gallery).attr('data-changing','no');
			}else{
				//hide current gallery
				jQuery(gallery_current).height(0);
				
				jQuery(gallery_current).removeClass('gallery-current');
				
				//change current gallery to new gallery
				jQuery(gallery_new).addClass('gallery-current');
				
				//if not set height
				var new_height = parseInt(jQuery(gallery_new).attr('data-height'));
;
				if(new_height == 0){
					new_height = jQuery(gallery_new).find('img').height();
					jQuery(gallery_new).attr('data-height',new_height);
					jQuery(gallery_new).height(new_height);
				}else{
					jQuery(gallery_new).height(new_height);
				}
					
				//animate it
				jQuery(gallery_main).css('opacity',0);
				jQuery(gallery_main).animate({
					height: new_height,
					opacity:1,
				}, 500,function(){
					jQuery(the_gallery).attr('data-changing','no');
				});
				
				
				
			}
		}
		
		
	});
	
	jQuery('.gallery-image-bg').click(function(){
		jQuery(this).parent().find('.gallery-image-icon').show();
	});
	
	jQuery('.live_change_open').click(function(){
		if(jQuery('.live_change').hasClass('live_change_move') ){
			jQuery('.live_change').removeClass('live_change_move');
		}else{
			jQuery('.live_change').addClass('live_change_move');
		}
	});
	
	jQuery('.color-scheme').click(function(){
		var color = jQuery(this).data('color');
		jQuery('#live_color').val(color);
		jQuery('.color-scheme').removeClass('selected-color');
		jQuery(this).addClass('selected-color');
	});
});	
