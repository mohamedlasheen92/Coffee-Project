
// Toggle Menubar
let menuBar = document.querySelector('header .icons .menu');
let navbar = document.querySelector('header .nav');

menuBar.onclick = function (event) {
  event.preventDefault();
  navbar.classList.toggle('active');
}

// Toggle Create Account
let account = document.querySelector('header .account');
let accountBox = document.querySelector('.login');
let closeAccount = document.querySelector('.login .close');

account.onclick = function (event) {
  event.preventDefault();
  accountBox.classList.add('active');
}
closeAccount.onclick = function (event) {
  event.preventDefault();
  accountBox.classList.remove('active');
}

const header = document.querySelector('header');
window.onscroll = function () {
  if (window.scrollY > 0) header.classList.add('active');
  else header.classList.remove('active');
  accountBox.classList.remove('active');
  navbar.classList.remove('active');
}