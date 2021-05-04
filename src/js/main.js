var modalOpen = document.querySelector(".site-nav__link--contact");
var modal = document.querySelector(".modal");
var modalClose = document.querySelector(".modal__close");
var input = document.querySelector(".nav-header__search");
var inputSearch = document.querySelector(".nav-header__button-search");
var loginOpen = document.querySelector(".nav-header__button--1");
var modalLogin = document.querySelector(".modal-login");
var loginClose = document.querySelector(".modal-login__close");
var open = document.querySelector(".nav-header__button--2")
var signLogin = document.querySelector(".modal-sign");
var signClose = document.querySelector(".modal-sign__close");
var signUp = document.querySelector(".modal-sign__button--login");
var login = document.querySelector(".modal-login");
var create = document.querySelector(".modal-sign__button--create")
var signUpp = document.querySelector(".modal-login")

modalOpen.addEventListener("click", function() {
modal.classList.toggle("modal--active")
});
modalClose.addEventListener("click", function() {
    modal.classList.remove("modal--active");
});

open.addEventListener("click", function() {
    signLogin.classList.toggle("modal-sign--active")
    });

signClose.addEventListener("click", function() {
    signLogin.classList.remove("modal-sign--active");
});
inputSearch.addEventListener("click", function() {
    input.classList.toggle("nav-header__button-search--active");
});
loginOpen.addEventListener("click", function() {
    modalLogin.classList.toggle("modal-login--active");
});
loginClose.addEventListener("click", function() {
    modalLogin.classList.toggle("modal-login--active")
});
signUp.addEventListener("click", function() {
    login.classList.toggle("modal-login--active")
});
create.addEventListener("click", function() {
    signUpp.classList.toggle("modal-sign--active")
});