Cv = function() {};

Cv.prototype.animate = function() {
	$('header').css('height', $(window).height());
	var heightBeforeSlides=$('header').height()+$('#about-me').height();
	var nbElemShown=0;
	var that=this;

	var _ret=this.animSlideByHeight(heightBeforeSlides, nbElemShown);

	var slides = $('.slide');
	$(window).scroll(function() {

		if(_ret.heightSlides<$(window).scrollTop()+$(window).height()) {
			_ret.heightSlides+=$(slides[_ret.nbElemShown]).height();
			$(slides[_ret.nbElemShown]).addClass('slide-anim');
			_ret.nbElemShown++;
			console.log(_ret.nbElemShown);
		}
		if($(window).scrollTop()==0) {
			$('.slide').removeClass('slide-anim');
			_ret = that.animSlideByHeight(heightBeforeSlides, nbElemShown);
		}
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
