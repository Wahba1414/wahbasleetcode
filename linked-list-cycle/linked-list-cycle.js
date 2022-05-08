/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    //There are many solutions here: some of them depend on modifying the LL itself, and others don't (use hash table to compare references or use two pointers approach)
    
    //Two pointers 
    let slow = head;
    let fast = head;
    
    while(slow && fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        
        if(slow == fast){
            return true;
        }
    }
    
    return false;
    
};