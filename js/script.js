function toggleMenu(visible) {
  document.querySelector('.side-nav').classList.toggle('show', visible)
}

document.querySelector('#nav-icon1').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu()
});