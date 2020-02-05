const parallax = document.getElementById('parallax');
window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset*0.7+"px";
})

const actressesRef = document.getElementById("actressesRef");
const actorsRef = document.getElementById("actorsRef");

