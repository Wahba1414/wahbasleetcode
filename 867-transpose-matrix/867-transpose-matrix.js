/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    //if(matrix.length == 0) return [];
    
    let transposedMatrix = [];
    
    let columnsCount = matrix[0].length;
    
    //loop on rows
    for(let j = 0; j < columnsCount; j++){
        transposedMatrix[j] = [];
        for(let i = 0; i < matrix.length; i++){
            transposedMatrix[j][i] = matrix[i][j];
        }
    }
    
    return transposedMatrix;
    
};