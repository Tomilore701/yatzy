A single-player Yatzy game implemented with HTML, CSS, and JavaScript. This game allows players to roll dice, keep specific dice, and score points based on Yatzy rules. The game ends after a set number of rounds, with a final score and a message based on the player’s performance.

Features
Roll and Keep Dice: Players can roll up to five dice up to three times per turn and "keep" specific dice for scoring combinations.
Score Calculation: The game calculates scores based on various Yatzy scoring categories, including "Three of a Kind," "Four of a Kind," and "Chance."
Game State Management: Tracks the player’s score, rounds, and roll counts per turn.
End of Game: The game ends after a fixed number of rounds (13), displaying the total score and a final message based on performance.
User Interface and Guidance: Provides visual feedback and messages to guide players through each stage of the game.



How to Play
Click "Roll Dice" to roll all five dice.
Click on individual dice to "keep" them if you wish to prevent them from rolling in the next roll.
You can roll the dice up to three times per turn to try to achieve different scoring combinations.
Once you are satisfied with your roll or after the third roll, click "End Turn" to lock in your score for the current round.
After each round, the game will automatically proceed to the next one.
The game ends after 13 rounds, at which point you’ll see your final score and a message.




Scoring
The game includes the following scoring categories:

Ones through Sixes: Sum of dice showing each specific number.
Three of a Kind: Sum of all dice if three of the same value are rolled.
Four of a Kind: Sum of all dice if four of the same value are rolled.
Full House: A score for three of one kind and two of another (implementation can be added).
Small Straight: A sequence of four consecutive dice values (implementation can be added).
Large Straight: A sequence of five consecutive dice values (implementation can be added).
Chance: Sum of all five dice.
Yatzy: Five of the same value (implementation can be added).
Example Scoring Rules
Three of a Kind: If you roll three dice of the same value, you score the total sum of all five dice.
Four of a Kind: If you roll four dice of the same value, you score the total sum of all five dice.
Chance: This is the sum of all five dice, regardless of the values rolled.
Technologies Used
HTML: Defines the structure and layout of the game.
CSS: Styles the visual elements, including the scorecard, dice, and buttons.
JavaScript: Implements game logic, including rolling dice, scoring, turn management, and end-game messages.