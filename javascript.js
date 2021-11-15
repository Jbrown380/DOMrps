const buttons = document.querySelectorAll("button");
        const gameScore = [0,0];
        for ( let i = 0 ; i < buttons.length ; i++){
            buttons[i].addEventListener("click", playGame);
        }
        function startGame(g){
            for(let i = 0; i < gameScore; i++) {
            let playerChoice = g.target.innerText;
        let computerChoice = Math.floor(Math.random() * 3);
        if (computerChoice === 0 ) {
          computerChoice = "Rock";
        } else if (computerChoice === 1) {
          computerChoice = "Paper";
        } else  {
          computerChoice = "Scissors";
        }
    
        let result = playerScore(playerChoice, computerChoice);
        
        if (result === "Player choicd"){
            result += "wins";
            gameScore[0]++;
        }
 if (result === "Computer choice"){
         result += "wins";
            gameScore[1]++;
        }

        if (result === "Draw"){
            result += "It is a tie"
        }
        score.innerHTML = "Player: [ " + gameScore[0]+ " ] Computer: [ " + gameScore[1] + " ]";
    

        function playerScore(player, computer){
            if (player === computer){
                return "Draw";
            }

            if (player === "Rock"){
                if(computer === "Paper"){
                    return "Computer choice";
                } else {
                    return "Player choice";
                }
            }

            if (player === "Paper"){
                if (computer === "Scissors"){
                    return "Computer choice";
                } else {
                    return "Player choice";
                }
            }
            if (player ==="'Scissors"){
                if (computer === "Rock"){
                    return "Computer choice";
                } else {
                    return "Player choice";
                }
            
            }
        }
    }
}