
let hasBlackjack = false;
let isAlive = false;
let sum = 0;
let cards = document.getElementById("cards");
let sum_el = document.getElementById("sum-el");
let cards_arr = [];


function startGame(){
    isAlive = true;

    let firstCard = Math.ceil((Math.random() * 10) + 1);
    let secondCard = Math.ceil((Math.random() * 10) + 1);

    cards_arr = [firstCard, secondCard];
    sum = firstCard + secondCard;
    playGame();
}

function playGame (){
    output = "Cards: ";
    for(let i = 0; i < cards_arr.length; i++){
        output += " " + cards_arr[i];
    }
    cards.textContent = output;
    sum_el.textContent = "Sum: " + sum;
    if(sum <= 20){
        message = "Do you want to draw a new card? ";
    } else if (sum === 21){
        message = " You've got Blackjack! ";
        hasBlackjack = true;
    } else {
        message = "You lost! ";
        isAlive = false;
    }
    document.getElementById("message").textContent = message;
}
function newCard(){
    if(isAlive === true && hasBlackjack === false){
        let newCard = Math.ceil((Math.random() * 10) + 1);
        cards_arr.push(newCard);
        sum = sum + newCard;
        sum_el.textContent = "Sum: " + sum;
        cards.textContent = cards.textContent + cards_arr;
        playGame();

    }
    
}

