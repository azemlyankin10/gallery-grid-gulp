"use strict";

var burgerBtn = document.querySelector('.header__burger');
var headerContainer = document.querySelector('.header__container');
var closeBtn = document.querySelector('.header__close');
burgerBtn.addEventListener('click', function () {
  headerContainer.classList.add('active');
});
closeBtn.addEventListener('click', function () {
  headerContainer.classList.remove('active');
});
"use strict";

// map
ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.769535, 37.639985],
    zoom: 15,
    controls: []
  });
  var myPlacemark = new ymaps.Placemark([55.769535, 37.639985], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../images/svg/location.svg',
    iconImageSize: [12, 12],
    iconImageOffset: [-3, -42]
  });
  myMap.geoObjects.add(myPlacemark);
}
"use strict";

var search = document.querySelector('.search__icon');
var searchCross = document.querySelector('.search__cross');
var input = document.querySelector('.search__input');
var form = document.querySelector('.search');
var nav = document.querySelector('.header__list');
var logo = document.querySelector('.header__logo');
window.addEventListener('click', function (e) {
  if (e.target === search) {
    form.classList.add('active');
    search.style.display = 'none';
    searchCross.style.display = 'block';

    if (window.innerWidth > 992) {
      nav.style.transition = 'opacity .1s ease-in-out';
      nav.style.opacity = 0;
      nav.style.pointerEvents = 'none';
    }

    if (window.innerWidth < 440) {
      logo.style.transition = 'opacity .1s ease-in-out';
      logo.style.opacity = 0;
    }
  } else if (e.target !== input && e.target !== form && form.classList.contains('active')) {
    form.classList.remove('active');
    search.style.display = 'block';
    searchCross.style.display = 'none';

    if (window.innerWidth > 992) {
      nav.style.transition = 'opacity .3s ease-in-out .3s';
      nav.style.opacity = 1;
      nav.style.pointerEvents = 'initial';
    }

    if (window.innerWidth < 440) {
      logo.style.transition = 'opacity .3s ease-in-out .3s';
      logo.style.opacity = 1;
    }
  }
});
"use strict";

document.querySelector('.map__close').addEventListener('click', function () {
  document.querySelector('.map__info').classList.toggle('close');
}); // form

new JustValidate('.formAbout', {
  rules: {
    email: {
      required: true,
      email: true
    }
  }
});
new JustValidate('.contactForm', {
  rules: {
    name: {
      required: true
    },
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    name: 'Введите имя',
    email: 'Введите email'
  }
});