const $header = document.getElementById('header')
let prevScrollPos = window.scrollY
window.addEventListener('scroll', () => {
  const currentScrollPos = window.scrollY
  if (prevScrollPos > currentScrollPos) {
    $header.style.top = '0'
  } else {
      $header.style.top = '-100px'
  }
  prevScrollPos = currentScrollPos
})
