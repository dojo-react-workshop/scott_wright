$(document).ready(()=>{
    let game = new BlackJack
    game.newGame()
    //display dealer cards
    let cardHTML = ``
    game.getDealerHand().cards.forEach((card)=>{
        cardHTML += `<img src="${card.image}" alt="${card.name}">`
    })
    $('#dealer').html(cardHTML)

    //display player cards
    cardHTML = ''
    game.getPlayerHand().cards.forEach((card)=>{
        cardHTML += `<img src="${card.image}" alt="${card.name}">`
    })
    $('#player').html(cardHTML)
    
    // console.log('player hand')
    // console.log(game.getPlayerHand())
    // while (game.getPlayerHand().score < 17){
    //     game.playerTurn()
    //     console.log('player hand')
    //     console.log(game.getPlayerHand())
    // }
    // game.dealerTurn()
    // console.log('dealer hand')
    // console.log(game.getDealerHand())
    // console.log(game.gameResult())
})
