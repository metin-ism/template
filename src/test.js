/**********************************/
//first slider

    let sliderImages = document.querySelectorAll('.slide');
    let arrowLeft = document.querySelector('#arrow-left');
    let arrowRight = document.querySelector('#arrow-right');
    let dots = document.querySelector(".dot");
    let current = 0;


function reset() {
        for (let i = 0; i < sliderImages.length; i++) {
            sliderImages[i].style.display = 'none';

        }
    }

    function init() {
        reset();
        sliderImages[0].style.display = 'block';

    }

    function slideLeft() {
        reset();
        sliderImages[current - 1].style.display = 'block';
        current--;
    }

    arrowLeft.addEventListener('click', function () {
        if (current === 0) {
            current = sliderImages.length;
        }

        slideLeft();
    });

    function slideRight() {
        reset();
        sliderImages[current + 1].style.display = 'block';
        current++;
    }

    arrowRight.addEventListener('click', function () {
        if (current === sliderImages.length - 1) {
            current = -1;
        }
        slideRight();
    });

    init();



/**********************************/
//second slider





/**********************************/
//hamburger menu
    (function () {
    var menuButton = document.getElementById('menuButton');
    var menuIcon = menuButton.children[0];
    var menu = document.getElementById('menu');
    var menuOpen = false;

    function onMenuClick(event) {
        if (menuOpen) {
            menu.classList.add('hidden');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
            $("#menu").css("right", "-60px");
            $("#hamburger").css("right", "-155px");
            $("#menu").css("position", "relative");
            $("#menu").css("background", "none");
            $("#menu li").css("right", "-60px");

        } else {
            menu.classList.remove('hidden');
            menuIcon.classList.add('fa-times');
            menuIcon.classList.remove('fa-bars');
            $("#menu").css("display", "block");
            $("#menu").css("right", "0");
            $("#menu li").css("position", "relative");
            $("#menu li").css("right", "140px");
            $("#menu").css("position", "relative");
            $("#hamburger").css("right", "-160px");
            $("#menu").css("background", "grey");
        }
        menuOpen = !menuOpen;
        event.preventDefault();
    }
    menuButton.addEventListener('click', onMenuClick);
}());

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            var smile = document.querySelectorAll('.me')[0];
            smile.style.backgroundImage = 'url(src/images/me-laugh.png)';
        } else if ($(this).scrollTop() > 50) {
            var laugh = document.querySelectorAll('.me')[0];
            laugh.style.backgroundImage = 'url(src/images/me-smile.png)';
        } else {
            var me = document.querySelectorAll('.me')[0];
            me.style.backgroundImage = 'url(src/images/me.png)';
        }
    });
});
