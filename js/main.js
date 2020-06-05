$(document).ready(function() {
    $('header a[href^="#"], .btn-scroll').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
    });
    $(".fancybox,.gal").fancybox();
});