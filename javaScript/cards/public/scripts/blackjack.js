//blackjack game
//const path = require('path')
//get a deck of cards

function BlackJack(){
    //private deck of cards
    //const deck = require (path.join(__dirname + '/cards.js'))
    deck = new DeckClass
    let gameOn = true
    deck.imagePath = './images'
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
        })
        for (let i = 1; i <= aceCount; i++){
            //if there were any aces in the hand..
            if (total > 10){
                total+=1
            } else {
                total+=11
            }
        }
        
        return total
    }

    //hands of cards for the players
    let playerCards=[]
    let dealerCards=[]

    //share the status of the game
    this.gameOn = function(){
        return gameOn
    }
    this.gameResult = function(){
        if(gameOn){
            return 'Game is in progress.'
        } else {
            let retString = ``
            if (getScore(playerCards) > 21){
                //player bust
                return 'Player bust, dealer wins!'
            }
            if (getScore(dealerCards) > 21){
                //player bust
                return 'Dealer bust, player wins!'
            }
            if (getScore(playerCards) > getScore(dealerCards)){
                //player wins
                return 'Player wins!'
            } else if (getScore(playerCards) < getScore(dealerCards)) {
                //dealer wins
                return 'Dealer wins!'
            } else {
                //draw
                return 'Push!'
            }
        }
    }
    this.newGame = function(){
        //start a new game
        //clear empty the hands
        playerCards.length = 0
        dealerCards.length = 0

        //reset the deck of cards
        deck.new()
        deck.shuffle()

        //dealer takes 2 cards
        deck.deal(2).forEach((card)=>{
            dealerCards.push(card)
        })

        //player takes 2 cards
        deck.deal(2).forEach((card)=>{
            playerCards.push(card)
        })

        //check if someone already has black jack
        if (getScore(dealerCards) == 21 || getScore(playerCards) == 21){
            gameOn = false
        }
    }
    this.getDealerHand = function(){
        let hand = {}
        hand.cards=dealerCards
        hand.score=getScore(dealerCards)
        return hand
    }
    this.getPlayerHand = function(){
        let hand = {}
        hand.cards=playerCards
        hand.score=getScore(playerCards)
        return hand
    }
    this.dealerTurn = function(){
        if (!gameOn){
            return false
        }
        while (getScore(dealerCards) < 17){
            //dealer will take a card
            deck.deal(1).forEach((card)=>{
                dealerCards.push(card)
            })
        }        
        //game is always over after dealers turn
        gameOn = false
        return true
    }
    this.playerTurn = function(){
        if (!gameOn){
            return false
        }
        //player will take a card
        deck.deal(1).forEach((card)=>{
            playerCards.push(card)
        })        
        if (getScore(playerCards) >= 21){
            //game over
            gameOn = false
        }
        return true
    }
}

