/* =====================================================
   HERO BACKGROUND SLIDESHOW
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const heroSlides =
        document.querySelectorAll(".hero-slide");

    if (heroSlides.length === 0) {
        console.log("Hero slideshow tidak ditemukan.");
        return;
    }

    let currentSlide = 0;

    // Pastikan slide pertama aktif
    heroSlides.forEach((slide, index) => {

        slide.classList.toggle(
            "active",
            index === 0
        );

    });


    function nextHeroSlide() {

        heroSlides[currentSlide]
            .classList.remove("active");

        currentSlide++;

        if (currentSlide >= heroSlides.length) {
            currentSlide = 0;
        }

        heroSlides[currentSlide]
            .classList.add("active");

    }


    // Ganti background setiap 5 detik
    setInterval(
        nextHeroSlide,
        5000
    );

});

/* =====================================================
LIGHTBOX GALERI
===================================================== */

const galleryImages =
document.querySelectorAll(".grid-gallery img");

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightbox-img");

const closeBtn =
document.querySelector(".close");

/*
Buka gambar
*/

galleryImages.forEach(img => {

```
img.addEventListener("click", () => {

    lightbox.style.display = "flex";

    lightboxImg.src = img.src;

    lightboxImg.alt = img.alt;

    document.body.style.overflow = "hidden";

});
```

});

/*
Tutup melalui tombol X
*/

if (closeBtn) {

```
closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

    document.body.style.overflow = "";

});
```

}

/*
Tutup ketika klik area luar gambar
*/

if (lightbox) {

```
lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

        document.body.style.overflow = "";

    }

});
```

}

/* =====================================================
SCROLL ANIMATION
===================================================== */

const scrollElements =
document.querySelectorAll(".scroll-animate");

function revealOnScroll() {

```
scrollElements.forEach(element => {

    const elementTop =
        element.getBoundingClientRect().top;

    const windowHeight =
        window.innerHeight;

    if (elementTop < windowHeight - 80) {

        element.classList.add("show");

    }

});
```

}

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();


/* =====================================================
ESC KEY
===================================================== */

document.addEventListener("keydown", (e) => {

```
if (e.key === "Escape") {

    if (
        lightbox &&
        lightbox.style.display === "flex"
    ) {

        lightbox.style.display =
            "none";

        document.body.style.overflow =
            "";

    }


    if (
        videoModal &&
        videoModal.style.display === "flex"
    ) {

        closeVideo();

    }

}
```

});


const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", function () {
    const isOpen = menu.classList.toggle("show");

    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Tutup menu" : "Buka menu"
    );
  });

  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      menu.classList.remove("show");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Buka menu");
    });
  });
}
