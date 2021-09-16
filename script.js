const nav = document.querySelector('.nav-container');
const backToTopBtn = document.querySelector('.back-to-top');
const btns = document.querySelectorAll('a');

function toTop() {
  document.documentElement.scrollTop = 0;
}

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains('about')) {
      window.scrollTo(0, 1045);
    } else if (styles.contains('services')) {
      window.scrollTo(0, 1980);
    } else if (styles.contains('tour')) {
      window.scrollTo(0, 2950);
    }
  });
});

window.addEventListener('scroll', (e) => {
  if (window.scrollY > 50) {
    nav.classList.add('nav-bar');
    backToTopBtn.hidden = false;
  } else if (window.scrollY < 50) {
    nav.classList.remove('nav-bar');
    backToTopBtn.hidden = true;
  }
});

backToTopBtn.addEventListener('click', toTop);
