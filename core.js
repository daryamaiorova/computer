const page = document.querySelector('.page');
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  page.classList.toggle('show-side-menu');
});


const navAsideButtons = document.querySelectorAll('.nav-aside__button');

navAsideButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const parent = button.closest('.nav-aside__item');
    if (parent.classList.contains('nav-aside__item--active')) {
      parent.classList.remove('nav-aside__item--active');
      const navAsideItems = parent.querySelectorAll('.nav-aside__item');
      navAsideItems.forEach((item) => {
        item.classList.remove('nav-aside__item--active');
      });
    } else {
      const list = button.closest('.nav-aside__list');
      const navAsideItems = list.querySelectorAll('.nav-aside__item');
      navAsideItems.forEach((item) => {
        item.classList.remove('nav-aside__item--active');
      });
      parent.classList.add('nav-aside__item--active');
    }
  });
});

const links = document.querySelectorAll('.nav-aside__link');
const locationPath = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;

links.forEach((link) => {

  if (link.href === locationPath) {
    link.classList.add('nav-aside__link--active');

    const parent = link.closest('.nav-aside__item');
    const parentList = parent.parentElement;

    if (parentList.classList.contains('nav-aside__list--submenu')) {
      parent.classList.add('nav-aside__item--active');
    }

    const parentItem = parentList.closest('.nav-aside__item');

    if (parentItem) {
      parentItem.classList.add('nav-aside__item--active');
      const parentList2 = parentItem.parentElement;
      const parentItem2 = parentList2.closest('.nav-aside__item');

      if (parentItem2) {
        parentItem2.classList.add('nav-aside__item--active');
      }
    }
  }
});