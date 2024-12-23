const toggleBtn = document.querySelector('.navbar__toogleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click',()=>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});
function moveToPage1() {
    var nextPageUrl = "ferfume.html";

    window.location.href = nextPageUrl;
}
function moveToPage2() {
    var nextPageUrl = "hand.html";

    window.location.href = nextPageUrl;
}
function moveToPage3() {
    var nextPageUrl = "home_fargrance.html";

    window.location.href = nextPageUrl;
}
function moveToPage4() {
    var nextPageUrl = "our_story.html";

    window.location.href = nextPageUrl;
}
function moveToPage5() {
    var nextPageUrl = "faq.html";

    window.location.href = nextPageUrl;
}
function moveToPage6() {
    var nextPageUrl = "login.html";

    window.location.href = nextPageUrl;
}
function moveToPage7() {
    var nextPageUrl = "mypage.html";

    window.location.href = nextPageUrl;
}
function moveToPage8() {
    var nextPageUrl = "cate.html";

    window.location.href = nextPageUrl;
}
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header_bar');
    const toolButton = document.querySelector('.footer_open_btn_click');

    // 헤더를 토글하는 함수
    function toggleHeader() {
        if (header.style.top === '0px') {
            header.style.top = '-100px'; // 숨김
        } else {
            header.style.top = '0px'; // 보임
        }
    }

    // 툴 버튼 클릭 시 헤더 토글
    toolButton.addEventListener('click', function () {
        toggleHeader();
    });
});
toolButton.addEventListener('click', function () {
    toggleHeader();
    // 추가된 내용: 헤더가 숨겨진 경우, 다시 보이도록 함
    if (header.style.top === '-100px') {
        header.style.top = '0px';
    }
});
