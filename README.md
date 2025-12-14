🎮 Tic-Tac-Toe (JavaScript DOM Game)

A minimal, elegant Tic-Tac-Toe game built with vanilla JavaScript, focusing on DOM manipulation, clean UI, and clear game logic.
No frameworks. No libraries. Just the fundamentals done right.

⸻

 Features
	•	Interactive 3×3 Tic-Tac-Toe board
	•	Turn-based gameplay (X vs O)
	•	Automatic win detection
	•	Game status display (turns & winner)
	•	Reset functionality
	•	Modern dark UI with smooth visuals
	•	Fully responsive layout

⸻

 What This Project Demonstrates

This project was built to practice and demonstrate:
	•	DOM selection and manipulation
	•	Event handling in JavaScript
	•	Game state management
	•	Conditional logic for win detection
	•	Clean separation of UI and logic
	•	Writing readable, maintainable frontend code

Small project, strong fundamentals.

⸻

🛠️ Tech Stack
	•	HTML5 – structure
	•	CSS3 – layout, styling, dark theme
	•	JavaScript (ES6) – game logic & DOM control

No external dependencies.

⸻

📸 Screenshot
<img width="1440" height="900" alt="Screenshot 2025-12-15 at 1 53 00 AM" src="https://github.com/user-attachments/assets/12444b6e-eb9e-44c0-82c5-6dae0f1c2453" />

<img width="1440" height="900" alt="Screenshot 2025-12-15 at 1 53 08 AM" src="https://github.com/user-attachments/assets/141bcf1d-46fb-4ecf-b6c5-98c1c43477d8" />

⸻

⚙️ How the Game Works (DOM Logic Explained)

This game is entirely controlled using JavaScript DOM manipulation.
	•	Each cell of the board is a DOM element (div/button).
	•	A JavaScript array stores the current board state.
	•	Clicking a cell triggers an event listener.
	•	The current player (X or O) is inserted into the clicked cell.
	•	After every move:
	•	The board state is updated
	•	Win conditions are checked
	•	The turn is switched

Win Detection
	•	All possible winning combinations (rows, columns, diagonals) are predefined.
	•	After each move, the game checks whether the current player occupies all positions of any winning pattern.
	•	If a match is found:
	•	The game status updates to show the winner
	•	Further clicks are disabled

Reset Logic
	•	The Reset button clears:
	•	Board UI
	•	Internal game state
	•	Active player
	•	The game starts fresh without reloading the page.



Free to use for learning and experimentation.
