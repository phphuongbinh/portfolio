const toggleButton = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const closeButton = document.querySelector(".nav-close");
toggleButton.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});

closeButton.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});

// Accordion Skills

const skillContent = document.getElementsByClassName("skill-content");
const skillHeaders = document.querySelectorAll(".skill-header");

function toggleSkills() {
  let itemClass = this.parentNode.className;
  for (i = 0; i < skillContent.length; i++) {
    skillContent[i].className = "skill-content skill-close";
  }
  if (itemClass === "skill-content skill-close") {
    this.parentNode.className = "skill-content skill-open";
  }
}

skillHeaders.forEach((item) => {
  item.addEventListener("click", toggleSkills);
});

// Qualification Tabs

const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification-active");
    });

    target.classList.add("qualification-active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification-active");
    });

    tab.classList.add("qualification-active");
  });
});

// Service Modal

const serviceModals = document.querySelectorAll(".service-modal");
const moreButtons = document.querySelectorAll(".service-more");
const modalCloses = document.querySelectorAll(".service-modal-close");

let modal = function (modalClick) {
  serviceModals[modalClick].classList.add("modal-active");
};

moreButtons.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    serviceModals.forEach((modal) => {
      modal.classList.remove("modal-active");
    });
  });
});

// Swiper

var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

var testimonialSwiper = new Swiper(".testimonial-swiper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
});

// Scroll Sections Active Links

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionHeight + sectionTop) {
      document
        .querySelector(`a[href="#${sectionId}"]`)
        .classList.add("active-link");
    } else {
      document
        .querySelector(`a[href="#${sectionId}"]`)
        .classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

// Change Background Header

function scrollHeader() {
  const nav = document.querySelector("#header");
  if (this.scrollY >= 80) {
    nav.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", scrollHeader);

// Scroll top

function scrollTop() {
  const scrollUp = document.querySelector("#scroll-up");

  if (this.scrollY > 500) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", scrollTop);

// Dark Light Theme

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

const selectedTheme = localStorage.getItem("selected-item");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";

console.log(getCurrentTheme());

const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-sun" : "uil-moon";

console.log(getCurrentIcon());

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-sun" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme);
  localStorage.setItem("selected-icon", getCurrentIcon);
});
