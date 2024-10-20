let slideIndex = 1;
function plusSlides(n) {
    slideIndex += n;
    if (slideIndex < 1) {
        slideIndex = 3;
    }
    if (slideIndex > 3) {
        slideIndex = 1;
    }
    let slider = document.getElementById('sliderImages');
    width = slider.clientWidth;
    // sliderImagesを横にスクロール
    // slider.scrollLeft = width * (slideIndex - 1);
    // なめらかにスクロール
    slider.scrollTo({
        left: width * (slideIndex - 1),
        behavior: 'smooth'
    });
}
