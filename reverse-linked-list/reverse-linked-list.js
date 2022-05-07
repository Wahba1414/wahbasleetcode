/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
//    Iteratively
    
//     Recursively 
    let newHead = head;
    function traverse(node){
        if(node && node.next){
            let next = traverse(node.next);
            if(head == node) node.next = null;
            next.next = node;
        }else{
            newHead = node;
        }
        
        return node;
    }
    
    
    traverse(head);
    return newHead;
    
};