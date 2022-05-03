class PaperRockScissors {
    constructor(){
        let userChoice = prompt('Please enter a value:', 'rock,paper,scissors');
        let computerChoice; 
        const choices = ['rock','paper','scissors'];
        function rock() {
            switch (userChoice + computerChoice){
                case 'rockscissors': return "you win";
                console.log('you win'); 
                break;
                case 'rockpaper' : return "you lose";
                console.log('you lose'); 
                break; 
            }
        }
        function paper() {
            switch (userChoice + computerChoice){
                case 'paperrock': return "you win";
                console.log('you win'); 
                break;
                case 'paperscissors' : return "you lose";
                console.log('you lose'); 
                break; 
            }

        }
        function scissors() {
            switch (userChoice + computerChoice){
                case 'scissorspaper': return "you win";
                console.log('you win'); 
                break;
                case 'scissorsrock' : return "you lose";
                console.log('you lose'); 
                break; 
            }
        }

        function validChoice(userChoice){
            if (userChoice == choices[0] || userChoice == choices[1] || userChoice == choices[2]) {
                console.log(userChoice);
            }    
        }
            

        let generateComputerChoice = () => {
            const randomChoice = choices[Math.floor(Math.random() * choices.length)];
            computerChoice = randomChoice;
            console.log(computerChoice); 
        };

        const getResult =(userChoice, computerChoice) =>{
            if (userChoice + computerChoice == rockscissors || rockpaper ){
                rock();
            }
            if (userChoice + computerChoice == paperrock || paperscissors ){
                paper();
            }
            if (userChoice + computerChoice == scissorspaper || scissorsrock ){
                scissors();
            }
        } 
        
        let myPromise = new Promise ((resolve, reject) => {
            resolve(validChoice(userChoice));
        })
        .then(() => {
            generateComputerChoice;
        })
        .then(() => {
            getResult;
        })
    }
}