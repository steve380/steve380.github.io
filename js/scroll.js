$(document).ready(function() {
    $('#main-nav li a').click(function(e) {

        var targetHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(targetHref).offset().top
        }, 800);

        e.preventDefault();
    });
});