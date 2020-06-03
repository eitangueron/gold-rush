class GoldRush extends Matrix{
    constructor(rowNum, colNum){
        super(rowNum, colNum)
        this.rowNum = rowNum
        this.colNum = colNum
        this.matrix[this.alter(0,0,1)]          //player 12 on board  they are num not str !
        this.matrix[this.alter(this.rowNum -1,this.colNum -1,2)]
        this.playersScores = {
            1:0,
            2:0
        }
    }

    moveIsPlayable(playerCoord, nextCoord){
        return ( playerCoord.x < this.colNum - 1
            && playerCoord.x >0
            &&  playerCoord.y < this.rowNum - 1
            && playerCoord.y > 0 
            && nextCoord !== 1 
            && nextCoord !== 2)
    }



    movePlayer(player, direction){

        const playerCoord = this.findCoordinate(player)
        
        if(direction === 'right' 
            && playerCoord.x < this.colNum - 1
            && this.matrix[playerCoord.y][playerCoord.x+1] !== 1 
            && this.matrix[playerCoord.y][playerCoord.x+1] !== 2
            && this.matrix[playerCoord.y][playerCoord.x+1] !== 'w') {
                if(this.matrix[playerCoord.y][playerCoord.x+1] === 'c'){
                    this.playersScores[player] += 10
                }       
                this.matrix[this.alter(playerCoord.y, playerCoord.x , '.')]
                this.matrix[this.alter(playerCoord.y, playerCoord.x+1 , player)]
        } 
        
        else if (direction === 'left' 
            && playerCoord.x > 0
            && this.matrix[playerCoord.y][playerCoord.x-1] !== 1 
            && this.matrix[playerCoord.y][playerCoord.x-1] !== 2
            && this.matrix[playerCoord.y][playerCoord.x-1] !== 'w'){
                if(this.matrix[playerCoord.y][playerCoord.x-1] === 'c'){
                    this.playersScores[player] += 10
                }
                this.matrix[this.alter(playerCoord.y, playerCoord.x , '.')]
                this.matrix[this.alter(playerCoord.y, playerCoord.x-1 , player)]
        } 
        
        else if (direction === 'up' 
            && playerCoord.y > 0 
            && this.matrix[playerCoord.y-1][playerCoord.x] !== 1 
            && this.matrix[playerCoord.y-1][playerCoord.x] !== 2
            && this.matrix[playerCoord.y-1][playerCoord.x] !== 'w'){
                if(this.matrix[playerCoord.y-1][playerCoord.x] === 'c'){
                    this.playersScores[player] += 10
                }
                this.matrix[this.alter(playerCoord.y, playerCoord.x , '.')]
                this.matrix[this.alter(playerCoord.y-1, playerCoord.x , player)]
        } 
        
        else if (direction === 'down' 
            && playerCoord.y < this.rowNum - 1
            && this.matrix[playerCoord.y+1][playerCoord.x] !== 1 
            && this.matrix[playerCoord.y+1][playerCoord.x] !== 2
            && this.matrix[playerCoord.y+1][playerCoord.x] !== 'w'){
                if(this.matrix[playerCoord.y+1][playerCoord.x] === 'c'){
                    this.playersScores[player] += 10
                }
                this.matrix[this.alter(playerCoord.y, playerCoord.x , '.')]
                this.matrix[this.alter(playerCoord.y+1, playerCoord.x , player)]
        } 
        
        else{
            console.log('Illeagle move!') 
            return
        }
    }

    generateRandomCoins(numOfCoinsToGenerate){
        let coinsAdded = 0
        while(coinsAdded<numOfCoinsToGenerate){
            const randomX = Math.floor(Math.random()*(this.colNum-1))
            const randomY = Math.floor(Math.random()*(this.rowNum-1))
            if(this.matrix[randomY][randomX] === '.'){
                this.matrix[this.alter(randomX,randomY,'c')]
                coinsAdded++
            }
        }
    }

    generateRandomWalls(numOfWallsToGenerate){
        let wallsAdded = 0
        while(wallsAdded<numOfWallsToGenerate){
            const randomX = Math.floor(Math.random()*(this.colNum-1))
            const randomY = Math.floor(Math.random()*(this.rowNum-1))
            if(this.matrix[randomY][randomX] === '.'){
                this.matrix[this.alter(randomX,randomY,'w')]
                wallsAdded++
            }
        }
    }

}
           

// const board = new GoldRush(5,5)
// board.generateRandomCoins(10)






// board.print()


// board.movePlayer(2,'left')
// board.movePlayer(2,'right')
// board.movePlayer(2,'up')
// board.movePlayer(2,'down')

// board.movePlayer(1,'right')
// board.movePlayer(1,'left')
// board.movePlayer(1,'up')
// board.movePlayer(1,'down')



// board.print()

// console.log(board.playersScores)
// console.log(board.player2Score)

// board.print()
