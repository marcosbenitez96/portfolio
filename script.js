window.onload = function() {
    let arrow = document.getElementById("arrow-contenedor");
    window.onscroll = () => {
        hacerScroll();
    };
    arrow.addEventListener("click", () => {
        irArriba();
    });
};

function irArriba() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function hacerScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("arrow-contenedor").style.visibility = "visible";
    } else {
        document.getElementById("arrow-contenedor").style.visibility = "hidden";
    }
}
