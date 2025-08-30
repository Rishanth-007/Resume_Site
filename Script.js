// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
  
  // Reveal sections on scroll
  const sections = document.querySelectorAll(".section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });
  
  sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
  });
  
  // Navbar active link highlight
  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + 100;
    document.querySelectorAll("nav a").forEach(link => {
      const section = document.querySelector(link.getAttribute("href"));
      if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
  