document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", () => {
      navbar.classList.toggle("active");
      menuIcon.classList.toggle("bx-x"); // change icon to 'X'
    });

    // Optional: close navbar when clicking a nav link
    document.querySelectorAll(".navbar a").forEach(link => {
      link.addEventListener("click", () => {
        navbar.classList.remove("active");
        menuIcon.classList.remove("bx-x");
      });
    });
  });


  let wordElements = document.querySelectorAll(".word");

  wordElements.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = ""; // Clear original text
  
    letters.forEach((letter) => {
      let span = document.createElement("span");
      span.textContent = letter;
      span.className = "letter";
      word.append(span);
    });
  });
  
  // State tracking
  let currentWordIndex = 0;
  let maxWordIndex = wordElements.length - 1;
  
  // Set first word visible
  wordElements[currentWordIndex].style.opacity = "1";
  
  const changeText = () => {
    let currentWord = wordElements[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? wordElements[0] : wordElements[currentWordIndex + 1];
  
    const currentLetters = Array.from(currentWord.children);
    const nextLetters = Array.from(nextWord.children);
  
    // Fade out current word
    currentLetters.forEach((letter, i) => {
      setTimeout(() => {
        letter.className = "letter out";
      }, i * 80);
    });
  
    // Prepare next word
    nextWord.style.opacity = "1";
    nextLetters.forEach((letter, i) => {
      letter.className = "letter behind";
      setTimeout(() => {
        letter.className = "letter in";
      }, 340 + i * 80);
    });
  
    // Update index
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
  };
  
  // Start the animation
  changeText();
  setInterval(changeText, 3000);
  

  document.querySelectorAll(".word").forEach((el) => {
    const letters = el.textContent.split("");
    el.textContent = "";
    letters.forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.className = "letter";
      el.appendChild(span);
    });
  });


 // Example toggle function (optional)
function toggleEmailInput() {
  const wrapper = document.getElementById("emailInputWrapper");
  wrapper.style.display = wrapper.style.display === "none" ? "block" : "none";
}