'use strict';

var hotelSearchButton = document.querySelector('.hotel-search-button');
var hotelSearchForm = document.querySelector('.hotel-search-form');

hotelSearchButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  hotelSearchForm.classList.toggle('form-show');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (hotelSearchForm.classList.contains('form-show')) {
      hotelSearchForm.classList.remove('form-show');
    }
  }
});
