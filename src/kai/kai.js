Kai = function() {

    $('button#slider').click(this.animSlideMenu);
    $('.slide-menu ul li a').click(this.closeSlideMenu);
};


Kai.prototype.animSlideMenu = function () {
    $('.slide-menu').toggleClass('slide-menu-on');
};
Kai.prototype.closeSlideMenu = function () {
    $('.slide-menu').removeClass('slide-menu-on');
};