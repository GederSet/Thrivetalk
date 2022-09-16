const headerBurger = document.querySelector('.top-header__burger');
if (headerBurger) {
    const headerMenu = document.querySelector('.menu');
    headerBurger.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        headerBurger.classList.toggle('_active');
        headerMenu.classList.toggle('_active');
    });
}