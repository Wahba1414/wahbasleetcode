/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let newLevel = [];
    let prevLevel = [];
    
    if(root) newLevel.push(root);

    while(newLevel.length){
        
        // console.log('newLevel: ', newLevel);
        
        if(!isListSymmetric(newLevel)) {
          return false;   
        }
        
        prevLevel = newLevel;
        
        newLevel = [];
        
        for(let item of prevLevel){
            if(item){
                newLevel.push(item.left);
                newLevel.push(item.right);
            } 
        }
    }
    
    
    return true;
        
};


//helper function
function isListSymmetric (list){
    let len = list.length;
    
    for(let i = 0; i < len/2; i++){
        if( (list[i] && list[i].val) != (list[len-i-1] && list[len-1-i].val)) {
            return false;
        }
    }
    
    return true;
    
}


