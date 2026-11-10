// แสดงปีปัจจุบันในส่วนท้ายเว็บไซต์
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// เปิดและปิดเมนูบนโทรศัพท์
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // เมื่อกดเมนูแล้ว ให้ปิดเมนู
  const menuItems = navLinks.querySelectorAll("a");

  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      navLinks.classList.remove("active");
    });
  });
}

// ปุ่มกลับขึ้นด้านบน
const backToTop = document.getElementById("backToTop");

if (backToTop) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
