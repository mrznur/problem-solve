var swapPairs = function(head) {
    let dummy = new ListNode(0);
    dummy.next = head;
    
    let prev = dummy;
    
    while (prev.next !== null && prev.next.next !== null) {
        let first = prev.next;
        let second = prev.next.next;

        first.next = second.next;
        second.next = first;
        prev.next = second;

        prev = first;
    }
    
    return dummy.next;
};

a = [1,2,3,4];
console.log(swapPairs(a));