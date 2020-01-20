import './pagination.scss';

document.addEventListener('DOMContentLoaded', function(){
  const pagination = document.querySelector('.pagination');

  if (pagination) {
    
    let itemsList = document.querySelectorAll('.pagination__list .pagination__item');

    function doActive() {
      let firstPage = document.querySelector('.pagination__list .pagination__link');
      firstPage.classList.add('pagination__link_active');
    }
    
    function addDotsItem() {
      let lastItem = itemsList[itemsList.length - 2];
      lastItem.insertAdjacentHTML('beforebegin', '<li class="pagination__item pagination__item_dots"><a class="pagination__link">...</a></li>');
    }
    
    function hidePages() {
      addDotsItem();
      for (let i = 0; i < itemsList.length; i++) {
        if (i > 2 && i < itemsList.length - 2) {
          itemsList[i].hidden = true;
        }
      }
    }
    
    doActive();
    if (itemsList.length > 5) {
      hidePages();
    }
  
  }
});


