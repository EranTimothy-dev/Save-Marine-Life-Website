document.addEventListener("DOMContentLoaded", function () {
    // add scroll animations to table of contents and back to top button
    const links = document.querySelectorAll(".table-of-contents a");
    const backToTop = document.querySelector(".back-to-top");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 110,
                behavior: "smooth"
            });
        });
    });

    backToTop.addEventListener("click", function (event){
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })



    const tocButton = document.getElementById("toc-toggle");
    const toc = document.querySelector(".table-of-contents");
    tocButton.addEventListener("click", function () {
        toc.classList.toggle("active");
    });


});
