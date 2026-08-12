/*=====================================================
  VIJAY PHARMACY MEDICAL STORE
  script.js
======================================================*/

// =========================
// Sticky Header Shadow
// =========================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
        header.style.background = "#ffffff";
    } else {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)";
    }

});

// =========================
// Smooth Scroll
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// =========================
// Active Navigation
// =========================

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});

// =========================
// Buy Button
// =========================

const buyButtons = document.querySelectorAll(".medicine-card button");

buyButtons.forEach(button => {

    button.addEventListener("click", function () {

        alert("✅ Product added successfully!\n\nThank you for choosing Vijay Pharmacy.");

    });

});

// =========================
// Order Button
// =========================

const orderBtn = document.querySelector(".btn");

if(orderBtn){

orderBtn.addEventListener("click", function(e){

e.preventDefault();

alert("🛒 Online Ordering Coming Soon!");

});

}

// =========================
// Hero Button
// =========================

const heroBtn = document.querySelector(".hero-btn");

if(heroBtn){

heroBtn.addEventListener("click", function(){

console.log("Shop Button Clicked");

});

}

// =========================
// Scroll Animation
// =========================

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform = "translateY(0)";

}

});

});

const hiddenElements = document.querySelectorAll(

".card,.medicine-card,.service,.review,.question"

);

hiddenElements.forEach(el => {

el.style.opacity="0";

el.style.transform="translateY(50px)";

el.style.transition="all .8s ease";

observer.observe(el);

});

// =========================
// Contact Form Validation
// =========================

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name");

let email=document.getElementById("email");

let message=document.getElementById("message");

if(

name.value=="" ||

email.value=="" ||

message.value==""

){

alert("Please fill all fields.");

return;

}

if(!email.value.includes("@")){

alert("Enter valid email.");

return;

}

alert("✅ Message Sent Successfully!");

form.reset();

});

}

// =========================
// Typing Effect
// =========================

const heading=document.querySelector(".hero-content h1");

if(heading){

heading.style.animation="fadeUp 1s";

}

// =========================
// Digital Clock
// =========================

function updateClock(){

const now=new Date();

let time=now.toLocaleTimeString();

console.log(time);

}

setInterval(updateClock,1000);

// =========================
// Welcome Message
// =========================

window.onload=function(){

console.log("Welcome to Vijay Pharmacy");

};

// =========================
// End of Script
// =========================