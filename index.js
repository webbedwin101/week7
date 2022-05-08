class PaperRockScissors {
    constructor(){
        let userChoice = prompt('Please enter a value:', 'rock,paper,scissors');
        let computerChoice; 
        const choices = ['rock','paper','scissors'];
        let generateComputerChoice = () => {
            const randomChoice = choices[Math.floor(Math.random() * choices.length)];
            computerChoice = randomChoice;
            console.log(computerChoice); 
        };
        generateComputerChoice(); 
        let compareChoice = userChoice + computerChoice; 
        const getResult=() =>{
            if (compareChoice== 'rockscissors' || 'rockpaper' ){
                rock();
            }
            if (compareChoice== 'paperrock' || 'paperscissors' ){
                paper();
            }
            if (compareChoice== 'scissorspaper' || 'scissorsrock' ){
                scissors();
            }
        }
        getResult(); 
        function rock() {
            switch (userChoice + computerChoice){
                case 'rockscissors':
                console.log('you win'); 
                break;
                case 'rockpaper' :
                console.log('you lose'); 
                break; 
            }
        }
        function paper() {
            switch (userChoice + computerChoice){
                case 'paperrock': 
                console.log('you win'); 
                break;
                case 'paperscissors' :
                console.log('you lose'); 
                break; 
            }
        }
        function scissors() {
            switch (userChoice + computerChoice){
                case 'scissorspaper':
                console.log('you win'); 
                break;
                case 'scissorsrock' : 
                console.log('you lose'); 
                break; 
            }
        }
        // function validChoice(userChoice){
        //     if (userChoice == choices[0] || userChoice == choices[1] || userChoice == choices[2]) {
        //         console.log(userChoice);
        //     }    
        // }
        
        // let myPromise = new Promise ((resolve, reject) => {
        //     resolve(validChoice(userChoice));
        // })
        // .then(() => {
        //     generateComputerChoice;
        // })
        // .then(() => {
        //     getResult;
        // })
    }
}

module.export.PaperRockScissors = PaperRockScissors; 