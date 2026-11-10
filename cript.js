// แสดงข้อความต้อนรับเมื่อเปิดเว็บไซต์
document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to Pongsatorn Portfolio!");

    // ทำให้เมนูเลื่อนไปยังหัวข้อที่เลือก
    const menuLinks = document.querySelectorAll('.navbar a');

    menuLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // เอฟเฟกต์แสดงเนื้อหาเมื่อเลื่อนหน้าจอ
    const sections = document.querySelectorAll('.section, .hero');

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(function (section) {
        observer.observe(section);
    });
});
