const menuBtn = document.getElementById("menu-btn");
const sideNav = document.querySelector("#side-nav");
sideNav.style.right = "-250px";
menuBtn.onclick = () => {
    if(sideNav.style.right == "-250px") {
        sideNav.style.right = "0px";
    } else {
        sideNav.style.right = "-250px";
    }
};
let scroll = new SmoothScroll('a[href*="#"]');