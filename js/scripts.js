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
  } else if (question1Input == "Red" && question2Input == "Chihuahua" && question3Input == "Kind of" && question4Input == "Marine Biology" && question5Input == "Coding tools") {
    document.querySelector("span#result-display").innerText = "C#";
  } else if (question1Input == "Blue" && question2Input == "German Shepherd" && question3Input == "No" && question4Input == "Astronomy" && question5Input == "Coding Languages") {
    document.querySelector("span#result-display").innerText = JavaScript;
  } else if (question1Input == "Red" && question2Input == "Great Dane" && question3Input == "Yes" && question4Input == "Oceanography" && question5Input == "Coding Jobs") {
    document.querySelector("span#result-display").innerText = "Ruby";
  } else if (question1Input == "Blue" &&  question2Input == "Dachshund" && question3Input == "Kind of" && question4Input == "Computer Science" && question5Input == "Coding tools") {
    document.querySelector("span#result-display").innerText = "C#";
  }
  
  document.getElementById("results").removeAttribute("class");
} 