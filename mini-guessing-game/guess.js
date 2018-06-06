let num=103.908769
console.log(num.toFixed(2))

//round method

console.log(Math.round(num))

console.log(Math.floor(num))
console.log(Math.ceil(num))
let min=10
let max =20
//First we will go from0-10 then we add min to go to 20
let randomNum = Math.floor(Math.random() * (max-min+1))+min
console.log(randomNum)


//Guessing game
//create a function. take guess as input
//return random-true if correct -false otherwise



let makeGuess = function(guess){
    let min1=1
    let max1 = 5
    randomNum = Math.floor(Math.random() * (max-min+1))+min
    return guess===randomNum

}

console.log(makeGuess(5))



