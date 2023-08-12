$(function () {
    $('.owned .pic').mousemove(function (e) {
        //偵測螢幕上的X,Y座標位置

        let theText = $(this).attr('data-text')
        $(`#theDiv`).show().text(theText).css({ //當滑鼠滑過theDiv時要顯示屬性的文字內容
            left: e.pageX + 10, //將他放在游標右邊
            top: e.pageY + 10 //將他放在游標右邊的下方
        })
    }).mouseout(function () {
        $(`#theDiv`).hide()
    })

    // 滾動動畫
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