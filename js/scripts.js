
document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.getElementById('menu-toggle');
    var navbarMembers = document.getElementById('navbar-members');
    menuToggle.addEventListener('click', function () {
    
        navbarMembers.classList.toggle('show');
    
    });
});
