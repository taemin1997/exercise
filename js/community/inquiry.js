// const paging = document.querySelector('.inquiry-paging');
// let page = 1;
// const showContent = 7;
// let contentCount = document.querySelectorAll('.inquiry-contents').length;
// let endPage = Math.ceil((contentCount / showContent));

const inquiryModal = document.querySelector('.inquiry-modal');
const modalBtn = document.querySelector('.inquiry-button button[type="button"]');
const modalExitBtn = document.querySelector('.inquiry-modal-btns button[type="button"]');
const inquiryModalTitle = document.querySelector('.inquiry-modal-title input[type="text"]');
const inquiryAnswerModalDelete = document.querySelector('.inquiry-modal-answer-delete');
const inquiryAnswerModalexit = document.querySelector('.inquiry-modal-answer-exit');
const inquiryAnswerModal = document.querySelector('#inquiry-modal-answer');
const answerModalBtn = document.querySelectorAll('.inquiry-content-button');


modalBtn.addEventListener('click', () => {
  inquiryModal.style.display = 'flex';
});

modalExitBtn.addEventListener('click', () => {
  inquiryModal.style.display = 'none';
});


inquiryAnswerModalDelete.addEventListener('click', ()=>{
  let check = confirm('삭제하겠습니까?');
  if(check){

  }else{
    inquiryAnswerModal.style.display = 'none';
  }
});

inquiryAnswerModalexit.addEventListener('click', () => {
  inquiryAnswerModal.style.display = 'none';
});

answerModalBtn.forEach((btn) => {
  btn.addEventListener('click', () =>{
    inquiryAnswerModal.style.display = 'block';
  })
});


const modalTitle = document.querySelector('.inquiry-modal-title input[type="text"]');
const modalContent = document.querySelector('.inquiry-modal-content textarea');
const modalSubmit = document.querySelector('.inquiry-modal-btns button[type="submit"]');

// console.log(modatContent);
// console.log(modalTitle);
console.log(modalSubmit);

modalSubmit.addEventListener('click', () =>{
  if(modalContent.value === "" || modalTitle.value === ""){
    alert('제목 또는 내용 입력');
    inquiryModal.style.display = 'flex';
    if(modalContent.value === ""){
      modalContent.style.border = "none";
      modalContent.style.outline = "1px solid red";

      modalContent.addEventListener('keydown', () => {
        modalContent.style.outline = "1px solid skyblue"; 
      });
    }
    if(modalTitle.value === ""){
      modalTitle.style.border = "none";
      modalTitle.style.outline = "1px solid red";

      modalTitle.addEventListener('keydown', () => {
        modalTitle.style.outline = "1px solid skyblue";
      })
    }
  }else{
    let submit = confirm("등록하시겠습니까?");
    if(submit){
      alert("등록완료");
      inquiryModal.style.display = 'none';
    }else{
      inquiryModal.style.display = 'flex';
    }
  }
})

const inquiryPrev = document.querySelector('.inquiry-prev');
const inquiryNext = document.querySelector('.inquiry-next');
const bannerImg = document.querySelectorAll('.inquriy-banner-img');
let bannerWidth = 900;
let currentIdx = 0;
let imgLength = bannerImg.length;

// console.log(inquiryNext);
// console.log(inquiryPrev);
// console.log(bannerImg);

inquiryNext.addEventListener('click', () =>{
  currentIdx++;
  bannerImg.forEach((img) =>{
    img.style.left = -(currentIdx * bannerWidth) + "px";
    img.style.transition = "0.5s ease";
    checkEnd();
  })
});
inquiryPrev.addEventListener('click', () =>{
  currentIdx--;
  bannerImg.forEach((img) =>{
    img.style.left = -(currentIdx * bannerWidth) + "px";
    img.style.transition = "0.5s ease";
    checkEnd();
  })
});

function checkEnd(){
  if(currentIdx <= 0){
    inquiryPrev.style.display = 'none';
  }else{
    inquiryPrev.style.display = 'block';
  }

  if(currentIdx >= imgLength - 1){
    inquiryNext.style.display = 'none';
  }else{
    inquiryNext.style.display = 'block';
  }
}