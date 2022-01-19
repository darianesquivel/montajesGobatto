$(".owl-carousel").owlCarousel({
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  loop: true,
  margin: 40,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

$("#js-rotating").Morphext({
  // Animation type (refer to Animate.css for a list of available animations)
  animation: "fadeInDown",
  // An array of words to rotate are created based on this separator. Change it if you wish to separate the words differently (e.g. So Simple | Very Doge | Much Wow | Such Cool)
  separator: ",",
  // The delay between each word in milliseconds
  speed: 3000,
});
