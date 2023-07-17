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
    const userChoice_div = document.getElementById(user)
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(user)} beats ${convertToWord(computer)}. You win!`
    userChoice_div.classList.add("green-glow")
    setTimeout(() =>
        userChoice_div.classList.remove("green-glow")
    , 300);
}

function lose(user, computer){
    const userChoice_div = document.getElementById(user)
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(computer)} beats ${convertToWord(user)}. You lose.`
    userChoice_div.classList.add("red-glow")
    setTimeout(() =>
        userChoice_div.classList.remove("red-glow")
    , 300);
}

function draw(user, computer){
    const userChoice_div = document.getElementById(user)
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `It's a draw.`
    userChoice_div.classList.add("grey-glow")
    setTimeout(() =>
        userChoice_div.classList.remove("grey-glow")
    , 300);
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
    fire_div.addEventListener('click', () => game("f"))

    grass_div.addEventListener('click',  () => game("g"))

    water_div.addEventListener('click', () => game("w"))
}

main()
