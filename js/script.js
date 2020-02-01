const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}
const changeImage1 = () => {
    document.getElementById('home-image').src ="C:\\Users\\rv\\Desktop\\MyRestaurant\\img\\home-1.jpg";
    document.getElementById('food').classList.add('active-link-text');
    document.getElementById('wine').classList.remove('active-link-text');
    document.getElementById('view').classList.remove('active-link-text');

}
const changeImage2 = () => {
    document.getElementById('home-image').src ="C:\\Users\\rv\\Desktop\\MyRestaurant\\img\\home-2.jpg";
    document.getElementById('wine').classList.add('active-link-text');
    document.getElementById('food').classList.remove('active-link-text');
    document.getElementById('view').classList.remove('active-link-text');
}
const changeImage3 = () => {
    document.getElementById('home-image').src ="C:\\Users\\rv\\Desktop\\MyRestaurant\\img\\home-3.jpg";
    document.getElementById('view').classList.add('active-link-text');
    document.getElementById('wine').classList.remove('active-link-text');
    document.getElementById('food').classList.remove('active-link-text');
}

navSlide();