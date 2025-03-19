import smoothscroll from 'smoothscroll-polyfill';

// ヘッダーメニューの開閉
const $menuButton = document.getElementById("headerMenuButton");
const $menu = document.getElementById("headerMenu");
let menu_flg = $menu.dataset.isopened;
$menuButton.addEventListener("click", function (e) {
  $menuButton.classList.toggle("is-active");
  if(menu_flg == "false") {
    menu_flg = "true";
  } else {
    menu_flg = "false";
  }
  $menu.dataset.isopened = menu_flg;
  // $menu.classList.toggle("is-active");
});

// アンカースクロール
smoothscroll.polyfill();
window.addEventListener('DOMContentLoaded', () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const anchorLinksArr = Array.prototype.slice.call(anchorLinks);
  anchorLinksArr.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const header_class = e.target.classList.contains('l-header__link');
      if(header_class) {
        $menuButton.classList.remove("is-active");
        if(menu_flg == "false") {
          menu_flg = "true";
        } else {
          menu_flg = "false";
        }
        $menu.dataset.isopened = menu_flg;
      }
      const targetId = link.hash;
      const targetElement = document.querySelector(targetId);
      const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;
      window.scrollTo({
        top: targetOffsetTop,
        behavior: "smooth"
      });
    });
  });
});

// ボタンの泡のアニメーション
const fly = (target) => {
  const startTime = performance.now()
  const amplitude = { x: 8, y: 8, rotation: -2 }
  const speed = { x: 0.001, y: 0.001 }

  const tick = () => {
    const diff = performance.now() - startTime
    const x = amplitude.x * Math.sin(speed.x * diff)
    const y = amplitude.y * Math.sin(speed.y * diff)
    const rotation = amplitude.rotation * (1 + Math.sin(speed.y * diff))

    target.style.transform = `rotate(${rotation}deg) translate(${x}%, ${y}%)`

    requestAnimationFrame(tick);
  }
  tick();
}
const target = document.querySelectorAll('.c-button__circle01, .c-button__circle02');
if (target) {
  target.forEach(function(element) {
    fly(element)
  })
}
