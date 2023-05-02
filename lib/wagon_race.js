// TODO: write your code here

window.addEventListener("keyup", (event) => {
  const currentGrid = event.currentTarget;
  if (event.code === "KeyQ") {
    const player1 = document.querySelector("#player1-race1 td.active");
    player1.classList.remove("active");
    if (!player1.nextElementSibling) {
      alert("Player 1 wins");
    }
    player1.nextElementSibling.classList.add("active");
  }
});

window.addEventListener("keyup", (event) => {
  const currentGrid = event.currentTarget;
  if (event.code === "KeyP") {
    const player2 = document.querySelector("#player2-race1 td.active");
    player2.classList.remove("active");
    if (!player2.nextElementSibling) {
      alert("Player 2 wins");
    }
    player2.nextElementSibling.classList.add("active");
  }
});
