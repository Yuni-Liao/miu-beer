var laContent = document.getElementById('la-info');
var laSide = document.getElementById('la-side-info');
var piContent = document.getElementById('pi-info');
var piSide = document.getElementById('pi-side-info');
var paContent = document.getElementById('pa-info');
var paSide = document.getElementById('pa-side-info');
var stContent = document.getElementById('st-info');
var stSide = document.getElementById('st-side-info');
var weContent = document.getElementById('we-info');
var weSide = document.getElementById('we-side-info');
var bow = document.querySelector('.bow h2');
var largeImage = document.getElementById('large');
var allBeerImgs = document.querySelectorAll('.beer .pic img');
var allBeerTxt = document.querySelectorAll('.beer .txt');
var clickedImg;
var clickedTxt;


function showInfo(content, side, name) {
    // 先隱藏所有 info 和 side-info 元素
    var allInfo = document.querySelectorAll('.info');
    var allSideInfo = document.querySelectorAll('.side-info');
    allInfo.forEach(info => info.style.display = 'none');
    allSideInfo.forEach(sideInfo => sideInfo.style.display = 'none');
    allBeerImgs.forEach(img => img.style.opacity = 0.5);
    allBeerTxt.forEach(img => img.style.opacity = 0);
    // 選中的beer img opacity 設為 1
    clickedImg.querySelector('img').style.opacity = 1;
    // 選中的beer 名稱要顯示
    clickedTxt.style.opacity = 1;
    // 顯示目標 info 和 side-info 元素
    content.style.display = 'block';
    side.style.display = 'block';

    // 修改標題文字
    bow.textContent = name;
}
//點小圖換大圖
function showLarge(e) {
    largeImage.src = e.target.src;
}

function init() {
    allBeerImgs.forEach(img => img.style.opacity = 0.5);
    allBeerTxt.forEach(txt => txt.style.opacity = 0);
    let pics = document.getElementsByClassName('pics');
    for (let i = 0; i < pics.length; i++) {
        pics[i].onclick = function (e) {
            showLarge(e);
            //以class的第一個名稱為基準
            var className = e.target.classList[1];
            clickedImg = e.target.closest('.pic');
            clickedTxt = clickedImg.querySelector('.txt');
            switch (className) {
                case 'la':
                    showInfo(laContent, laSide, '淡色拉格啤酒', clickedImg, clickedTxt);
                    break;
                case 'pi':
                    showInfo(piContent, piSide, '皮爾森啤酒', clickedImg, clickedTxt);
                    break;
                case 'pa':
                    showInfo(paContent, paSide, '淡色艾爾啤酒', clickedImg, clickedTxt);
                    break;
                case 'st':
                    showInfo(stContent, stSide, '司陶特啤酒', clickedImg, clickedTxt);
                    break;
                case 'we':
                    showInfo(weContent, weSide, '小麥啤酒', clickedImg, clickedTxt);
                    break;
                default:
                    bow.textContent = '';
                    laContent.style.display = 'none';
                    laSide.style.display = 'none';
                    piContent.style.display = 'none';
                    piSide.style.display = 'none';
                    paContent.style.display = 'none';
                    paSide.style.display = 'none';
                    stContent.style.display = 'none';
                    stSide.style.display = 'none';
                    weContent.style.display = 'none';
                    weSide.style.display = 'none';
                    break;
            }
        }
    }
};

window.addEventListener("load", init, false);