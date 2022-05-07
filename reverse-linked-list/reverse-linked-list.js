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

//Recursive v2
var reverseList = function(head) {
    if (!head) return null;
    if (!head.next) return head;
    
    let temp = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    
    return temp;
    
};

//     Recursively V1
// var reverseList = function(head) {    
//     let newHead = head;
//     function traverse(node){
//         if(node && node.next){
//             let next = traverse(node.next);
//             if(head == node) node.next = null;
//             next.next = node;
//         }else{
//             newHead = node;
//         }
        
//         return node;
//     }
    
    
//     traverse(head);
//     return newHead;
    
// };