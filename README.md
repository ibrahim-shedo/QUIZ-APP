# Quiz Game Web Application

## Description
This project is a simple, interactive quiz game built using HTML, CSS, and JavaScript. Users can test their knowledge by answering multiple-choice questions. The quiz displays questions one at a time and lets users know if their answer is correct or incorrect. After answering, users can proceed to the next question or restart the quiz when completed.

## Features
- **Interactive UI**: Engaging user interface with buttons for easy interaction.
- **Question Shuffling**: Randomizes questions for each quiz session.
- **Feedback on Answers**: Highlights correct and incorrect answers.
- **Restart Functionality**: Allows users to restart the quiz after completion.
- **Progress Control**: Displays a 'Next' button after each question, and a 'Restart' button when the quiz ends.

## Installation and Setup
1. **Download or Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/quiz-game.git
Open the Project: Navigate to the project folder and open index.html in your web browser.
Project Structure

# How to Play
## Start the Game
Click the "Start" button to begin the quiz.
## Answer Questions
Select an answer by clicking one of the buttons.
## Proceed to Next Question
Click the "Next" button to move to the following question if available.
## Restart
Once all questions are answered, the "Restart" button will appear to replay the quiz.
---

# Code Overview
## JavaScript Functions
- `startGame()`: Initiates the game by hiding the start button, shuffling questions, and showing the question container.
- `setNextQuestion()`: Moves to the next question and resets the state for a new question.
- `showQuestion(question)`: Displays the current question and answers on the page.
- `selectAnswer(e)`: Checks if the selected answer is correct and applies appropriate feedback.
- `setStatusClass(element, correct)`: Applies a class to an element to indicate if an answer is correct or wrong.
- `clearStatusClass(element)`: Removes any status classes from an element to reset its state.
- `resetState()`: Prepares the interface for the next question by clearing previous answers.

## Sample Question Format
javascript const questions = [ { question: 'What is the capital city of Somalia?', answers: [ { text: 'Nairobi', correct: false }, { text: 'Mogadishu', correct: true }, { text: 'Kigali', correct: false }, { text: 'Dar es Salaam', correct: false }, ] }, // Add more questions as needed ];


## Customization
- Add New Questions: Expand the questions array in script.js to add more questions.
- Change Styling: Modify styles.css to customize the look and feel of the application.

## Future Enhancements
- Add a scoring system to keep track of user scores.
- Introduce a timer for each question to increase the challenge.
- Display a summary at the end with correct/incorrect counts.

## Technologies Used
- HTML: Structure of the webpage.
- CSS: Styling (optional, can add more for better UI).
- JavaScript: Game logic and interactivity.

## License
This project is open-source and available under the MIT License.

## Acknowledgments
Inspired by basic quiz applications and tutorials.
Special thanks to any contributors who assist in enhancing this project.
Key points to consider:
Use headers (# for main headers, ## for subheaders) to structure the content.
Use bullet points (-) for lists of items.
Use code blocks (
4. Separate different sections with horizontal lines (---).
5. Maintain consistent indentation for readability.

This Markdown format preserves the structure and content of the original text while making it more readable and easier to parse by Markdown processors.```
