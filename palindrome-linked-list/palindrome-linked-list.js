/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let len = 0;
    let tracker = {};
    let isPalindrome = true;
    
    function traverseR(node){
        len++;
        let index = len;
        tracker[index] = node.val;
        
        let res = true;
        
        
        if(node.next){
            traverseR(node.next);
        }
        
        if(tracker[len-index+1] != node.val){
            isPalindrome = false;
        }
        
    }
    
    traverseR(head);
    return isPalindrome;
    
};
