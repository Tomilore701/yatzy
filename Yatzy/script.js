document.addEventListener('DOMContentLoaded', () => {
    const rollButton = document.getElementById('roll-button');
    const endTurnButton = document.getElementById('end-turn-button');
    const diceElements = document.querySelectorAll('.dice');
    let rollCount = 0;
    let round = 1;
    const maxRounds = 13;
    let diceValues = [1, 1, 1, 1, 1];
    let scorecard = {
        ones: 0,
        twos: 0,
        threes: 0,
        fours: 0,
        fives: 0,
        sixes: 0,
        'three-of-a-kind': 0,
        'four-of-a-kind': 0,
        'full-house': 0,
        'small-straight': 0,
        'large-straight': 0,
        chance: 0,
        yatzy: 0,
        'total-score': 0
    };

    
    rollButton.addEventListener('click', rollDice);
    endTurnButton.addEventListener('click', endTurn);

    
    function rollDice() {
        if (rollCount < 3) {
            rollCount++;
            diceValues = diceValues.map((value, index) => {
                const dice = diceElements[index];
                if (!dice.classList.contains('kept')) {
                    const newRoll = Math.floor(Math.random() * 6) + 1;
                    dice.innerText = newRoll;
                    return newRoll;
                }
                return value;
            });

            showMessage(`Roll ${rollCount}/3 completed. Select dice to keep.`);
            if (rollCount === 3) {
                rollButton.disabled = true;
                showMessage("Max rolls reached. Select your score or end the turn.");
            }
            endTurnButton.disabled = false;
        }
    }

    
    diceElements.forEach((dice, index) => {
        dice.addEventListener('click', () => {
            if (rollCount > 0) {
                dice.classList.toggle('kept');
                showMessage(`Dice ${index + 1} is ${dice.classList.contains('kept') ? 'kept' : 'released'}.`);
            }
        });
    });

    
    function endTurn() {
        calculateScores(); 
        updateScorecard();
        resetTurn();
        nextRound();
    }

    
    function calculateScores() {
        const counts = countDiceValues();
        
        
        if (Object.values(counts).some(count => count >= 3)) {
            scorecard['three-of-a-kind'] = diceValues.reduce((a, b) => a + b, 0);
            showMessage("Three of a Kind scored.");
        }

        
        if (Object.values(counts).some(count => count >= 4)) {
            scorecard['four-of-a-kind'] = diceValues.reduce((a, b) => a + b, 0);
            showMessage("Four of a Kind scored.");
        }

        
        scorecard['chance'] = diceValues.reduce((a, b) => a + b, 0);

        
        scorecard['total-score'] = Object.values(scorecard).reduce((a, b) => a + b, 0);
    }

    
    function countDiceValues() {
        return diceValues.reduce((acc, value) => {
            acc[value] = (acc[value] || 0) + 1;
            return acc;
        }, {});
    }

    
    function updateScorecard() {
        for (let category in scorecard) {
            const cell = document.getElementById(category);
            if (cell) {
                cell.innerText = scorecard[category];
            }
        }
    }

    
    function resetTurn() {
        diceElements.forEach(dice => dice.classList.remove('kept'));
        rollCount = 0;
        rollButton.disabled = false;
        endTurnButton.disabled = true;
    }

    
    function nextRound() {
        round++;
        if (round > maxRounds) {
            endGame();
        } else {
            showMessage(`Round ${round} begins. Roll the dice!`);
        }
    }

    
    function showMessage(message) {
        const messageElement = document.getElementById('game-message');
        if (!messageElement) {
            const newMessageElement = document.createElement('div');
            newMessageElement.id = 'game-message';
            newMessageElement.style.marginTop = '10px';
            newMessageElement.style.fontWeight = 'bold';
            document.getElementById('game-container').appendChild(newMessageElement);
        }
        document.getElementById('game-message').innerText = message;
    }

    
    function endGame() {
        rollButton.disabled = true;
        endTurnButton.disabled = true;
        showMessage(`Game Over! Your final score is ${scorecard['total-score']}. ${getFinalMessage()}`);
    }

    
    function getFinalMessage() {
        if (scorecard['total-score'] >= 200) {
            return "Excellent! You mastered Yatzy!";
        } else if (scorecard['total-score'] >= 100) {
            return "Good job! Keep practicing to improve!";
        } else {
            return "Better luck next time!";
        }
    }
});
