
'use strict';

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { 
  if (modal) modal.classList.add('closed'); 
}

// modal eventListener
if (modalCloseOverlay) {
  modalCloseOverlay.addEventListener('click', modalCloseFunc);
}
if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', modalCloseFunc);
}

// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
if (toastCloseBtn && notificationToast) {
  toastCloseBtn.addEventListener('click', function () {
    notificationToast.classList.add('closed');
  });
}

// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    if (mobileMenu[i]) mobileMenu[i].classList.remove('active');
    if (overlay) overlay.classList.remove('active');
  }

  if (mobileMenuOpenBtn[i]) {
    mobileMenuOpenBtn[i].addEventListener('click', function () {
      if (mobileMenu[i]) mobileMenu[i].classList.add('active');
      if (overlay) overlay.classList.add('active');
    });
  }
}

// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  if (accordionBtn[i]) {
    accordionBtn[i].addEventListener('click', function () {

      const clickedBtn = this.nextElementSibling && this.nextElementSibling.classList.contains('active');

      for (let i = 0; i < accordion.length; i++) {
        if (clickedBtn) break;

        if (accordion[i] && accordion[i].classList.contains('active')) {
          accordion[i].classList.remove('active');
          if (accordionBtn[i]) accordionBtn[i].classList.remove('active');
        }
      }

      if (this.nextElementSibling) this.nextElementSibling.classList.toggle('active');
      this.classList.toggle('active');

    });
  }
}
function loginAjax() {
  $.ajax({
    url: 'login-form-ajax.html',
    type: 'GET', // POST, PUT, DELETE
    success: function (response) {
      $('#response-login').html(response);
    }
  });
}
function clearData() {
  $('#response-login').html('');
  $('#response-content').html('');
}
