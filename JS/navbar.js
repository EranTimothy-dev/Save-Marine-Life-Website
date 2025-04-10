function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    const menuIcon = document.getElementById('menu-icon');
    const profile = document.querySelector('.profile');


    menu.classList.toggle('active');
    profile.classList.toggle('active');

    if (menu.classList.contains('active')){
        menuIcon.src = "../w2119977/Assests/Icons/close.svg";
    } else {
        menuIcon.src = "../w2119979/Assests/Icons/menu.svg";
    }
}

