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