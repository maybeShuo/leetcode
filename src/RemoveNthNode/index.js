/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
      this.val = val;
      this.next = null;
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    var start = new ListNode(0);
    start.next = head;
    var prev = start;
    var node = start;

    for (var i = 0; i <= n; i++) {
        node = node.next;
    }
    
    while (node) {
        console.log(node, prev, first);
        prev = prev.next;
        node = node.next;
    }

    prev.next = prev.next.next;

    return start.next;
};

var node1 = new ListNode(1);
var node2 = new ListNode(2);
var node3 = new ListNode(3);
var node4 = new ListNode(4);
var node5 = new ListNode(5);

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;

var res = removeNthFromEnd(node1, 1);

console.dir(res);
