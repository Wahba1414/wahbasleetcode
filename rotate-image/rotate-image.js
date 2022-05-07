/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let matLen = matrix.length;
    
    for(let i = 0; i < matLen; i++){
        for (let j = i; j < matLen; j++){
            [matrix[i][j] , matrix[j][i]] = [matrix[j][i] , matrix[i][j]];
        }
    }
    
    
    for(let i = 0; i < matLen; i++){
        for(let j = 0; j < matLen/2; j++){
            [matrix[i][j] , matrix[i][matLen-1-j]] = [matrix[i][matLen-1-j] , matrix[i][j]];
        }
    }
    
    
    
};