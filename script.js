// Theme Toggle
const html = document.documentElement;
const themeBtn = document.getElementById("themeBtn");
const icon = themeBtn.querySelector("i");
const saved = localStorage.getItem("theme");
const sysDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
function setTheme(t) {
    html.setAttribute("data-theme", t);
    localStorage.setItem("theme", t);
    icon.className = t === "dark" ? "fas fa-lightbulb" : "fas fa-moon";
}
if (saved) setTheme(saved);
else setTheme(sysDark ? "dark" : "light");
themeBtn.onclick = () => setTheme(html.getAttribute("data-theme") === "dark" ? "light" : "dark");

// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
menuBtn.onclick = () => {
    nav.classList.toggle("open");
    menuBtn.innerHTML = nav.classList.contains("open") ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
};
nav.querySelectorAll("a").forEach(
    (a) =>
        (a.onclick = () => {
            nav.classList.remove("open");
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        })
);

// Smooth Scroll (No URL Change)
document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.onclick = (e) => {
        e.preventDefault();
        document.querySelector(a.getAttribute("href"))?.scrollIntoView({ behavior: "smooth" });
        nav.classList.remove("open");
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    };
});

// Scroll Spy (Active Nav Link)
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");
function highlightNav() {
    const scrollY = window.scrollY + 150;
    sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");
        if (scrollY >= top && scrollY < top + height) {
            navLinks.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${id}`) link.classList.add("active");
            });
        }
    });
}
window.addEventListener("scroll", highlightNav);
window.addEventListener("load", highlightNav);

// Reveal Animations & Progress Bars
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                const bars = entry.target.querySelectorAll(".progress-fill");
                bars.forEach((bar) => {
                    bar.style.width = bar.getAttribute("data-width") + "%";
                });
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Header Scroll Effect
window.addEventListener(
    "scroll",
    () => {
        document.getElementById("header").classList.toggle("scrolled", window.scrollY > 50);
    },
    { passive: true }
);

// Form Handler
document.getElementById("contactForm").onsubmit = (e) => {
    e.preventDefault();
    alert("Message sent! Thank you.");
    e.target.reset();
};
