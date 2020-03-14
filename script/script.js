const burger = document.getElementsByClassName('burger')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]
const nav = document.getElementsByTagName('nav')[0]
const navLogo = document.getElementsByClassName('nav-logo-alt')[0]
const burgerActive = document.getElementsByClassName('burger-active') [0]
const body = document.getElementsByTagName('body')[0]
    //toggle nav
        burger.addEventListener('click', () => {
        burger.classList.toggle('burger__active');
        navLinks.classList.toggle('nav-burger-active');
        nav.classList.toggle('nav-burger-active_nav-color');
        navLogo.classList.toggle('nav-logo-alt_active');
        body.classList.toggle('body');
    })
    //events slider
$('.post-wrapper').slick({
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    cssEase: 'linear',
    nextArrow: $('.next'),
    prevArrow: $('.prev'),
});

