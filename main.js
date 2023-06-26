// Menambahkan efek smooth scrolling pada navigation links
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll("header nav a");

  navLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
});

// Menambahkan class "active" pada navigation link yang sedang aktif
document.addEventListener("scroll", function() {
  const sections = document.querySelectorAll("section");
  
  sections.forEach(function(section) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollPosition = window.pageYOffset;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      const sectionId = section.getAttribute("id");
      const correspondingLink = document.querySelector(`header nav a[href="#${sectionId}"]`);
      
      document.querySelectorAll("header nav a").forEach(function(link) {
        link.classList.remove("active");
      });
      
      correspondingLink.classList.add("active");
    }
  });
});
