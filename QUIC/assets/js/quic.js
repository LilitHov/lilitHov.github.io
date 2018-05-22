$('#menuBtn').on('click','',function () {
    $('#myModal').modal({
        backdrop: 'static'
    })
});
var participants = 2;

$('.comm-icon').on('click',function(e){
    e.preventDefault();
    $('.comment-block').css('display','block')
});
$('.card-img-overlay').on('click', function (e) {
    e.preventDefault();
    $('.comment-block').css('display','none')
})
$(document).on('mouseover','.line-row', function(){
    var _this = $(this);
    _this.find('.plus-icon').css('display','inline-block');
});
$(document).on('mouseleave','.line-row', function(){
    var _this = $(this);
    _this.find('.plus-icon').css('display','none');
});
$(document).on('click', '.plus', function(e){
    e.preventDefault();
     var _this = $(this);
    participants++;
    if(participants < 5){
        $(this).parent().find('.fa-plus-circle').removeClass('fa-plus-circle').addClass('fa-minus-circle');
        $(this).addClass('minus').removeClass('plus');
        var html = _this.parent().parent().html();
        _this.parent().parent().remove();
        var div = '<div class="row">'+html+'</div>';
        $('.right-div').append(div);
    }

})
var figure = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {
    $('video', this).get(0).play();
}

function hideVideo(e) {
    $('video', this).get(0).pause();
}
$(document).on('click', '.minus', function(e){
    e.preventDefault();
    var _this = $(this);
    participants--;
    if(participants >= 1){
        $(this).parent().find('.fa-minus-circle').removeClass('fa-minus-circle').addClass('fa-plus-circle');
        $(this).addClass('plus').removeClass('minus');
        var html = _this.parent().parent().html();
        _this.parent().parent().remove();
        var div = '<div class="row">'+html+'</div>';
        $('.left-div').append(div);
    }

})
$( document ).ready(function() {
    $('.quic-tooltip').on('click touchstart', function(e){
        e.stopPropagation();
    });

    $('#tooltips').on('click touchstart', function(e){
        e.stopPropagation();

        var content = $(this).find('.quic-tooltip');
        content.toggle();
        $('body').on('click touchstart', function(){
            $('.quic-tooltip').hide();
        });
    });
});

$(document).ready(function(){
    $('[data-toggle="datepicker"]').datepicker({
        autoHide:true
    });
});
var datepicker;

$('[data-toggle="datepicker"]').on('click', function (e) {
    var _this = $('.datepicker-container');
    _this.removeClass('datepicker-hide');
    _this.addClass('datepicker-dropdown');
    _this.addClass('datepicker-top-left');
})
function hidePicker(){
    var _this = $('.datepicker-container');
    _this.addClass('datepicker-hide');
    _this.removeClass('datepicker-dropdown');
    _this.removeClass('datepicker-top-left');
}

$(document).ready(function(){
//	Social icons activation
    $('.social-line li').on('click touchstart', function(){
        if($(this).hasClass('active')){
			$(this).removeClass('active');
		} else {
			$(this).addClass('active');
		}
    });
	
//	Scroll arrows
	$('.scroll-arrow').on('click touchstart', function() {
		if($(this).data('scroll') == 'down') {
			$('html, body').animate({scrollTop:$(document).height()}, 'slow');
        	return false;
		} else if($(this).data('scroll') == 'up') {
			$('html, body').animate({scrollTop:0}, 'slow');
        	return false;
		}
	});
});
$('.overlay-div').on('click', function (e) {
    window.location.href = './feed-inapp-view.html'
});
$('.search-icon').on('click',function(){
    if($('.search').is(':visible')){
        $('.search').css('display','none');
    }else{
        $('.search').css('display','block');
    }
})
$('.livestream').on('click',function(){
    window.location.href ='livestream.html'
});


















