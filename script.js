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
});
document.addEventListener("DOMContentLoaded", () => {
  const sparkleContainer = document.querySelector(".sparkles");
  for (let i = 0; i < 20; i++) {
    const sparkle = document.createElement("span");
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.animationDelay = `${Math.random() * 8}s`;
    sparkleContainer.appendChild(sparkle);
  }
});
