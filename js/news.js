$(function () {
    $('.news-card').click(function (e) {
        e.preventDefault()
        var content = $(this).find('span:last-child').html();
        $('.box-content').html(content);
        $('.box').fadeIn();
    });

    $('.box').click(function (e) {
        if ($(e.target).hasClass('box')) {
            $(this).fadeOut();
        }
    });

    $('.close-box').click(function () {
        $('.box').fadeOut();
    });
})