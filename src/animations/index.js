import gsap from "gsap";

// Declare a general timeline to use in all the animation functions.

const tl = gsap.timeline();

// Preloader Animation
export const preLoaderAnim = () => {
  tl.to("body", {
    duration: 0,
    css: { overflowY: "hidden" },
  })
    .to(".texts-container", {
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
    .to("body", {
      duration: 0.1,
      css: { overflowY: "scroll" },
      ease: "power3.inOut",
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
      duration: 2,
      // scale: 0,
      y: 10,
      opacity: 0,
      stagger: {
        amount: 2,
      },
      ease: "power3.easeInOut",
    })
    .from(".shapes .shape", {
      duration: 1,
      opacity: 0,
      delay: -2,
      ease: "power3.easeInOut",
      stagger: 1,
    })
    .from(".links .item", {
      duration: 0.5,
      opacity: 0,
      delay: window.innerWidth < 763 ? -3 : -0.6,
      // y: 80,
      stagger: {
        amount: 0.5,
      },
      ease: "expo.easeOut",
      onComplete: animateShapes(),
    })
    .to(".preloader", {
      duration: 0,
      css: { display: "none" },
    });
};

export const openMenu = () => {
  tl.to(".hamburger-menu", {
    duration: 0,
    css: { display: "block" },
  })
    .to("body", {
      duration: 0.1,
      css: { overflowY: "hidden" },
      ease: "power3.inOut",
    })
    .to([".nav-secondary", ".nav-primary"], {
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
  tl.to("body", {
    duration: 0.1,
    css: { overflowY: "scroll" },
    ease: "power3.inOut",
  })
    .to([".nav-primary", ".nav-secondary"], {
      duration: 0.8,
      height: "0",
      transformOrigin: "right top",
      stagger: {
        amount: 0.1,
      },
      ease: "power3.inOut",
    })
    .to(".hamburger-menu", {
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

export const mobileLanding = () => {
  window.innerWidth < 763 &&
    tl.from(".landing__main2", {
      duration: 1,
      delay: 6.2,
      opacity: 0,
      y: 80,
      ease: "expo.easeOut",
    });
};

const animateShapes = () => {
  const tl = gsap.timeline({
    repeat: -1,
  });

  tl.to(".shapes .shape", {
    duration: 5,
    x: 30,
    ease: "expo.easeOut",
  })
    .to(".shapes .shape", {
      duration: 4,
      y: -50,
      ease: "expo.easeOut",
    })
    .to(".shapes .shape", {
      duration: 4,
      x: -30,
      ease: "expo.easeOut",
    })
    .to(".shapes .shape", {
      duration: 4,
      y: -50,
      ease: "expo.easeOut",
    })
    .to(".shapes .shape", {
      duration: 2,
      x: 0,
      y: 0,
      ease: "expo.easeOut",
    });
};
