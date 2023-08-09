$(function () {
    let divWidth = $('#sliderBoard').width()
    let imgCount = $('#content li').length
    // alert(imgCount)

    for (let i = 0; i < imgCount; i++) {
        $('#contentButton').append(`<li></li>`)
    }

    $('#contentButton li:first').addClass('clicked')

    $('#content li').width(divWidth) // li的寬度
    $('#content').width(divWidth * imgCount) //ul的寬度

    let index = 0
    let timer = setInterval(moveToNext, 5000)
    $(`#contentButton li`).click(function () {
        clearInterval(timer)
        //清除計時器,不然用戶點擊後會馬上跳轉下張
        index = $(this).index() //先抓到點擊按鈕的index值

        $('#content').animate({
            left: index * divWidth * -1
            //按index時 圖片往左推幾個div的寬
        })

        $(this).addClass('clicked')
        $(`#contentButton li`).not(this).removeClass('clicked')

        timer = setInterval(moveToNext, 5000) //重啟計時器
    })
    function moveToNext() {
        if (index < imgCount - 1) { //要控制index輪播的範圍,
            index++
        } else {
            index = 0
        }

        $('#content').animate({
            left: index * divWidth * -1
        })
        $(`#contentButton li:eq(${index})`).addClass('clicked')
        $(`#contentButton li`).not(`:eq(${index})`).removeClass('clicked')
    }
});