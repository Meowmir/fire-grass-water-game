const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("computer-score")
const scoreBoard_div = document.querySelector(".score-board")
const result_div = document.querySelector(".result")
const fire_div = document.getElementById("f")
const grass_div = document.getElementById("g")
const water_div = document.getElementById("w")

function getComputerChoice(){
    const choices = ["f", "g", "w"];
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice)  {
        case "fg":
        case "gw":
        case "wf":
            console.log("USER WINS!");
            break;
        case "fw":
        case "gf":
        case "wg":
            console.log("USER LOSES.");
            break;
        case "ff":
        case "gg":
        case "ww":
            console.log("It's a draw.");
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
