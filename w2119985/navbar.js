function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    const menuIcon = document.getElementById('menu-icon');
    const profile = document.querySelector('.profile');


    menu.classList.toggle('active');
    profile.classList.toggle('active');

    if (menu.classList.contains('active')){
        menuIcon.src = "Assests/Icons/close.svg";
    } else {
        menuIcon.src = "Assests/Icons/menu.svg";
    }
}

