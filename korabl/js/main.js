const iconMenu = document.querySelector(".menu__icon"),
menuBody = document.querySelector(".menu"),
body = document.querySelector("body");
function scrollHeader() {
const e = document.querySelector(".header");
const m = document.querySelector(".main");
let headerHeight = e.getBoundingClientRect().height;
if (this.scrollY >= headerHeight) {
	m.style.marginTop = (headerHeight) + "px";
	headerHeight = 	e.classList.add("scroll-header");
}else{
	e.classList.remove("scroll-header");
	m.style.marginTop = "0px";
}
// (headerHeight = e.getBoundingClientRect().height), this.scrollY >= headerHeight ? e.classList.add("scroll-header") : e.classList.remove("scroll-header");

}
iconMenu.addEventListener("click", function (e) {
body.classList.toggle("lock"), iconMenu.classList.toggle("active"), menuBody.classList.toggle("active");
}),
window.addEventListener("scroll", scrollHeader);
const navLink = document.querySelectorAll(".menu__link");
function linkAction() {
body.classList.remove("lock"), iconMenu.classList.remove("active"), menuBody.classList.remove("active");
}
navLink.forEach((e) => e.addEventListener("click", linkAction));
const sr = ScrollReveal({ distance: "50px", duration: 1500, mobile: !1 });
sr.reveal(".main__image, .system-main__link, .reviews__item", { origin: "top", interval: 100 }),
sr.reveal(".footer__label, .footer__text, .footer__link, .logo, .footer__copy", { origin: "top", interval: 100 }),
sr.reveal(".system-main__label, .free__list li, .terms__list li", { origin: "left", interval: 100, distance: "60px" }),
sr.reveal(".present-main__image, .free__image", { origin: "right", interval: 100, distance: "60px" }),
sr.reveal(".main__promocode, .main__button, .main__title", { distance: "0px", opacity: 0.3, interval: 100 }),
sr.reveal(".main__sale, .advantages__item, .tariff__item, .about__item", { origin: "bottom", interval: 100 }),
sr.reveal(".header-block__title", { origin: "bottom", interval: 0 });
