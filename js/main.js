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

  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: "#ffffff",
        opacity: 0.8,
        width: 1,
      },
      move: {
        enable: true,
        speed: 8,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    // interactivity: {
    //   detect_on: "canvas",
    //   events: {
    //     onhover: {
    //       enable: true,
    //       mode: "repulse",
    //     },
    //     onclick: {
    //       enable: true,
    //       mode: "push",
    //     },
    //     resize: true,
    //   },
    //   modes: {
    //     repulse: {
    //       distance: 100,
    //       duration: 0.4,
    //     },
    //     push: {
    //       particles_nb: 4,
    //     },
    //   },
    // },
    retina_detect: true,
  });
});
