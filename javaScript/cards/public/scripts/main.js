//global game variable
let game = new BlackJack
$(document).ready(()=>{
    
    //setup a new game
    game.newGame()

    //display dealer cards
    let cardHTML = ``
    let scoreText = ''
    let theHand = game.getDealerHand()
    scoreText = `Dealer Holds: ${theHand.score}, `
    theHand.cards.forEach((card)=>{
        cardHTML += `<img src="${card.image}" alt="${card.name}">`
    })
    $('#dealer').html(cardHTML)

    //display player cards
    cardHTML = ''
    theHand = game.getPlayerHand()
    scoreText += `Player Holds: ${theHand.score} - `
    theHand.cards.forEach((card)=>{
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

    //new game button
    $('#newButton').click(()=>{
        location.reload()
    })
})


