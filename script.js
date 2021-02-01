const chevronLeft = document.getElementById('chevron-left');
const chevronRight = document.getElementById('chevron-right');
const navTabs = document.getElementById('nav-tab');

chevronRight.style.opacity = "1";
chevronLeft.style.opacity = "0";

window.addEventListener("resize", () => {
    navTabs.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    if (navTabs.offsetWidth > 498) {
        chevronLeft.style.opacity = "0";
        chevronRight.style.opacity = "0";
    } else {
        chevronRight.style.opacity = "1";
        chevronLeft.style.opacity = "0";
    }
})

navTabs.addEventListener('scroll', () => {
    if (navTabs.scrollLeft < 1) {
        chevronRight.style.opacity = "1";
        chevronLeft.style.opacity = "0";
    } 
    if (navTabs.scrollLeft > 1) {
        chevronLeft.style.opacity = "1";
        chevronRight.style.opacity = "0";
    }
});

chevronLeft.addEventListener('click', () => {
    navTabs.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    scrollCheckHandler(navTabs.scrollLeft);
});

chevronRight.addEventListener('click', () => {
    navTabs.scrollBy({
        top: 0,
        left: +200,
        behavior: 'smooth'
    });
    scrollCheckHandler(navTabs.scrollLeft);
});

const scrollCheckHandler = () => {
    if (navTabs.scrollLeft < 1) {
        chevronLeft.style.opacity = "1";
        chevronRight.style.opacity = "0";
    } 
    if (navTabs.scrollLeft > 1) {
        chevronRight.style.opacity = "1";
        chevronLeft.style.opacity = "0";
    }
}