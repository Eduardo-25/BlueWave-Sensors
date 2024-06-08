// BANNERS SLIDE
var swiperThumbs = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 7, // Ajuste conforme necessário
});

var swiperMain = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
        swiper: swiperThumbs,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// EFEITO HEADER 
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// MENU NAV PARA MOBILE
const menuBtn = document.querySelector(".abrir-nav");
const closeBtn = document.querySelector(".fechar-nav");
const navigation = document.querySelector(".navegacao");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});
closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});
