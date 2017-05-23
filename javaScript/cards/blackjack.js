//blackjack game
const path = require('path')
//get a deck of cards

function BlackJack(){
    //private deck of cards
    const cards = require (path.join(__dirname + '/cards.js'))
    function getScore(cards){
        //returns the value of a given set of cards
        let total = 0
        let aceCount = 0 
        cards.forEach((card)=>{
            if (card.value == -1){
                //track aces to see how to treat tham at the end
                aceCount ++
            } else {
                total += card.value
            }
            for (let i = 1; i <= aceCount; i++){
                //if there were any aces in the hand..
                if (total >= 10){
                    total+=1
                } else {
                    total+=11
                }
            }
        })
        return total
    }

    //hands of cards for the players
    let playerHand=[]
    let dealerHand=[]

    this.newGame = function(){
        //start a new game
        //clear empty the hands
        playerHand.length = 0
        dealerHand.length = 0

        //reset the deck of cards
        cards.new()
        cards.shuffle()

        //dealer takes 3 cards
        cards.deal(3).forEach((card)=>{
            dealerHand.push(card)
        })

        //player takes 3 cards
        cards.deal(3).forEach((card)=>{
            playerHand.push(card)
        })
    }
    this.getDealerHand = function(){
        let hand = {}
        hand.cards=dealerHand
        hand.score=getScore(dealerHand)
        return hand
    }
}

let game = new BlackJack
game.newGame()
console.log(game.getDealerHand())

