function initializeGame() {
  return new Promise((resolve) => {
    console.log("Initializing game...");
    setTimeout(() => {
      console.log("Game initialized successfully!");
      resolve();
    }, 2000); 
  });
}