$(function () {
    let showHeight = 200
    $(`.area`).css({
        display: 'block',
        opacity: 0
    })

    $(window).scroll(function () {
        $(`.area`).each(function () {
            $(this).offset()
            let areaTop = $(this).offset().top //.area物件和螢幕上方的距離
            //console.log(areaTop); 

            if ($(window).scrollTop() >= (areaTop + showHeight) - $(window).height()) {
                $(this).stop().animate({
                    opacity: 1
                }, 300)
            } else {
                $(this).stop().animate({
                    opacity: 0
                }, 300)
            }
        })
    })
})	