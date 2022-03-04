
// $('.brandlogo').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
// });
// $('.stories_slider').slick({
//   dots: true,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 1,
//   adaptiveHeight: true
// });
$('.owl-carousel').owlCarousel({
  loop:true,dot:true,
 autoplay:true,
  responsive:{
  0:{
      items:1
  },
  600:{
      items:3
  },
  1000:{
      items:3
  }
  }
  })

