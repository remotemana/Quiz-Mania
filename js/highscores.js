var score = JSON.parse(localStorage.getItem("score"));
console.log(score)

showHighscores()
function showHighscores() {
    for (let i = 0; i < score.length; i = i + 2) {

      console.log(score[i], score[i + 1])
    
      var liElement = document.createElement("li");
      var textElement = document.createTextNode(
        score[i] + ":  " + score[i + 1]
      );
    
      liElement.appendChild(textElement);
      document.getElementById("scoreList").appendChild(liElement);
    }

  
  }
  