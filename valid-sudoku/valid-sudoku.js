/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for(let row = 0; row < board.length; row++){
        let tracker = {};
    
        for(let column = 0; column < board[row].length; column++ ){
            if (tracker[board[row][column]]) return false;
            
            if(board[row][column] != '.'){
                tracker[board[row][column]] = true;
            }
        }   
    }
    
    for(let column = 0; column < board[0].length; column++){
        let tracker = {};
        
        for(let row = 0; row < board.length; row++){
            if (tracker[board[row][column]]) return false;
            
            if(board[row][column] != '.'){
                tracker[board[row][column]] = true;
            }
        }   
    }
    
    
    for(let row = 0; row < board.length-2; row = row+3){    
        for(let column = 0; column < board[row].length-2; column = column+3 ){
            
            let tracker = {};
            for(let i = row; i < row+3; i++){
                for(let j = column; j < column+3; j++ ){
                    if (tracker[board[i][j]]) return false;
            
                    if(board[i][j] != '.'){
                        tracker[board[i][j]] = true;
                    }
                }  
          }
            
        }   
    }
    
    return true;
    
};