document.getElementById("menuToggle").addEventListener("click", function () {
    document.getElementById("menu").classList.toggle("show");
    document.getElementById("span-1").classList.toggle("activeNavBar2");
    document.getElementById("span-2").classList.toggle("activeNavBar3");
    document.getElementById("span-3").classList.toggle("activeNavBar");
});
gsap.from(".nav-links", { y: -100, duration: 1, stagger: 0.09 });

let tl = gsap.timeline()
tl.from(".upperHeading", {
    opacity: 0,
    x: 200,
    duration: 1,
})
gsap.from(".mainHeading", {
    opacity: 0,
    x: -200,
    duration: 1,
})
tl.from(".headingPara", {
    y: 20,
    opacity: 0
})
tl.from(".headingBtn", {
    y: 20,
    opacity: 0
})