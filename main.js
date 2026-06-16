// Scroll smooth
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
  });
  
  // Animation on scroll
  const cards = document.querySelectorAll(".card");
  
  window.addEventListener("scroll", () => {
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
      }
    });
  });