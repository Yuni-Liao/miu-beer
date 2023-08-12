$(function () {
    $('.news-card').click(function () {
        var content = $(this).find('span:nth-child(3)').html();
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