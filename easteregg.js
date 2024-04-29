document.addEventListener("DOMContentLoaded", function() {
    const basket = document.getElementById("basket");
    const note = document.getElementById("note");
    const background = document.getElementById("background");
    const pauseButton = document.getElementById("pauseButton");
    const scoreDisplay = document.getElementById("score");
  
    let score = 0;
    let isPaused = false;
  
    function moveBasket(direction) {
      const currentPosition = parseFloat(getComputedStyle(basket).left);
      const containerWidth = parseFloat(getComputedStyle(document.getElementById("game-container")).width);
      const basketWidth = parseFloat(getComputedStyle(basket).width);
  
      let newPosition;
  
      if (direction === "left" && currentPosition > 0 && !isPaused) {
        newPosition = Math.max(0, currentPosition - 10); // Augmenter la vitesse ici
      } else if (direction === "right" && currentPosition < containerWidth - basketWidth && !isPaused) {
        newPosition = Math.min(containerWidth - basketWidth, currentPosition + 10); // Augmenter la vitesse ici
      } else {
        return; // Arrête la fonction si le panier est déjà au bord de l'écran ou si le jeu est en pause
      }
  
      basket.style.left = newPosition + "px";
    }
  
    document.addEventListener("keydown", function(event) {
      if (event.key === "ArrowLeft") {
        moveBasket("left");
        background.style.filter = "grayscale(0%)";
      } else if (event.key === "ArrowRight") {
        moveBasket("right");
        background.style.filter = "grayscale(0%)";
      } else if (event.key === " ") { // Spacebar for pause/resume
        isPaused = !isPaused;
        if (isPaused) {
          pauseButton.innerText = "Resume";
        } else {
          pauseButton.innerText = "Pause";
        }
      }
    });
  
    document.addEventListener("keyup", function(event) {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        background.style.filter = "grayscale(100%)";
      }
    });
  
    function dropNote() {
      const randomPosition = Math.random() * (parseFloat(getComputedStyle(document.getElementById("game-container")).width) - parseFloat(getComputedStyle(note).width));
      note.style.top = "0";
      note.style.left = randomPosition + "px";
    }
  
    function checkCollision() {
      const basketRect = basket.getBoundingClientRect();
      const noteRect = note.getBoundingClientRect();
  
      if (basketRect.left < noteRect.right && basketRect.right > noteRect.left && basketRect.top < noteRect.bottom && basketRect.bottom > noteRect.top) {
        score++;
        scoreDisplay.innerText = score; // Correction: Affichage du score
        dropNote();
      }
    }
  
    setInterval(function() {
      if (!isPaused) {
        const currentTop = parseFloat(getComputedStyle(note).top);
        const containerHeight = parseFloat(getComputedStyle(document.getElementById("game-container")).height);
        const noteHeight = parseFloat(getComputedStyle(note).height);
    
        if (currentTop + noteHeight >= containerHeight) {
          dropNote();
        } else {
          note.style.top = (currentTop + 5) + "px";
          checkCollision();
        }
      }
    }, 30);
  
    dropNote();
  });
  