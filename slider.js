new Swiper('.images-slider',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'fraction',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    grabCursor: true,
    touchAngle: 45,
    simulateTouch: true,
    touchRatio: 1,
    slideToClickedSlide: true,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 0,
    }, 

    slidesPerView: 2,
    spaceBetween: 45,
});