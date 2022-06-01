document.querySelector('.map__close').addEventListener('click', () => {
  document.querySelector('.map__info').classList.toggle('close')
})

// form

new JustValidate('.formAbout', {
  rules: {
    email: {
      required: true,
      email: true
    }
  }
})

new JustValidate('.contactForm', {
  rules: {
    name: {
      required: true,
    },
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    name: 'Введите имя',
    email: 'Введите email'
  },
})

