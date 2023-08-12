// 啤酒區
function adjustLayout() {
    let beerItems = document.querySelectorAll('.beer');
    let nextButton = document.querySelector('.fa-arrow-right-long');
    let backButton = document.querySelector('.fa-arrow-left-long')
    let currentIndex = 0;
    let buttonClicked = false
    if (window.innerWidth < 1024) {
        // 隱藏第一個以外的啤酒
        for (var i = 1; i < beerItems.length; i++) {
            beerItems[i].style.display = 'none';
        }
        nextButton.addEventListener('click', function () {
            if (!buttonClicked) {
                buttonClicked = true;
                // 隱藏目前顯示的啤酒
                beerItems[currentIndex].style.display = 'none';
                // 更新索引值，循環啤酒杯
                currentIndex = (currentIndex + 1) % beerItems.length;

                // 顯示下一個啤酒
                beerItems[currentIndex].style.display = 'block';

                setTimeout(() => {
                    buttonClicked = false;
                }, 500)
            }
        });

        // 預設顯示第一個啤酒
        beerItems[currentIndex].style.display = 'block';

        backButton.addEventListener('click', function () {
            if (!buttonClicked) {
                buttonClicked = true;
                beerItems[currentIndex].style.display = 'none';

                currentIndex = (currentIndex - 1 + beerItems.length) % beerItems.length;

                beerItems[currentIndex].style.display = 'block';
                setTimeout(() => {
                    buttonClicked = false;
                }, 500)
            }
        });
    } else {
        beerItems.forEach(items => {
            items.style.display = 'block';
        });
    }
}

window.onload = adjustLayout;
window.onresize = adjustLayout;


// 菜單區
$(function () {
    // 手機菜單彈窗
    $('.phonemenubtn').click(function (e) {
        e.preventDefault();
        let content = '';
        $(this).find('p').each(function () {
            content += '<p>' + $(this).html() + '</p>';
        });

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


    // 電腦菜單翻閱
    const frontPage = $("#front");
    const pages = $(".page");
    const pageone = $("#pageone")
    const pagetwo = $("#pagetwo");

    for (var i = 0; i < pages.length; i++) {
        var page = pages[i];
        if (i % 2 === 0) {
            $(page).css("z-index", pages.length - i);
        }
    }

    frontPage.click(function () {
        var pageNum = $(this).index() + 1;
        if (pageNum % 2 === 0) {
            $(this).removeClass("flipped");
            $(this).prev().removeClass("flipped");
            pagetwo.css("opacity", 0);

            pageone.css({
                "opacity": 0,
                "transition": "opacity 0.3s 1.5s"
            });
        } else {
            $(this).addClass("flipped");
            $(this).css("opacity", 0);
            $(this).prev().removeClass("flipped");
            $(this).next().css("opacity", 1);
            pageone.css({
                "opacity": 1,
                "transition": "opacity 0.3s 1.5s"
            });
            pagetwo.css("opacity", 1);
        }
    });

    $("#offmenu").click(function (e) {
        e.preventDefault();
        pageone.addClass("closemenu");
        frontPage.removeClass("flipped");
        frontPage.css("opacity", 1);
        pageone.css({
            "opacity": 0,
            "transition": "opacity 0.2s"
        });
        pagetwo.css("opacity", 0);
    });
})