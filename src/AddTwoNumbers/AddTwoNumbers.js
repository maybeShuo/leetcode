
//Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let rootNode = new ListNode(-1);
    let node = rootNode;
    let move = 0;

    let pa = l1, pb = l2;
    while (pa !== null || pb !== null || move !== 0)
    {
        let val = (pa === null ? 0 : pa.val) + (pb === null ? 0 : pb.val) + move;
        move = 0;
        if (val >= 10)
        {
            move = 1;
            val = val - 10;
        }
        node.next = new ListNode(val);
        node = node.next;
        pa = (pa === null ? null : pa.next);
        pb = (pb === null ? null : pb.next);
    }
    return rootNode.next;
};
