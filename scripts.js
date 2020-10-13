  

        function computerPlay(){
            let myArray = ["Rock","Paper","Scissors"];
            let randomItem = myArray[Math.floor(Math.random()*myArray.length)];
            return randomItem;
        }

        // function playerPlay(choice){
        //     let move = ["Rock, Paper", "Scissers"]
        //     // let playerSelection = "none";
        //     // console.log(move.includes(playerSelection))
            
                
        //     playerSelection = "rock";
        //     playerSelection = playerSelection.toLowerCase();
        //     playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
        //     return choice
        // }



        function rpsRound(playerSelection,computerSelection){
            if(playerSelection == computerSelection){
                return("Draw");
            }else if(playerSelection == "Scissors" && computerSelection == "Rock" ||
                        playerSelection == "Paper" && computerSelection == "Scissors" ||
                        playerSelection == "Rock" && computerSelection == "Paper"){
                                return("lose");
                            }else{
                                return("Win")
                            }
      
        }

let playerScore = 0;
let compScore = 0;
let rounds = 0;


        function game(player){
                
                document.getElementById('pc').textContent=player;
    
            // while(round <4){
           
                let computerSelection = computerPlay();


                document.getElementById('cc').textContent=computerSelection;
                let playerSelection = player;
                let round = (rpsRound(playerSelection,computerSelection))
                console.log(round)
                if(round == "Draw" ){
                    document.getElementById('result').textContent="Draw";
                    console.log("draw!!!!!")
                    
                }else if(round == "Win"){
                    console.log("WIN -" + playerSelection + " Beats " + computerSelection);
                    let userResult = "Player WIN. " + playerSelection + " Beats " + computerSelection;
                    document.getElementById('result').textContent= userResult;
                    playerScore += 1;
                    
                    
                }else if(round = "Lose"){
                    console.log("Lose -" + computerSelection + " Beats " + playerSelection);
                    let userResult = "You Lose. " + computerSelection + " Beats " + playerSelection;
                    document.getElementById('result').textContent= userResult;
                    compScore += 1;
                }


                console.log("Player: " + playerScore + " Computer: " + compScore)
                document.getElementById('score').textContent="Player: " + playerScore + " Computer: " + compScore;
                rounds = rounds+1;
                document.getElementById('round').textContent="Round: "+rounds;
                console.log(rounds);
           
            
        if(rounds == 4)  {
            if(playerScore > compScore){
                document.getElementById('score').textContent="";
                document.getElementById('round').textContent="";
                document.getElementById('result').textContent= "Player is the winner";
                console.log("Player is the winner")
            }else{
                document.getElementById('score').textContent="";
                document.getElementById('round').textContent="";
                document.getElementById('result').textContent= "Player is the winner";
                console.log("Comp is the winner")
            }
            rounds = 0;
            playerScore = 0;
            compScore = 0;
        }  

        }


     
 
      

        
// gets buttons and adds listeners        
    
const choices = document.querySelectorAll('button');


choices.forEach((choice) =>{
    choice.addEventListener('click', () =>{
//run game if clicked
        game(choice.id)
   
    })
})
    