var score = localStorage.getItem("score");
document.getElementById("Score").textContent = score

function showHighscores() {
 
    // pull high scores from local storage
  
    
    for (let i = 0; i < score.length; i = i + 2) {
      var element = document.createElement("li");
      var textElement = document.createTextNode(
        score[i] + "  " + score[i + 1]
      );
      element.appendChild(textElement);
      document.getElementById("scoreList").appendChild(element);
    }
  }