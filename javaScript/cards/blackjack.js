//blackjack game
const path = require('path')
//get a deck of cards

function BlackJack(){
    //private deck of cards
    const cards = require (path.join(__dirname + '/cards.js'))('./images')
    let playerHand=[]
    let dealerHand=[]

    this.newGame = function(){
        //start a new game

    }
}

let game = new BlackJack

