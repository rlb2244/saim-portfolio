// ✅ Typing Animation
document.addEventListener("DOMContentLoaded", () => {
  const text = "Hello, I'm Saim Hussain";
  const typedText = document.getElementById("typed-text");

  if (typedText) {
    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        typedText.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }
    typeWriter();
  }

  // ✅ Scroll Reveal Trigger
  function revealOnScroll() {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight - 100) {
        section.classList.add("reveal");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Trigger on load
});

