document.addEventListener('DOMContentLoaded', function () {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarMenu = document.getElementById('navbarSupportedContent');
  
    navbarToggler.addEventListener('click', function () {
      navbarMenu.classList.toggle('collapsed');
    });
  });
  