let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score")
let computerScore_span = document.getElementById("computer-score")
const scoreBoard_div = document.querySelector(".score-board")
const result_div = document.querySelector(".result > p")
const fire_div = document.getElementById("f")
const grass_div = document.getElementById("g")
const water_div = document.getElementById("w")

function getComputerChoice(){
    const choices = ["f", "g", "w"];
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

function convertToWord(letter){
    if (letter === "f") return "Fire";
    if (letter === "w") return "Water";
    return "Grass";
}

function win(user, computer){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(user)} beats ${convertToWord(computer)}. You win!`
}

function lose(user, computer){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(computer)} beats ${convertToWord(user)}. You lose.`
}

function draw(){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `It's a draw.`
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice)  {
        case "fg":
        case "gw":
        case "wf":
            win(userChoice, computerChoice);
            break;
        case "fw":
        case "gf":
        case "wg":
            lose(userChoice, computerChoice);
            break;
        case "ff":
        case "gg":
        case "ww":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    fire_div.addEventListener('click', function (){
        game("f")
    })

    grass_div.addEventListener('click', function (){
        game("g")
    })

    water_div.addEventListener('click', function (){
        game("w")
    })
}

main()
