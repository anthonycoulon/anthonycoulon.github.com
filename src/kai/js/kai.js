Kai = function() {

    $('button#slider').click(this.animSlideMenu);
    $('.slide-menu ul li a').click(this.closeSlideMenu);

    $('#send').click(bind(this, function() {

        $('span.error').html('');

       var nom = $('#nom').val();
       var email = $('#email').val();
       var sujet = $('#sujet').val();
       var message = $('#message').val();

       this.checkEmpty(nom, 'error-nom');
       this.checkEmpty(email, 'error-email');
       this.checkEmail(email, 'error-email');
       this.checkEmpty(sujet, 'error-sujet');
       this.checkEmpty(message, 'error-message');

    }));
};

Kai.prototype.checkEmpty = function(val, field) {
    if(val =='') {
        $('span.'+field).html('Ce champ est obligatoire');
    }
};
Kai.prototype.checkEmail = function(val, field) {
    if(!val.match('[a-zA-Z0-9.-_%+]+@[a-zA-Z0-9.-_%+]+')) {
        $('span.'+field).html('Ce champ n\'est pas au bon format');
    }
};

Kai.prototype.animSlideMenu = function () {
    $('.slide-menu').toggleClass('slide-menu-on');
};
Kai.prototype.closeSlideMenu = function () {
    $('.slide-menu').removeClass('slide-menu-on');
};