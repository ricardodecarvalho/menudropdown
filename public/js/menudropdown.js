$(document).ready(function () {
    $("ul li").hover(function () {
        $(this).addClass("active");
        $("ul:first", this).slideToggle();
    }, function () {
        $(this).removeClass("active");
        $('ul:first', this).slideToggle();
    });
});