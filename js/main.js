$(function () {
  $(".bg-switcher").bgSwitcher({
    images: [
      "images/background1.jpg",
      "images/background2.jpg",
      "images/background3.jpg",
      "images/background4.jpg",
      "images/background5.jpg",
    ],
    interval: 5000,
    loop: true,
  });
  $(".images-carousel").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
  });
});
