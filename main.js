console.log("js 로딩 완료");

let hamButton = document.getElementById('toggle-button');
let navMenu = document.querySelector('.navMenu-wrapper');
let loginBtn = document.querySelector('#login_button');



hamButton.addEventListener('click', function () {
  navMenu.classList.toggle('navDivShow');
});

// 네비바 스크롤 이벤트
window.addEventListener('scroll', () => {
  let scrollLocation = document.documentElement.scrollTop;
  if (scrollLocation > 0) {
    document.querySelector('.navContainer').classList.remove('bgColor-transparent');
    document.querySelector('.navContainer').classList.add('navBacgroundColor');
  } else {
    document.querySelector('.navContainer').classList.remove('navBacgroundColor');
    document.querySelector('.navContainer').classList.add('bgColor-transparent');
  }
});

function loginPageMove() {
  location.href = 'logIn.html';
}

// 로그인 버튼 클릭 이벤트
loginBtn.addEventListener('click', loginPageMove);

//게시글 답글 클릭 Form show
let replyButton = document.querySelector(".reply-add-button");
replyButton.addEventListener('click',function(e){
  e.preventDefault();
  console.log(e.target);
  let replyFormBox = document.querySelector(".reply-commentForm-box");
  replyFormBox.style.display ="block";

});