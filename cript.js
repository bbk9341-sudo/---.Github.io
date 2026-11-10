// แสดงปีปัจจุบันในส่วนท้ายเว็บไซต์
document.getElementById("year").textContent = new Date().getFullYear();


// ระบบเปิด-ปิดเมนูบนมือถือ
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// ปิดเมนูเมื่อกดลิงก์
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});


// เอฟเฟกต์แสดงเนื้อหาเมื่อเลื่อนหน้าจอ
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(function (element) {
    observer.observe(element);
});


// ปุ่มกลับขึ้นด้านบน
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
