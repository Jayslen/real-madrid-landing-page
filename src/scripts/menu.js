const $menuIcon = document.getElementById('menu-icon')
const $aside = document.querySelector('aside')

$menuIcon.addEventListener('click', () => {
  $aside.classList.toggle('aside--hidden')
  $aside.classList.toggle('aside--active')
})