 const hireBtn = document.getElementById("hireBtn");

hireBtn.addEventListener("click", () => {
  alert("Thank you for your interest! Please contact me via email or LinkedIn.");
});

const typingText = "B.Tech Student | Web Developer | Tech Enthusiast";
let index = 0;

function typingEffect() {
  if (index < typingText.length) {
    document.querySelector(".typing").innerHTML += typingText.charAt(index);
    index++;
    setTimeout(typingEffect, 80);
  }
}
typingEffect();

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach(card => {
  const level = card.getAttribute("data-level");
  const circle = card.querySelector(".circle");
  const span = circle.querySelector("span");
  let count = 0;

  const interval = setInterval(() => {
    if (count <= level) {
      circle.style.background =
        `conic-gradient(var(--primary) ${count * 3.6}deg, #1e293b 0deg)`;
      span.innerText = count + "%";
      count++;
    } else {
      clearInterval(interval);
    }
  }, 15);
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

const eduCards = document.querySelectorAll(".edu-card");

window.addEventListener("scroll", () => {
  eduCards.forEach(card => {
    if (card.getBoundingClientRect().top < window.innerHeight - 100) {
      card.classList.add("active");
    }
  });
});
