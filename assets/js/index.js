// Burger show

window.onload = function () {
  const mobileMenuButton = document.getElementById('mobile_menu_icon');
  const mobileMenu = document.getElementById('mobile_menu');
  const closeMenu = document.querySelector('.mobile_menu-close');
  const overlay = document.querySelector('.overlay');
  const nav = document.querySelector(".nav_link");

  mobileMenuButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('show-menu');
    overlay.classList.toggle('overlay-visible');
    document.body.classList.toggle('overflow-hidden');
  });

  closeMenu.addEventListener('click', function () {
    mobileMenu.classList.remove('show-menu');
    overlay.classList.remove('overlay-visible');
    document.body.classList.remove('overflow-hidden');
  });
};

// Scroll to top

$("#go-up").click(() => {
    $("html, body").animate({
        scrollTop: 0
    }, "slow")
    
    return false
})

goUpScroll()

$(window).on('scroll resize', () => {
    goUpScroll()
})

function goUpScroll() {
    let topScroll = $(this).scrollTop()

    if (topScroll) {
        $("#go-up").addClass("active")
    } else {
        $("#go-up").removeClass("active")
    }
}


// AOS animation

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// Toptar 

function toggleContent(programId) {
    const content = document.getElementById(programId).getElementsByClassName('top_content')[0];
    const btn = document.getElementById(programId).getElementsByClassName('collapse-btn')[0];

    if (content.style.display === 'none' || getComputedStyle(content).display === 'none') {
        content.style.display = 'block';
        btn.classList.add('expand-btn');
    } else {
        content.style.display = 'none';
        btn.classList.remove('expand-btn');
    }
}

// Gallery 
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  const transformValue = -currentIndex * 100 + '%';
  document.querySelector('.slider').style.transform = 'translateX(' + transformValue + ')';
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

setInterval(nextSlide, 3000);


// Slider Cards 
let currentIndexs = 0;
let startX = 0;

function handleTouchStart(event) {
  startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
  const moveX = event.touches[0].clientX;
  const deltaX = startX - moveX;

  if (deltaX > 100) {
    nextSlider();
    startX = moveX; // Reset startX to prevent rapid scrolling
  } else if (deltaX < -100) {
    previousSlider();
    startX = moveX; // Reset startX to prevent rapid scrolling
  }
}

function previousSlider() {
  if (currentIndexs > 0) {
    currentIndexs--;
    updateSlider();
  }
}

function nextSlider() {
  const totalSlides = document.querySelectorAll('.uiyrme_card').length;
  if (currentIndexs < totalSlides - 1) {
    currentIndexs++;
    updateSlider();
  }
}

function updateSlider() {
  const slider = document.querySelector('.uiyrme-slider');
  const cardWidth = document.querySelector('.uiyrme_card').offsetWidth + 20; 
  slider.style.transform = `translateX(${-currentIndexs * cardWidth}px)`;
}

const sliderContainer = document.querySelector('.uiyrme-container');
  sliderContainer.addEventListener('touchstart', handleTouchStart, false);
  sliderContainer.addEventListener('touchmove', handleTouchMove, false);
