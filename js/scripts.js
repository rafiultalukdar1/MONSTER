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
        if (window.scrollY > 200) {
            document.body.style.paddingTop = menuArea.offsetHeight + 'px';
            menuArea.classList.add('sticky-nav');
        } else {
            document.body.style.paddingTop = '0px';
            menuArea.classList.remove('sticky-nav');
        }
    });


    // Featured Slider
    const featuredSlider = new Swiper('.featured-slider', {
        slidesPerView: 6,
        spaceBetween: 12,
        loop: true,
        speed: 1000,

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },

        breakpoints: {
            0: {
                slidesPerView: 1.5,
                spaceBetween: 8,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 6,
            }
        }
    });










});