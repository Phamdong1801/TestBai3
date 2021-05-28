 
 $(document).ready(function() {
 	 /*---For Login and Sign-up----------------------------*/
    $(document).on('click','.user,.already-account',function(){
        $('.form').addClass('login-active').removeClass('sign-up-active')
    });
 
    $(document).on('click','.sign-up-btn',function(){
        $('.form').addClass('sign-up-active').removeClass('login-active')
    });
 
    $(document).on('click','.form-cancel',function(){
        $('.form').removeClass('login-active').removeClass('sign-up-active')
    });

    /*click heart*/

 	$('.heart').click(function(){
    	$('.heart').css('color','red');
	});

	/*click setting*/
	$('.showsetting').click(function(){
    	$('.setting').css('display','block');
	});

	$('.out').click(function(){
    	$('.setting').css('display','none');
	});

    /*click cart*/
  $('.showcart').click(function(){
      $('.cart').css('display','block');
      $('.cart').css('opacity','1');
      $('.header').css('opacity','0.5');

  });

  $('.cartform-cancel').click(function(){
      $('.cart').css('display','none');
      $('.header').css('opacity','1');
  });

	/*blog slider*/
	$(document).ready(function() {
		$('.blog_new').slick({
  		slidesToShow: 3,
  		slidesToScroll: 1,
  		autoplay: true,
  		autoplaySpeed: 2000,
		});
	});
});