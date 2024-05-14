const paging = document.querySelector('.inquiry-paging');
let page = 1;
const showContent = 7;
let contentCount = document.querySelectorAll('inquiry-contents').length;
let endPage = Math.ceil((contentCount / showContent));

