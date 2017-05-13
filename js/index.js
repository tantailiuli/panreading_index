window.onload = function() {
   var mySwiper = new Swiper(".swiper-container",{  
        direction:"horizontal",
        loop:true,
        autoplayDisableOnInteraction:false, 
        pagination:".swiper-pagination",
        paginationClickable:true,
        simulateTouch:false,
        autoHeight:true,
        simulateTouch:true,
        autoplay:3000,
        speed:1000,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 20,
        grabCursor:true,
        breakpoints: {
            480: { 
                slidesPerView: 1,
                slidesPerGroup: 1
            },
            992: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            }
        }
    })
}
$("#back-to-top").click(function(){
    $('body,html').animate({
      scrollTop: 0
    },500);
    return false;
});