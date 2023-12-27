const tl = gsap.timeline({
  default: {
    duration: 0.75,
    ease: "Power3.easeOut",
  },
});

tl.fromTo(
  ".hero-img",
  {
    scale: 1.4,
    borderRadius: "0rem",
  },
  {
    scale: 1,
    borderRadius: "2.5rem",
    delay: 0.25,
    duration: 2.5,
    ease: "elastic.out(1.5,0.5)",
  }
);

tl.fromTo(".cat1", { x: "100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<30%");
tl.fromTo(".cat2", { y: "100%", opacity: 0.5 }, { y: 0, opacity: 1 }, "<30%");
tl.fromTo(".cat3", { x: "-100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<30%");
tl.fromTo(".cat4", { x: "100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<30%");
tl.fromTo(".cat5", { y: "100%", opacity: 0.5 }, { y: 0, opacity: 1 }, "<30%");
tl.fromTo(".cat6", { x: "-100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<30%");
tl.fromTo(".btn", { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, "<");

const logo = document.querySelector(".logo");
const letter = logo.textContent.split("");

console.log(letter);
logo.textContent = "";

letter.forEach((letter) => {
  logo.innerHTML += `<span class="letter">${letter}</span>`;
});

gsap.set(".letter", { display: "inline-block" });
gsap.fromTO(".letter", { y: "100%" }, { y: 0, delay: 1 });
