class Renderer {
     renderBoard(matrix, rowNum, colNum, playersScores){
        $('#board').empty()
         $('#board').css('grid-template-columns',`repeat(${colNum},1fr)`)           //change 5 to adjustable to input
         $('#board').css('grid-template-rows',`repeat(${rowNum},1fr)`)
        for(let row of matrix){
            for(let box of row){
                if(box === 'c'){
                    $('#board').append('<div class=box><img class="coin" src="https://img.icons8.com/doodle/48/000000/gold-bars--v1.png"/></div></div>')
                } else if( box === 1){
                    $('#board').append('<div class=box><img class="player1" src="https://img.icons8.com/cotton/64/000000/pacman.png"/></div>')
                } else if(box === 2){
                    $('#board').append('<div class=box><img class="player2" src="https://img.icons8.com/color/48/000000/eating-person.png"/></div>')
                } else if (box === 'w'){
                    $('#board').append('<div class="box walled"><img class="wall" src="https://img.icons8.com/ios-filled/50/000000/brick-wall.png"/></div>')
                } else {
                    $('#board').append('<div class=box><div class="empty"></div></div>')
                }
            }
        }
        $('#player1').text('Player 1:' + playersScores['1'])      
        $('#player2').text('Player 2:' + playersScores['2'])
     }
}
