/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    function isValid (board, row, column, number){
        for(let i = 0; i < 9; i++){
            if(board[row][i] === number){
                return false;
            }
        }
        for(let i = 0; i < 9; i++){
            if(board[i][column] === number){
                return false;
            }
        }

        const startRow = Math.floor(row/3)*3;
        const startCol = Math.floor(column/3)*3;

        for(let i = startRow; i < startRow + 3; i++){
            for(let j = startCol; j < startCol + 3; j++){
                if(board[i][j] === number){
                    return false;
                }
            }
        }    

        return true;  
    }

    function solve(board){
        for(let row = 0; row < 9; row++){
            for(let col = 0; col < 9; col++){
                if(board[row][col] === "."){
                    for(let number = 1; number <= 9; number++){
                        const charNum = number.toString();
                        
                        if(isValid(board, row, col, charNum)){
                            board[row][col] = charNum;

                            if(solve(board)){
                                return true;
                            }
                            board[row][col] = ".";
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    solve(board); 
};