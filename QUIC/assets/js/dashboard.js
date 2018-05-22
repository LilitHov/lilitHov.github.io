$(document).ready(function(){
//	Dark and Light styles
	$('.styletrigger').on('click touchstart', function(){
		if($(this).hasClass('active')){
			return;
		} else if($(this).hasClass('dark')){
			$(this).addClass('active');
			$(this).siblings('.light').removeClass('active');
			$('.lightdark-img').attr("src","../assets/images/landing/monitor black.png");
			$('.lightdark-phone').attr("src","../assets/images/landing/Black Matte 2.png");
			$('header').addClass('darkstyle');
			$('footer').addClass('darkstyle');
			$('.herodash').addClass('darkstyle');
			$('.free').addClass('darkstyle');
		} else if($(this).hasClass('light')){
			$(this).addClass('active');
			$(this).siblings('.dark').removeClass('active');
			$('.lightdark-img').attr("src","../assets/images/landing/monitor.png");
			$('.lightdark-phone').attr("src","../assets/images/landing/White Matte 2.png");
			$('header').removeClass('darkstyle');
			$('footer').removeClass('darkstyle');
			$('.herodash').removeClass('darkstyle');
			$('.free').removeClass('darkstyle');
		}
	});
});