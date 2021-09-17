const body = document.querySelector('body');
const nav = document.querySelector('.nav-container');
const backToTopBtn = document.querySelector('.back-to-top');
const btns = document.querySelectorAll('a');
const logo = document.querySelector('.logo');
let divMobile;

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

var onresize = function () {
  width = document.body.clientWidth;
  height = document.body.clientHeight;
  if (width < 1024) {
    nav.style.display = 'none';
    divMobile.hidden = false;
  } else {
    nav.style.display = '';
    divMobile.hidden = true;
  }
};

function mobileNav() {
  const div1 = document.createElement('div');
  divMobile = div1;
  div1.classList.add('mobileNav');
  const div2 = document.createElement('div');
  div2.classList.add('logo-container');
  const button = document.createElement('button');
  button.textContent = 'BUTONU';
  const mobNav = document.createElement('nav');
  const ul = document.createElement('ul');
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');
  const li4 = document.createElement('li');
  const a1 = document.createElement('a');
  const a2 = document.createElement('a');
  const a3 = document.createElement('a');
  const a4 = document.createElement('a');
  a1.href = '#';
  a2.href = '#1';
  a3.href = '#2';
  a4.href = '#3';
  li1.appendChild(a1);
  li1.textContent = 'Home';
  li2.appendChild(a2);
  li2.textContent = 'About';
  li3.appendChild(a3);
  li3.textContent = 'Services';
  li4.appendChild(a4);
  li4.textContent = 'Tour';
  ul.append(logo, li1, li2, li3, li4);
  mobNav.appendChild(ul);
  div2.append(mobNav, button);
  div1.append(div2);
  body.insertBefore(div1, document.body.firstChild);
  div1.hidden = true;
}

mobileNav();

window.addEventListener('resize', onresize);

backToTopBtn.addEventListener('click', toTop);
