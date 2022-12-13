const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDislplay = document.getElementById('result')
const choices = document.querySelectorAll(".choice")
let userChoice
let computerChoice

choices.forEach( choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.innerHTML
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    generateResult()
}))

function generateComputerChoice() {
    let options = ['Rock', 'Paper', 'Scissors']
    computerChoice = options[Math.floor(Math.random() * choices.length)]
    computerChoiceDisplay.innerHTML = computerChoice
}

function generateResult() {
    switch(userChoice + computerChoice) {
        case 'RockScissors':
        case 'PaperRock':
        case 'ScissorsPaper':
            resultDislplay.innerHTML = 'You win!'
            break;
        case 'ScissorsRock':
        case 'RockPaper':
        case 'PaperScissors':
            resultDislplay.innerHTML = 'You lose!'
            break;
        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
            resultDislplay.innerHTML = 'It\'s a draw!'
            break;
    }
}