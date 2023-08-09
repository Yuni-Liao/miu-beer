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
})	