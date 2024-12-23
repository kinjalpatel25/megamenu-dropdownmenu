document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const subMenus = document.querySelectorAll('.nav-links li a + .drop-menu, .nav-links li a + .mega-box');

    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    subMenus.forEach(menu => {
        const parentLink = menu.previousElementSibling;
        parentLink.addEventListener('click', function(e) {
            e.preventDefault();
            menu.classList.toggle('active');
        });
    });
});
