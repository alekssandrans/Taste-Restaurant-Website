const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}
const showFoodImage = () => {
    document.getElementById('home-image1').style.display ="block";
    document.getElementById('home-image2').style.display ="none";
    document.getElementById('home-image3').style.display ="none";

    document.getElementById('food').classList.add('active-link-text');
    document.getElementById('wine').classList.remove('active-link-text');
    document.getElementById('view').classList.remove('active-link-text');

    document.getElementById('home-image1').style.animation="imageFade 1s ease-in-out";
}
const showWineImage = () => {
    document.getElementById('home-image1').style.display ="none";
    document.getElementById('home-image2').style.display ="block";
    document.getElementById('home-image3').style.display ="none";

    document.getElementById('wine').classList.add('active-link-text');
    document.getElementById('food').classList.remove('active-link-text');
    document.getElementById('view').classList.remove('active-link-text');

    document.getElementById('home-image2').style.animation="imageFade 1s ease-in-out";
}
const showViewImage = () => {
    document.getElementById('home-image1').style.display ="none";
    document.getElementById('home-image2').style.display ="none";
    document.getElementById('home-image3').style.display ="block";

    document.getElementById('view').classList.add('active-link-text');
    document.getElementById('wine').classList.remove('active-link-text');
    document.getElementById('food').classList.remove('active-link-text');

    document.getElementById('home-image3').style.animation="imageFade 1s ease-in-out";
}
const showMainMenu = () => {
    document.getElementsByClassName('main-menu')[0].style.display ="block";
    document.getElementsByClassName('drinks-menu')[0].style.display ="none";
    document.getElementsByClassName('desserts-menu')[0].style.display ="none";

    document.getElementsByClassName('main')[0].classList.add("active-menu");
    document.getElementsByClassName('desserts')[0].classList.remove("active-menu");
    document.getElementsByClassName('drinks')[0].classList.remove("active-menu");
}
const showDessertsMenu = () => {
    document.getElementsByClassName('main-menu')[0].style.display ="none";
    document.getElementsByClassName('desserts-menu')[0].style.display ="block";
    document.getElementsByClassName('drinks-menu')[0].style.display ="none";

    document.getElementsByClassName('main')[0].classList.remove("active-menu");
    document.getElementsByClassName('desserts')[0].classList.add("active-menu");
    document.getElementsByClassName('drinks')[0].classList.remove("active-menu");
}
const showDrinksMenu = () => {
    document.getElementsByClassName('main-menu')[0].style.display ="none";
    document.getElementsByClassName('desserts-menu')[0].style.display ="none";
    document.getElementsByClassName('drinks-menu')[0].style.display ="block";

    document.getElementsByClassName('main')[0].classList.remove("active-menu");
    document.getElementsByClassName('desserts')[0].classList.remove("active-menu");
    document.getElementsByClassName('drinks')[0].classList.add("active-menu");
}

navSlide();

