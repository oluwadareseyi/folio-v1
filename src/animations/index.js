import { TimelineMax } from "gsap";

// Declare a general timeline to use in all the animation functions.

const tl = new TimelineMax();

// Preloader Animation
export const preLoaderAnim = () => {
  tl.to(".texts-container", {
    duration: 0,
    opacity: 1,
    ease: "Power3.easeOut",
  })
    .from(".texts-container span", {
      duration: 1.5,
      delay: 1,
      y: 70,
      skewY: 10,
      stagger: 0.4,
      ease: "Power3.easeOut",
    })
    .to(".texts-container span", {
      duration: 1,
      y: 70,
      skewY: -20,
      stagger: 0.2,
      ease: "Power3.easeOut",
    })
    .from(".landing__top .sub", {
      duration: 1,
      opacity: 0,
      y: 80,
      ease: "expo.easeOut",
    })
    .to(
      ".preloader",
      {
        duration: 1.5,
        height: "0vh",
        ease: "Power3.easeOut",
      },
      "-=2"
    )
    .from(".landing__main .text", {
      duration: 1.5,
      scale: 0,
      stagger: {
        amount: 2,
      },
      ease: "Elastic.easeOut",
    })
    .from(
      ".links .item",
      {
        duration: 0.5,
        opacity: 0,
        y: 80,
        stagger: {
          amount: 0.5,
        },
        ease: "expo.easeOut",
      },
      "-=.5"
    )
    .to(".preloader", {
      duration: 0,
      css: { display: "none" },
    });
};

export const openMenu = () => {
  tl.to(".hamburger-menu", {
    duration: 0,
    css: { display: "block" },
  }).to([".nav-secondary", ".nav-primary"], {
    duration: 0.8,
    height: "100%",
    transformOrigin: "right top",
    stagger: {
      amount: 0.1,
    },
    ease: "power3.inOut",
  });

  // change cursor color when nav is open
  // tl.to(".cursor", {
  //   delay: -1,
  //   css: { className: "+=cursor-active" },
  // }).to(".cursor2", { delay: -1, css: { className: "+=cursor2-active" } });
};

export const closeMenu = () => {
  tl.to([".nav-primary", ".nav-secondary"], {
    duration: 0.8,
    height: "0",
    transformOrigin: "right top",
    stagger: {
      amount: 0.1,
    },
    ease: "power3.inOut",
  }).to(".hamburger-menu", {
    duration: 0,
    css: { display: "none" },
  });

  // tl.to(".cursor-active", {
  //   css: { className: "+=cursor" },
  // }).to(".cursor2-active", { css: { className: "+=cursor2" } });
};

// recurrent animations
export const fadeUp = (el, delay = 0) => {
  tl.from(el, {
    y: 150,
    duration: 1,
    delay,
    opacity: 0,
    ease: "power3.Out",
  });
};
