Cv = function() {};

Cv.prototype.animate = function() {
	var heightBeforeSlides=$('header.home').height()+$('#about-me').height();
    var nbElemShownBeforeSlides = 0;

    var _ret = this.animSlideByHeight(heightBeforeSlides, nbElemShownBeforeSlides);

	var slides = $('.slide');
    $(window).scroll(bind(this, function () {

        if($(window).scrollTop()>$('header.home').height()/5) {
            $('#about-me').addClass('no-blur');
            $('header.home').addClass('blur');
        }else {
            $('header.home').removeClass('blur');
        }

        if(_ret.heightSlides<$(window).scrollTop()+$(window).height()) {
            _ret.heightSlides+=$(slides[_ret.nbElemShown]).height();
            $(slides[_ret.nbElemShown]).addClass('slide-anim');
            _ret.nbElemShown++;
        }

        if($(window).scrollTop()>$('header.home').height()) {
            $('.header-nav').addClass('nav-show');
	        $('.header-nav div').addClass('anim');
        }else {
            $('.header-nav').removeClass('nav-show');
	        $('.header-nav div').removeClass('anim');
        }

        if($(window).scrollTop()==0) {
            $('.slide').removeClass('slide-anim');
            _ret = this.animSlideByHeight(heightBeforeSlides, nbElemShownBeforeSlides);
            $('#about-me').removeClass('no-blur');
        }
    }));

    $('.content_link').click(function () {
        $('.slide').addClass('slide-anim');
        _ret.nbElemShown = $('.slide-anim').length;
    });

    $('button#slider').click(function () {
        $('.slide-menu').toggleClass('slide-menu-on');
    });
};

Cv.prototype.animSlideByHeight = function (heightSlides, nbElemShown) {
	var slides = $('.slide');
	for (var i = nbElemShown; i < slides.length; i++) {
		heightSlides += $(slides[i]).height();
		if (heightSlides < $(window).height()) {
			$(slides[i]).addClass('slide-anim');
			nbElemShown++;
		}else {
			break;
		}
	}
	return {heightSlides: heightSlides, nbElemShown: nbElemShown};
};
