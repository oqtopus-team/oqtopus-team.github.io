import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { TextPlugin } from 'gsap/TextPlugin'
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

const breakpoint = 768;

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

// main-visual のアニメーション
const $main_visual = document.querySelector(".p-top__main-visual");
const $main_visual_head = document.querySelector(".p-top__main-visual__head");
const main_visual_head_height = $main_visual_head.clientHeight;
const main_visual_head_text = $main_visual_head.textContent;
const main_visual_head_html = $main_visual_head.innerHTML;
const main_visual_head_length = main_visual_head_text.length;

const mv_tl = gsap.timeline();
mv_tl.set(
  $main_visual_head,
  { 
    text: "",
    minHeight: main_visual_head_height
  }
).add(() => {
  $main_visual_head.classList.add("is-typing");
}).to(
  $main_visual_head,
  {
    text: main_visual_head_html, // 表示するテキスト
    duration: main_visual_head_length * 0.2, // タイピングのスピード
    ease: "power1.inOut",
  }
).add(() => {
  $main_visual_head.classList.remove("is-typing");
});

// const mm = gsap.matchMedia();

// mm.add("(min-width: 769px)", () => {
//   gsap.fromTo('.p-top__main-visual__text',
//     { x: 0, autoAlpha: 1 },
//     { x: -300, autoAlpha: 1, delay: 0.01, duration: 1.2, ease: 'power2.out',
//       scrollTrigger: {
//         trigger: '.p-top__main-visual',
//         start: 'top 0%',
//         end: 'bottom 30%',
//         scrub: true,
//       },
//       stagger: {
//         from: 'start', amount: 0.5
//       }
//     }
//   );  
// });

// mm.add("(max-width: 768px)", () => {
//   gsap.fromTo('.p-top__main-visual__text',
//     { x: 0, autoAlpha: 1 },
//     { x: -120, autoAlpha: 1, delay: 0.01, duration: 1.2, ease: 'power2.out',
//       scrollTrigger: {
//         trigger: '.p-top__main-visual',
//         start: 'top 0%',
//         end: 'bottom 0%',
//         scrub: true,
//       },
//       stagger: {
//         from: 'start', amount: 0.3
//       }
//     }
//   );
// });

const mainVisualScrollTrigger = ScrollTrigger.create({
  trigger: $main_visual,
  animation: mv_tl,
  start: 'top 10%',
  once: true,
});


// mission のアニメーション
const $mission_block = document.querySelector(".p-top__mission__block");
const $mission_bg = document.querySelector(".p-top__mission__bg");
const $mission_animation = document.querySelector(".p-top__mission__animation");
const $mission_head = document.querySelector(".p-top__mission__head");
const $mission_text = document.querySelector(".p-top__mission__text");
const $mission_note = document.querySelector(".p-top__mission__note");
const $mission_button = document.querySelector(".p-top__mission__button-area");

const mission_head_height = $mission_head.clientHeight;
const mission_head_text = $mission_head.textContent;
const mission_head_html = $mission_head.innerHTML;
const mission_head_length = mission_head_text.length;

const mission_text_height = $mission_text.clientHeight;
const mission_text_text = $mission_text.textContent;
const mission_text_html = $mission_text.innerHTML;
const mission_text_length = mission_text_text.length;

gsap.set(
  [$mission_animation, $mission_note, $mission_button],
  {
    autoAlpha: 0,
  }
);
gsap.set(
  $mission_bg,
  {
    width: 0
  }
);
gsap.set(
  [$mission_head, $mission_text],
  {
    text: ""
  }
);
gsap.set(
  $mission_head,
  { minHeight: mission_head_height }
);
gsap.set(
  $mission_text,
  { minHeight: mission_text_height }
);

const tl = gsap.timeline();
tl.to(
  $mission_bg,
  {
    width: "100%",
    duration: 1,
    ease: "power4.inOut",
  }
).to(
  [$mission_animation, $mission_note, $mission_button],
  {
    autoAlpha: 1,
    duration: 0.3
  }
).add(() => {
  $mission_head.classList.add("is-typing");
}).to(
  $mission_head,
  {
    text: mission_head_html, // 表示するテキスト
    duration: mission_head_length * 0.06, // タイピングのスピード
    ease: "power1.inOut",
  }
).add(() => {
  $mission_head.classList.remove("is-typing");
  $mission_text.classList.add("is-typing");
}).to(
  $mission_text,
  {
    text: mission_text_html, // 表示するテキスト
    duration: mission_text_length * 0.06, // タイピングのスピード
    ease: "power1.inOut",
  }
).add(() => {
  $mission_text.classList.remove("is-typing");
});

const missionScrollTrigger = ScrollTrigger.create({
  trigger: $mission_block,
  animation: tl,
  start: "top 80%",
  once: true,
});


// roadmap のスライダー
export const roadmapSwiperConfig = {
  modules: [Navigation, Pagination],
  // Optional parameters
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    769: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
}
const roadmap_swiper = new Swiper('#roadmapSwiper', roadmapSwiperConfig);

// demo のスライダー
export const demoSwiperConfig = {
  modules: [Navigation, Pagination],
  // Optional parameters
  loop: false,
  spaceBetween: -100,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    769: {
      centerMode: true,
      spaceBetween: -180,
    }
  },

  // on: {
  //   init: function() {
  //     demoSliderTyping();
  //   },
  //   slideChangeTransitionStart: function() {
  //     demoSliderTyping();
  //   }
  // }
  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
}
const demo_swiper = new Swiper('#demoSwiper', demoSwiperConfig);

// demo のスライダーのタイピングアニメーション
function demoSliderTyping() {
  gsap.utils.toArray(".swiper-slide-active .js-typing-slide").forEach((target) => {
    const target_height = target.clientHeight;
    const target_text = target.textContent;
    const target_html = target.innerHTML;
    const target_text_length = target_text.length;
    target.classList.add("is-typing");
    gsap.set(
      target,
      { minHeight: target_height }
    );
    gsap.fromTo(
      target,
      { text: "" }, // 初期状態は空
      {
        text: target_html, // 表示するテキスト
        duration: target_text_length * 0.06, // タイピングのスピード
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: target,
          start: "top 80%", // 画面の80%の位置で開始
          once: true, // 一度だけ実行
        },
        onComplete: () => {
          target.classList.remove("is-typing");
        }
      }
    );
  });  
}

// 共通見出しのタイピングアニメーション
gsap.utils.toArray(".js-typing").forEach((target) => {
  const target_height = target.clientHeight;
  const target_text = target.textContent;
  const target_html = target.innerHTML;
  const target_text_length = target_text.length;
  target.classList.add("is-typing");
  gsap.set(
    target,
    { minHeight: target_height }
  );
  gsap.fromTo(
    target,
    { text: "" }, // 初期状態は空
    {
      text: target_html, // 表示するテキスト
      duration: target_text_length * 0.06, // タイピングのスピード
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: target,
        start: "top 80%", // 画面の80%の位置で開始
        once: true, // 一度だけ実行
      },
      onComplete: () => {
        target.classList.remove("is-typing");
      }
    }
  );
});
