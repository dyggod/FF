$(function () {
    $('#navSlide b').click(function () {
        var sub = $(this).parents('li.nli').children('.sub');
        if ($(this).hasClass('hover')) {
            $(this).removeClass('hover');
            sub.slideUp();
        } else {
            $(this).addClass('hover');
            sub.slideDown();
        }
    });
});