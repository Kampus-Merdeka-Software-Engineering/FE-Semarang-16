'use strict';



/**
 * add eventListener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PRELOADER
 */

const preloader = document.querySelector("[data-preloader]");
const circle = document.querySelector("[data-circle]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  circle.style.animation = "none";
  document.body.classList.add("loaded");
});



/**
 * NAVBAR TOGGLER FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * 
 * add active class on header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

const headerActive = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

window.addEventListener("scroll", headerActive);



// For Login Page
const loginForm = document.getElementById('login-form');
      const usernameInput = document.getElementById('username');
      const passwordInput = document.getElementById('password');

      loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Mencegah pengiriman formulir ke server

        const username = usernameInput.value;
        const password = passwordInput.value;
        console.log('Username:', username);
        console.log('Password:', password);

        window.location.href = './Home.html';
      });


//For Signup Page

function redirectToLogin() {
  window.location.href = './LoginPage.html'; 

// Temukan link "Back to Login" berdasarkan ID
const loginLink = document.getElementById('loginLink');

// Tambahkan event listener untuk mengarahkan ke halaman login saat link ditekan
loginLink.addEventListener('click', redirectToLogin);
}



// For FAQ
function showMoreQuestions() {
  window.location.href = "./Faq.html";
}

function toggleAnswer(questionNumber) {
  const answer = document.querySelector(`#answer${questionNumber}`);
  
  if (answer.style.display === 'none' || answer.style.display === '') {
      answer.style.display = 'block';
  } else {
      answer.style.display = 'none';
  }
}

// For course category
const courseForm = document.getElementById('course-form');

// Add event listener for form submission
courseForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // You can add your form submission logic here
    // For example, you can send the form data to a server using AJAX
    // Here's a simple alert for demonstration purposes
    alert('Terima kasih! Anda telah mendaftar ke kursus Matematika (SD).');
    
    // Reset the form after submission
    courseForm.reset();
});

 
