const targetDate = new Date("August 17, 2026 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ================= LIGHTBOX =================

const galleryImages = document.querySelectorAll(".grid-gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});

// ================= VIDEO POPUP =================

const videoItems = document.querySelectorAll(".video-item");
const videoModal = document.getElementById("videoModal");
const popupVideo = document.getElementById("popupVideo");
const popupSource = popupVideo.querySelector("source");
const closeVideo = document.querySelector(".video-close");

videoItems.forEach(item => {

    item.addEventListener("click", () => {

        popupSource.src = item.querySelector("source").src;

        popupVideo.load();

        videoModal.style.display = "flex";

    });

});

closeVideo.onclick = function(){

    popupVideo.pause();
    videoModal.style.display="none";

}

videoModal.onclick = function(e){

    if(e.target===videoModal){

        popupVideo.pause();
        videoModal.style.display="none";

    }

}
