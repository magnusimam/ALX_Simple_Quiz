// Function to check the answer
function checkAnswer() {
  // Correct answer
  const correctAnswer = "4";

  // Get the selected radio button
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  // If nothing selected, give gentle feedback
  if (!selectedOption) {
    document.getElementById('feedback').textContent = "Please select an answer first.";
    return;
  }

  const userAnswer = selectedOption.value;

  // Compare and give feedback
  if (userAnswer === correctAnswer) {
    document.getElementById('feedback').textContent = "Correct! Well done.";
  } else {
    document.getElementById('feedback').textContent = "That's incorrect. Try again!";
  }
}

// Add event listener to the button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
