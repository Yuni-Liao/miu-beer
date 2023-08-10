window.onload = function () {
    if (window.innerWidth < 1024) {
        var beerItems = document.querySelectorAll('.beer');
        var nextButton = document.querySelector('.fa-arrow-right-long');
        var backButton = document.querySelector('.fa-arrow-left-long')
        var currentIndex = 0;

        // 隱藏第一個以外的啤酒
        for (var i = 1; i < beerItems.length; i++) {
            beerItems[i].style.display = 'none';
        }
        nextButton.addEventListener('click', function () {
            // 隱藏目前顯示的啤酒
            beerItems[currentIndex].style.display = 'none';
            // 更新索引值，循環啤酒杯
            currentIndex = (currentIndex + 1) % beerItems.length;

            // 顯示下一個啤酒
            beerItems[currentIndex].style.display = 'block';
        });

        // 預設顯示第一個啤酒
        beerItems[currentIndex].style.display = 'block';

        backButton.addEventListener('click', function () {
            beerItems[currentIndex].style.display = 'none';

            currentIndex = (currentIndex - 1 + beerItems.length) % beerItems.length;

            beerItems[currentIndex].style.display = 'block';
        })
    }
}

// 手機菜單彈窗

$(function () {
    $('.phonemenubtn').click(function (e) {
        e.preventDefault()
        var content = $(this).find('span').html();
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