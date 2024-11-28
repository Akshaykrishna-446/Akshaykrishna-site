const e_navBar = document.getElementById("navBar");
const e_overlayNavigation = document.getElementById("overlayNavigation");
const e_navigationButton = document.getElementById("navigationButton");
const e_closeNavigationButton = document.getElementById("closeNavigationButton");

function toggleNavigation() {
    if (e_overlayNavigation.style.width === "100%") {
        e_overlayNavigation.style.width = "0%";
    } else {
        e_overlayNavigation.style.width = "100%";
    }
}

e_navigationButton.addEventListener("click", toggleNavigation);
e_closeNavigationButton.addEventListener("click", toggleNavigation);

window.onscroll = (() => {
    if (window.scrollY > 50) {
        e_navBar.classList.add("is-moving");
        e_navBar.classList.remove("is-fixed");
    } else {
        e_navBar.classList.remove("is-moving");
        e_navBar.classList.add("is-fixed");
    }
});