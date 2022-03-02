
$('.our_client').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
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
