// let age = 100
// 
// if (age < 100) {
 // console.log("you not allowed to enter")
// } else if (age ===100) {
 // console.log("Welcome to the Club")
 // } else {
  // console.log("your reservation is available")
 // }

 // let firstCard = 10
 // let secondCard =1
 // let sum = firstCard + secondCard
 // let hasBlackjack = false
 // let isAlive = true
// 
 // if (sum <= 20) {
  // console.log("Do you want to draw a new Card?")
 // } else if (sum === 21){
  // console.log("Woho! You've got a Blackjack")
  // hasBlackjack = true
 // } else {
  // console.log("You're out of the game")
  // isAlive = false
 // }
// 
 // console.log(hasBlackjack)
  // ADDING MESSAGE VARIABLE
 // let firstCard = 6
 // let secondCard =15
 // let sum = firstCard + secondCard
 // let hasBlackjack = false
 // let isAlive = true
 // let message = " "

 // if (sum <= 20) {
 // message = "Do you want to draw a new Card?"
 // } else if (sum === 21){
 // message = "Woho! You've got a Blackjack"
 // hasBlackjack = true
 // } else {
 // message = "You're out of the game"
 // isAlive = false
 // }
//
// //console.log(message)
// 
// 
// // FUNCTION APPLICATION IN BLACKJACK GAME
//// 
 let firstCard = 10
 let secondCard =1
 let cards = [firstCard, secondCard] // Arrays are ordered list of items. they are zero index(start counting from zero)
 let sum = firstCard + secondCard
 let hasBlackjack = false
 let isAlive = true
 let message = " "//


    
 let messageEl = document.getElementById("message-el")
 let sumEl = document.getElementById("sum-el")
 let cardEL = document.querySelector("#card-el")//QuerySelectors are used also to get element by id. But always indicate ("#") with the html id.
//// //console.log(cardEL)//
//
 function startGame(){ //to rename a function from starGame to RenderGame
   renderGame()
}//
//
function renderGame() {  
  cardEL.textContent = "Cards: " 

  for( let i = 0; i <cards.length; i++)[ 
    cardEL.textContent += cards[i] + " "// displays the new card drawn with the previous cards
  ]
    
    sumEl.textContent = "Sum:" + sum
      if (sum <= 20) {
      message = "Do you want to draw a new Card?"
    } else if (sum === 21){
      message = "You've got a Blackjack"
      hasBlackjack = true
    } else {
      message = "You're out of the game"
      isAlive = false
    }
    messageEl.textContent = message 
}
function newcard(){
     //console.log("Draw a new card from the deck!")
    let card = 8
    sum += card
    cards.push(card) // to add a new card among arrays
  
  renderGame()
}

//WORKING WITH ARRAYS...(note, the bracket is squared)
//let course = [
//      "maths",
//      1086,
//      "science",
//      true
//]
//
//let newMessage = "same here"
//course.push(newMessage)
//console.log(course)
//course.push(64)//VARIABLE.push is used to add data to arrays that are nt listed on the array, then call the array buy using the "CONSOLE.LOG(VARIABLE)"
//METHODS are function on an object.

//course.pop()//removes the last data on an array, its the opposite of push.
//console.log(course)

//console.log( course.length )// = 4 cos d length in array is not zero index, the count as normal counting.
//coposite/complex arrays are arrays with strings nd number
//primitive data types are data with strings, booleans and numbers

//COUNTING IN JAVASCRIPT 
//counting in javascript STARTS WITH FOR-LOOP(for(){})
//counting needs 3 PARAMETERS-----
//-------WHERE THE COUNTING SHOULD START FROM(LET COUNT = 1)
//-------WHERE IS TE FINSIH LINE (COUNT < 20)
//-------WHAT IS THE STEO SIZE TO BE USED (COUNT += 1)...
//for( let i = 10; i <= 100; i+=10 ){
//  console.log(i)
//}
//
//for(let i=1; i <7; i+=1){
//  console.log(i)
//}

//FOR LOOPS AND ARRAY

//let classes = ["Nursery", "Primary", "Secondary", "Intermediate", 13456,7896 ]
////for (let i = 0; i < 5; i += 1)[//here can only count from 1 to 5 based on the data given on the array.
//for (let i = 0; i < classes.length; i += 1)[//XYX.LENGTH gives the full list in an array if an additional item is added to the array but .push
//  console.log(classes[i])
//]


//ARRAY, LOOPS AND DOM displaying content on a page
//let greetingEL = document.querySelector("#greeting-el")
//let sentence = ["hello ", "My ", "name ", "is ", "Richard"]
//
//for(let i = 0; i < sentence.length; i ++)[//(++ Or +=) gives same count on array list
//  //greetingEL.textContent += sentence [i] //(+=) is used to get all data on the array to display.
//
//  greetingEL.textContent += sentence [i] + " "// Removes the spaces btw arrays with strings
//]
//

//RETURN STATEMENT WITH CONDITIONALS

//let player1Time = 102
//let player2Time =107
//
//function getFastestRaceTime(){
//  if(player1Time  < player2Time){
//    return player1Time
//  }else if (player2Time < player1Time){
//    return player2Time
//  }else{
//    return player1Time   
//  }
//}
// 
//let fastestRace = getFastestRaceTime()
//
//console.log(fastestRace)

let details = {
  name: "Richard Ezeagu",
  age: "33 years",
  country: "Nigeria."
}

function logData(){
  console.log(details.name + " is " + details.age + " old and lives in " + details.country) 
}

logData()


let age = 100

if(age < 6){
  console.log("you have a free ride")
}
else if(age < 18) {
  console.log("your gat a children discount")
}
  else if(age < 27){
    console.log("you gat a student discount")
  }
  else if(age < 67){
    console.log("full payment please")
  }
else {
  console.log("senior citizen discount")
}   
  

let largeCountries = ["china", "indian", "USA", "Indonesia", "Pakistan"]

for(let i= 0; i < largeCountries.length; i++){
  console.log( "-" + largeCountries[i])
}

let largeCountrie = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]
largeCountrie.pop()
largeCountrie.push("China", "Pakistan")
largeCountrie.shift()
largeCountrie.unshift("Kenya")

console.log(largeCountrie)

let dayOfMonth = 13
let weekday = "Friday"

if(dayOfMonth === 13 && weekday === "Friday"){
  console.log("welcome to the New Month")
}

//working with Return function....

let hands = ["rock", "paper", "scissors"]
function getHand(){
  let randomIndex = Math.floor(Math.random()*3)
  return hands[randomIndex]
}

console.log(getHand())


