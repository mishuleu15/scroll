const nav = document.querySelector('.nav-container');
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', (e) => {
  if (window.scrollY > 100) {
    nav.classList.add('nav-bar');
    backToTopBtn.hidden = false;
  } else if (window.scrollY < 100) {
    nav.classList.remove('nav-bar');
    backToTopBtn.hidden = true;
  }
});

function toTop() {
  document.documentElement.scrollTop = 0;
}

backToTopBtn.addEventListener('click', toTop);
