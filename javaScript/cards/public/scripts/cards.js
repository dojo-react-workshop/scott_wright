// const Math = require('math')

//deck class constructor
function DeckClass(){
    //private
    const deck = []
    const suits = [
        {name: 'Clubs', short: 'c'},
        {name: 'Diamonds', short: 'd'},
        {name: 'Hearts', short: 'h'},
        {name: 'Spades', short: 's'}
    ]
    const faces = [
        {name: 'Ace', short: '1', value: -1}, //we'll treat a value of -1 as a 1 or 11
        {name: '2', short:'2', value: 2},
        {name: '3', short:'3', value: 3},
        {name: '4', short:'4', value: 4},
        {name: '5', short:'5', value: 5},
        {name: '6', short:'6', value: 6},
        {name: '7', short:'7', value: 7},
        {name: '8', short:'8', value: 8},
        {name: '9', short:'9', value: 9},
        {name: '10', short:'10', value: 10},
        {name: 'Jack', short:'j', value: 10},
        {name: 'Queen', short:'q', value: 10},
        {name: 'King', short:'k', value: 10},

    ]

    //public
    this.imagePath = ''
    this.new = function(){
        //loads the deck array with cards
        //empty the deck
        deck.length = 0

        //populate deck
        suits.forEach((suit)=>{
            faces.forEach((face)=>{
                deck.push(
                    {
                        name: `${face.name} of ${suit.name}`,
                        image: `${this.imagePath}/${suit.short}${face.short}.png`,
                        value: face.value
                    }
                )
            })
        })
    }
    this.shuffle = function(){
        //shuffle the deck by moving each card to a random spot
        let newIndex = 0
        let tempCard = {}
        deck.forEach((card,index)=>{
            //pick a random location and swap the cards
            newIndex = Math.floor((Math.random() * deck.length))
            tempCard = deck[newIndex]
            deck[newIndex] = card
            deck[index]=tempCard
        })
    }
    this.showCards = function(){
        //log the cards in the deck to console for troubleshooting
        deck.forEach((card)=>{
            console.log(card)
        })
    }
    this.cardCount = function(){
        //return the number of cards in the deck
        return deck.length
    }
    this.deal = function(howMany=1){
        //remove the top cards on the deck and return an array of cards removed
        let delt=[]
        for (let i = 1; i<=howMany; i++){
            if (deck.length > 0){
                delt.push(deck.shift())
            } else {
                break // no cards left
            }
        }
        return delt
    }
}

// module.exports = new DeckClass

// let myDeck = new DeckClass('./images')
// myDeck.new()
// myDeck.shuffle()
// myDeck.showCards()
// console.log(myDeck.deal(5))
// console.log(myDeck.cardCount())