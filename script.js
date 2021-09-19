const html = document.querySelector('html');
const body = document.querySelector('body');
const nav = document.querySelector('.nav-container');
const backToTopBtn = document.querySelector('.back-to-top');
const btns = document.querySelectorAll('a');
const logo = document.querySelector('.logo');
const banner = document.querySelector('.banner');
const imageBanner = document.querySelector('.image');

let divMobile;
let btnMobile;
let navigationShow;

let showMenuMobile = false;

function toTop() {
  document.documentElement.scrollTop = 0;
}

function addEventListeners(buttons) {
  buttons.forEach((btn) => {
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
}

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
  if (width < 800) {
    nav.style.display = 'none';
    divMobile.style.display = '';
  } else {
    nav.style.display = '';
    divMobile.style.display = 'none';
  }
};

function mobileNav() {
  const div1 = document.createElement('div');
  divMobile = div1;
  div1.classList.add('mobileNav');
  const div2 = document.createElement('div');
  div2.classList.add('logo-container');
  const button = document.createElement('button');
  btnMobile = button;
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-bars');
  button.appendChild(i);
  const mobNav = document.createElement('nav');
  navigationShow = mobNav;
  const ul = document.createElement('ul');
  ulMobile = ul;
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
  a1.textContent = 'Home';
  a1.classList.add('home');
  li2.appendChild(a2);
  a2.textContent = 'About';
  a2.classList.add('about');
  li3.appendChild(a3);
  a3.textContent = 'Services';
  a3.classList.add('services');
  li4.appendChild(a4);
  a4.textContent = 'Tour';
  a4.classList.add('tour');

  ul.append(li1, li2, li3, li4);

  mobNav.appendChild(ul);
  navigationShow = mobNav;

  div2.append(mobNav);
  div1.append(logo, div2, button);

  body.insertBefore(div1, document.body.firstChild);
  navigationShow.hidden = true;

  const btns = document.querySelectorAll('a');
  console.log(btns);
  addEventListeners(btns);
}

function toggleMobileNav() {
  if (!showMenuMobile) {
    navigationShow.hidden = false;
    logo.style.marginBottom = '';
    logo.style.top = '-2px';
    divMobile.style.height = '350px';
    divMobile.style.backgroundColor = 'rgb(0, 159, 107, 0.9)';
    showMenuMobile = true;
  } else {
    navigationShow.hidden = true;
    divMobile.style.height = '100px';
    logo.style.marginBottom = '235px';
    showMenuMobile = false;
  }
}

// On Load
addEventListeners(btns);
mobileNav();
onresize();

// Event Listeners
window.addEventListener('resize', onresize);
backToTopBtn.addEventListener('click', toTop);
btnMobile.addEventListener('click', toggleMobileNav);
