//global game variable
let game = new BlackJack
$(document).ready(function(){
    
    //setup a new game
    game.newGame()

    //draw initial screen
    updateDisplay()

    //new game button just refreshes-- starts it over
    $('#newButton').click(function(){
        location.reload()
    })

    //done taking cards, dealers turn
    $('#stayButton').click(function(){
        game.dealerTurn()
        updateDisplay()
    })

    //players turn
    $('#hitButton').click(function(){
        game.playerTurn()
        updateDisplay()
    })
})


function updateDisplay(){
     //display dealer cards
    let cardHTML = ``
    let scoreText = ''
    let theHand = game.getDealerHand()
    scoreText = `Dealer Holds: ${theHand.score}, `
    theHand.cards.forEach(function(card){
        cardHTML += `<img src="${card.image}" alt="${card.name}">`
    })
    $('#dealer').html(cardHTML)

    //display player cards
    cardHTML = ''
    theHand = game.getPlayerHand()
    scoreText += `Player Holds: ${theHand.score} - `
    theHand.cards.forEach(function(card){
        cardHTML += `<img src="${card.image}" alt="${card.name}">`
    })
    $('#player').html(cardHTML)
    scoreText += game.gameResult()
    
    //update the score
    $('#score').text(scoreText)

    //if someone already won, fade out the hit/stay buttons
    if (!game.gameOn()){
        $('#hitButton').fadeOut()
        $('#stayButton').fadeOut()
    }
}