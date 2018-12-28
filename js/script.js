'use strict';

var hotelSearchButton = document.querySelector(".hotel-search-button");
var hotelSearchForm = document.querySelector(".hotel-search-form");
var form = hotelSearchForm.querySelector('form');
var checkin = form.querySelector('#checkin');
var checkout = form.querySelector('#checkout');
var adults = form.querySelector('#adults');
var kids = form.querySelector('#kids');
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("adults");
} catch (err) {
  isStorageSupport = false;
}

hotelSearchForm.classList.remove("form-show");

hotelSearchButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  hotelSearchForm.classList.toggle("form-show");
});

document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (hotelSearchForm.classList.contains("form-show")) {
      hotelSearchForm.classList.remove("form-show");
    }
  }
});

form.addEventListener('submit', function (evt) {
  if (!adults.value || !kids.value || !checkin.value || !checkout.value) {
    evt.preventDefault();
  } else {
    console.log("validated");
     if (isStorageSupport) {
       localStorage.setItem('adults', adults.value);
       localStorage.setItem('kids', kids.value);
     }
   }
});
