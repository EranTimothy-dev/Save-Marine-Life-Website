function toggleMenu() {
    let menu = document.querySelector('.nav-menu');
    let menuIcon = document.getElementById('menu-icon');

    menu.classList.toggle('active');

    if (menu.classList.contains('active')){
        menuIcon.src = "Assets/Icons/close.svg";
    } else {
        menuIcon.src = "Assets/Icons/menu.svg";
    }
}