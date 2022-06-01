const search = document.querySelector('.search__icon')
const searchCross = document.querySelector('.search__cross')
const input = document.querySelector('.search__input')
const form = document.querySelector('.search')
const nav = document.querySelector('.header__list')
const logo = document.querySelector('.header__logo')

window.addEventListener('click', (e) => { 
  if(e.target === search) {
    form.classList.add('active')
    search.style.display = 'none'
    searchCross.style.display = 'block'
    if (window.innerWidth > 992) {
      nav.style.transition = 'opacity .1s ease-in-out'
      nav.style.opacity = 0
      nav.style.pointerEvents = 'none'
    }
    if (window.innerWidth < 440) {
      logo.style.transition = 'opacity .1s ease-in-out'
      logo.style.opacity = 0
    }
  } else if(e.target !== input && e.target !== form && form.classList.contains('active')){
    form.classList.remove('active')
    search.style.display = 'block'
    searchCross.style.display = 'none'
    if (window.innerWidth > 992) {
      nav.style.transition = 'opacity .3s ease-in-out .3s'
      nav.style.opacity = 1
      nav.style.pointerEvents = 'initial'
    }
    if (window.innerWidth < 440) {
      logo.style.transition = 'opacity .3s ease-in-out .3s'
      logo.style.opacity = 1
    }
  }                                      
})



