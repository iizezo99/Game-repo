

function movePlayer(direction) {
  return new Promise((resolve) => {
    console.log(`Player moving ${direction}...`);
    setTimeout(() => {
      console.log(`Player moved ${direction} successfully!`);
      resolve();
    }, 1000); 
  });
}

let playerScore = 0;
function calculateScore(points) {
  return new Promise((resolve) => {
    setTimeout(() => {
      playerScore += points;
      console.log(`Score updated! Current score: ${playerScore}`);
      resolve(playerScore);
    }, 500); 
  });
}

function checkGameOver() {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (playerScore >= 10) {
        console.log("Game over! You win!");
        resolve("Game Over");
      } else {
        console.log("Continue playing.");
        resolve("Continue");
      }
    }, 500); 
  });
}

initializeGame()
  .then(() => movePlayer("up"))
  .then(() => calculateScore(5))
  .then(() => movePlayer("right"))
  .then(() => calculateScore(5))
  .then(() => checkGameOver())
  .catch((error) => console.error("An error occurred:", error));
