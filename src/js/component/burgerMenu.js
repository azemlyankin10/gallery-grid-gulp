const burgerBtn = document.querySelector('.header__burger')
const headerContainer = document.querySelector('.header__container')
const closeBtn = document.querySelector('.header__close')

burgerBtn.addEventListener('click', () => {
  headerContainer.classList.add('active')
})

closeBtn.addEventListener('click', () => {
  headerContainer.classList.remove('active')
})
