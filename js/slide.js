
// JavaScript Document
$('#gallery').owlCarousel({
    loop:true,
    margin:10,
	smartSpeed:1000,   	// tốc độ thay đổi ảnh
	autoplay:true,		// cho phép tự động chạy
   autoplayTimeout:2000,
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
