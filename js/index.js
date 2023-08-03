// 最新消息輪播
// window.addEventListener('load', function () {
//     let newsContainer = document.querySelector('.news-card-container');
//     let newsCards = document.querySelectorAll('.news-card');
//     let btnLeft = document.querySelector('.arrow-left');
//     let btnRight = document.querySelector('.arrow-right');
//     // -----------btnLeft.onclick;
//     btnLeft.addEventListener('click', function () {
//         let last = newsCards[newsCards.length - 1];
//         newsContainer.insertBefore(last, newsCards[0]);
//     });
//     // -----------btnRight.onclick;
//     btnRight.addEventListener('click', function () {
//         newsContainer.appendChild(newsCards[0]);
//     });
// })

// -----------------------
// let currentIndex = 0; //初始化圖片索引
// let offset = 0; //偏移量
// const intervalTime = 2000; //輪播時間間隔2秒
// const container = document.querySelector('.feedback-container');
// const cards = document.querySelectorAll('.feedback-card');
// const cardsTotal = document.querySelectorAll('.feedback-card').length;
// const slideWidth = cards[0].clientWidth; //return每張卡片的寬度

// function cardsNext() {

// }

// //設定計時器自動輪播
// const autoTool = setInterval(cardsNext, intervalTime);

// window.addEventListener('load', function () {
//     cardsNext();
// })


// ---------------------
// let banner = document.querySelectorAll("#bang");
// let banbox = document.querySelector(".banner_inner_box_group");
// let arr = document.querySelectorAll("#bang .bangli");
// let index = 0;

// $(banner).css("transition", "0.8s ease");
// play();
// function play() {

//     $(".barbody").css("animation", "bar 5s linear infinite");
//     if ($(window).width() > 768) {
//         $(".bangli").css("animation", "small 5s linear infinite");
//     }
//     $(banner).css("transition", "0.8s ease");
//     $(banbox).css("transition", "0.6s 0.2s ease");


//     if (index < arr.length) {
//         $(banner).css("left", "-" + (100 * index) + "%");
//         $(banbox).css("left", "-" + (100 * index) + "%");
//         if (index == arr.length - 1) {
//             setTimeout(function () {
//                 index = 0;
//                 $(banner).css("transition", "0s");
//                 $(banner).css("left", "-" + (100 * index) + "%");
//                 $(banbox).css("transition", "0s");
//                 $(banbox).css("left", "-" + (100 * index) + "%");
//             }, 800);
//         }
//     }
// }
// // $(window).resize(function() {
// //     windowSize();
// // });


// setInterval(function () {
//     index++;
//     play();
// }, 5000);

// // console.log(arr.length);