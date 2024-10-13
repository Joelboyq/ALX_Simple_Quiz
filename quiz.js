// Function to check the user's answer
function checkAnswer() {
    // The correct answer for the quiz
    var correctAnswer = "4";

    // Get the user's selected answer using querySelector
    var userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Check if an answer was selected
    if (userAnswer) {
        // Get the value of the selected radio button
        userAnswer = userAnswer.value;

        // Compare user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            document.getElementById("feedback").textContent = "Correct! Well done.";
        } else {
            document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        }
    } else {
        // If no answer is selected, ask the user to choose an option
        document.getElementById("feedback").textContent = "Please select an answer!";
    }
}

// Add event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);