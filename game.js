
function movePlayer(direction) {
  return new Promise((resolve) => {
    console.log(`Player moving ${direction}...`);
    setTimeout(() => {
      console.log(`Player moved ${direction} successfully!`);
      resolve();
    }, 1000); 
  });
}
