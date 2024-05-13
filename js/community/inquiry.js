// const paging = document.querySelector('.inquiry-paging');
// let page = 1;
// const showContent = 7;
// let contentCount = document.querySelectorAll('.inquiry-contents').length;
// let endPage = Math.ceil((contentCount / showContent));

const inquiryModal = document.querySelector('.inquiry-modal');
const modalBtn = document.querySelector('.inquiry-button button[type="button"]');
console.log(inquiryModal);
console.log(modalBtn);

modalBtn.addEventListener('click', () => {
  inquiryModal.style.display = 'block';
})
