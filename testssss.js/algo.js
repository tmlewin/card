// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

 

// Example 1:


// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]
// Example 2:

// Input: head = [5], left = 1, right = 1
// Output: [5]
 

var reverseBetween = function(head, left, right) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    let cur = head;
    let count = 0;
    while(cur){
        count++;
        if(count == left){
            let prev1 = cur;
            let cur1 = cur.next;
            while(cur1 && count < right){
                let temp = cur1.next;
                cur1.next = prev1;
                prev1 = cur1;
                cur1 = temp;
                count++;
            }
            prev.next = prev1;
            cur.next = cur1;
            break;
        }
        prev = cur;
        cur = cur.next;
    }
    return dummy.next;
}


// Example 1:


// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]









 


 