let renderer = new Renderer()
let board = new GoldRush(2,2)                       //2 as a place holder 

let game = false

const startGame = () => {                
    try{
    game = true
    $('#board').css('border-right','solid black 4px')           //design bug
    const rowNum = $('#input-rows').val()
    const colNum = $('#input-columns').val()
    board = new GoldRush(rowNum,colNum)
    let amountOfCoins = Math.round(rowNum * colNum /3)       //33% coins
    if(amountOfCoins%2===0){amountOfCoins++}                //uneven -so there'll b only one winner!
    board.generateRandomCoins(amountOfCoins)        
    let amountOfWalls = Math.round(rowNum * colNum /5)              //20% walls
    board.generateRandomWalls(amountOfWalls)
    renderer.renderBoard(board.matrix, board.rowNum, board.colNum, board.playersScores)
    $('#play-btn').text('Play again')
    } catch(err){
    alert('Please enter rows and columns!')
    } 
}

$('#play-btn').click(startGame)

const checkEndGame = () => {
    if(!board.findCoordinate('c')){
        game = false
        let winner
        board.playersScores[1] < board.playersScores[2] ? winner = 'Player 2' : winner = 'Player 1'
        setTimeout(()=> {
            alert(`All coins collected!\nCongrats ${winner}!`)
            let anotherRound = confirm('Want another game?')
            if (anotherRound) { startGame()}
        },500)
    }
}


$(document).keypress( (e) => {          //keyboard control

    if (e.which == 105) {       //i
          board.movePlayer(2, "up")
          renderer.renderBoard(board.matrix, board.rowNum, board.colNum, board.playersScores)
          if(game){checkEndGame()}
    }

    if (e.which == 107) {       //k
        board.movePlayer(2, "down")
        renderer.renderBoard(board.matrix, board.rowNum, board.colNum, board.playersScores)
        if(game){checkEndGame()}
    }
    
    if (e.which == 106) {       //j 
        board.movePlayer(2, "left")
        renderer.renderBoard(board.matrix, board.rowNum, board.colNum, board.playersScores)
        if(game){checkEndGame()}
    }

    if (e.which == 108) {       //l
        board.movePlayer(2, "right")
        renderer.renderBoard(board.matrix, board.rowNum, board.colNum, board.playersScores)
        if(game){checkEndGame()}
    }

    if (e.which == 119) {       //w
        board.movePlayer(1, "up")
        renderer.renderBoard(board.matrix, board.rowNum, board.colNum, board.playersScores)
        if(game){checkEndGame()}
    }

    if (e.which == 115) {       //s
        board.movePlayer(1, "down")
        renderer.renderBoard(board.matrix, board.rowNum, board.colNum, board.playersScores)
        if(game){checkEndGame()}
    }
    
    if (e.which == 97) {       //a
        board.movePlayer(1, "left")
        renderer.renderBoard(board.matrix, board.rowNum, board.colNum, board.playersScores)
        if(game){checkEndGame()}
    }

    if (e.which == 100) {       //d
        board.movePlayer(1, "right")
        renderer.renderBoard(board.matrix, board.rowNum, board.colNum, board.playersScores)
        if(game){checkEndGame()}
    }

})

