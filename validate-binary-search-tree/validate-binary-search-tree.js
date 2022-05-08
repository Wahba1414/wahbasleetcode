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

// Inorder traverse
var isValidBST = function(root) {
    let inOrderList = [];
    let isValid = true;
    
    function traverse(node){
        if(isValid && node){
            traverse(node.left);
            
            if(inOrderList[inOrderList.length-1] >= node.val){
                isValid = false;
            }else{
                inOrderList.push(node.val);
            }
            
            traverse(node.right);
        }
    }
    
    traverse(root);
    
    // console.log('inOrderList: ', inOrderList);
    
    return isValid;
};


// Not correct
// var isValidBST = function(root) {
//     let inOrderList = [];
//     let isValid = true;
    
//     function traverse(node){
//         if(node){
//             let left = traverse(node.left);
//             let right = traverse(node.right);
            
//             if( (left && left.val >= node.val) || (right && right.val <= node.val) ){
//                 isValid = false;
//             }
            
//             return node;
//         }
//     }
    
//     traverse(root);
    
//     return isValid;
// };