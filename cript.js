document.addEventListener("DOMContentLoaded", function () {

    console.log("Animal Science Portfolio is ready!");

    // เมนูโทรศัพท์
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    menuBtn.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("open");

        menuBtn.textContent = isOpen ? "✕" : "☰";
        menuBtn.setAttribute("aria-expanded", isOpen);
    });

    // ปิดเมนูเมื่อคลิกหัวข้อ
    document.querySelectorAll("#navLinks a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("open");
            menuBtn.textContent = "☰";
            menuBtn.setAttribute("aria-expanded", "false");
        });
    });

    // Animation ตอนเลื่อนหน้าเว็บ
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    document.querySelectorAll(".reveal").forEach(function (element) {
        observer.observe(element);
    });

    // ปุ่มกลับขึ้นด้านบน
    const backTop = document.getElementById("backTop");

    window.addEventListener("scroll", function () {
        backTop.classList.toggle("show", window.scrollY > 400);
    });

    backTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});
