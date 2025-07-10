window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const navLinks = document.getElementById("navLinks");
  const registerBtn = document.getElementById("registerBtn");

  if (window.scrollY > 50) {
    navbar.classList.add("shrink");
    navLinks.classList.add("scrolled");
    registerBtn.classList.add("scrolled");
  } else {
    navbar.classList.remove("shrink");
    navLinks.classList.remove("scrolled");
    registerBtn.classList.remove("scrolled");
  }

  // Scroll line width
  let winScroll = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.querySelector(".scroll-line").style.width = scrolled + "%";
});

  const animatedElements = document.querySelectorAll('.animate-left, .animate-right');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.4  // fire when 40% of the section is visible
  });

  animatedElements.forEach(el => observer.observe(el));

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach(slide => slide.classList.remove("show"));
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].classList.add("show");
  setTimeout(showSlides, 4000); // Change every 4 sec
}

// Start slideshow
showSlides();

const track = document.getElementById("carouselTrack");
  const cards = Array.from(track.children);
  const btnLeft = document.getElementById("prevBtn");
  const btnRight = document.getElementById("nextBtn");

  const itemsPerView = 5;
  const cardStyle = getComputedStyle(cards[0]);
  const cardWidth = cards[0].offsetWidth + parseInt(cardStyle.marginRight || 40);
  let currentIndex = itemsPerView;

  // Clone first and last N cards
  const firstClones = cards.slice(0, itemsPerView).map(card => card.cloneNode(true));
  const lastClones = cards.slice(-itemsPerView).map(card => card.cloneNode(true));

  // Append and prepend clones
  firstClones.forEach(clone => track.appendChild(clone));
  lastClones.reverse().forEach(clone => track.insertBefore(clone, track.firstChild));

  const totalCards = track.children.length;

  // Set initial position (jump to real first slide)
  track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;

  function moveToIndex(index) {
    track.style.transition = "transform 0.6s ease-in-out";
    track.style.transform = `translateX(-${cardWidth * index}px)`;
    currentIndex = index;
  }

  btnRight.addEventListener("click", () => {
    if (currentIndex >= totalCards - itemsPerView) return;
    moveToIndex(currentIndex + itemsPerView);
  });

  btnLeft.addEventListener("click", () => {
    if (currentIndex <= 0) return;
    moveToIndex(currentIndex - itemsPerView);
  });

  track.addEventListener("transitionend", () => {
    // Reset without animation when at cloned slides
    if (currentIndex === 0) {
      track.style.transition = "none";
      currentIndex = cards.length;
      track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
    }

    if (currentIndex === totalCards - itemsPerView) {
      track.style.transition = "none";
      currentIndex = itemsPerView;
      track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
    }
  });

  window.addEventListener("resize", () => {
    track.style.transition = "none";
    track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
  });
  

  
window.addEventListener('DOMContentLoaded', () => {
  const overlayImg = document.querySelector('.top-img');
  setTimeout(() => {
    overlayImg.style.opacity = '1';
    overlayImg.style.transform = 'scale(1)';
  }, 500);
});

  window.addEventListener('scroll', () => {
    const section = document.querySelector('.new-section');
    const image = document.querySelector('.new-center-img');
    const rect = section.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom > 0) {
      section.classList.add('animate');
    } else {
      section.classList.remove('animate');
    }
  });



