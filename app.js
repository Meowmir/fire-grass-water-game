const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("computer-score")
const scoreBoard_div = document.querySelector(".score-board")
const result_div = document.querySelector(".result")
const fire_div = document.getElementById("f")
const grass_div = document.getElementById("g")
const water_div = document.getElementById("w")

fire_div.addEventListener('click', function (){
    console.log("You clicked FIRE!")
})

grass_div.addEventListener('click', function (){
    console.log("You clicked GRASS!")
})

water_div.addEventListener('click', function (){
    console.log("You clicked WATER!")
})
