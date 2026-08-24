/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {

  menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

  });


  mobileMenu
    .querySelectorAll("a")
    .forEach(link => {

      link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

      });

    });

}


/* =========================
   GALLERY LIGHTBOX
========================= */

const galleryItems =
  document.querySelectorAll(".gallery-item img");

const lightbox =
  document.getElementById("lightbox");

const lightboxImage =
  document.getElementById("lightboxImage");

const lightboxClose =
  document.getElementById("lightboxClose");


galleryItems.forEach(image => {

  image.addEventListener("click", () => {

    lightboxImage.src = image.src;

    lightboxImage.alt = image.alt;

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";

  });

});


function closeLightbox() {

  lightbox.classList.remove("active");

  document.body.style.overflow = "";

}


if (lightboxClose) {

  lightboxClose.addEventListener(
    "click",
    closeLightbox
  );

}


if (lightbox) {

  lightbox.addEventListener("click", event => {

    if (event.target === lightbox) {

      closeLightbox();

    }

  });

}


/* =========================
   ESC KEY
========================= */

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {

    closeLightbox();

    if (mobileMenu) {
      mobileMenu.classList.remove("active");
    }

  }

});


/* =========================
   VIDEO AUTO PAUSE
========================= */

const videos =
  document.querySelectorAll("video");

videos.forEach(video => {

  video.addEventListener("play", () => {

    videos.forEach(otherVideo => {

      if (otherVideo !== video) {

        otherVideo.pause();

      }

    });

  });

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
  document.querySelectorAll("section[id]");

const navLinks =
  document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 150;

    if (
      window.scrollY >= sectionTop
    ) {

      current =
        section.getAttribute("id");

    }

  });


  navLinks.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") ===
      "#" + current
    ) {

      link.classList.add("active");

    }

  });

});


/* =========================
   CURRENT YEAR
========================= */

console.log(
  "HICHAM website loaded successfully."
);