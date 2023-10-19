//UI Logic
window.addEventListener("load", function() {
  document.getElementById("question-form").addEventListener("submit", handleFormSubmission);
});

function handleFormSubmission(event) {
  event.preventDefault();
  const question1Input = document.getElementById("question1").value;
  const question2Input = document.getElementById("question2").value;
  const question3Input = document.getElementById("question3").value;
  const question4Input = document.getElementById("question4").value;
  const question5Input = document.getElementById("question5").value;

  if (question1Input == "Blue" && question2Input == "Husky" && question3Input == "Yes" && question4Input == "Biology" && question5Input == "Coding Jobs") {
    document.querySelector("span#result-display").innerText = "Ruby";
  }
  document.getElementById("results").removeAttribute("class");
}