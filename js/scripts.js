document.addEventListener('DOMContentLoaded', function () {

    // Side Bar
    const menuBtn = document.querySelector('.menu-bar-icon');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    const closeBtn = document.querySelector('.sidebar-close');
    const menuLinks = document.querySelectorAll('.sidebar a');

    function openSidebar() {
        sidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.classList.add('sidebar-open');
    }

    function closeSidebar() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('sidebar-open');
    }

    menuBtn.addEventListener('click', openSidebar);
    closeBtn.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);

    menuLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });


    // Menu Sticky
    const menuArea = document.querySelector('.menu-section');

    window.addEventListener('scroll', () => {

        if (window.scrollY > 100) {
            menuArea.classList.add('sticky-nav');
        } else {
            menuArea.classList.remove('sticky-nav');
        }

    });











});