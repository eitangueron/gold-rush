class Matrix {
    constructor(rowNum, colNum){
        this.matrix = this.generateMatix(rowNum, colNum)
    }

    generateMatix(rowNum, colNum){
        const matrix = []
        let emptyHolder = '.'
        for(let r=0; r<rowNum; r++){
            let row = []
            for(let c=0; c<colNum; c++){
                row.push(emptyHolder)
            }
            matrix.push(row)
        }
        return matrix
    }
    
    get(rowNum, colNum){
        return this.matrix[rowNum][colNum] 
    }

    print(){
        let end = ''
        for(let row of this.matrix){
            for(let num of row){
                end += (num + '\t')
            }
            end+= '\n'
        }
        console.log(end)
    }

    printColumn(colNum) {
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][colNum])
        }
    }

    printRow(rowNum){
        let row = this.matrix[rowNum]
        for(let num of row){
            console.log(num)
        }
    }

    alter(rowNum, colNum, newVal){
        this.matrix[rowNum][colNum] = newVal
    }

    findCoordinate(num){
        for(let r=0; r<this.matrix.length; r++){
            for(let c=0; c<this.matrix[r].length; c++){
                if (num === this.matrix[r][c]){
                    return {x:c, y:r} || null
                }
            }
        }
    }
}

// const board = new Matrix(5,5)
// board.print()

