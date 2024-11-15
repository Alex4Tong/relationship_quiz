// script.js
const form = document.getElementById("quiz-form");
const questions = document.getElementById("questions");
const finalMessage = document.getElementById("final-message");
const nameInput = document.getElementById("partner-name");
const namePlaceholders = document.querySelectorAll("#name-placeholder, #name-placeholder-2, #name-placeholder-3");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!questions.style.display || questions.style.display === "none") {
    // Show questions
    questions.style.display = "block";

    // Fill placeholders
    namePlaceholders.forEach((placeholder) => {
      placeholder.textContent = nameInput.value;
    });

    nameInput.disabled = true; // Prevent editing the name
  } else {
    // Show final message
    questions.style.display = "none";
    finalMessage.style.display = "block";
  }
});
