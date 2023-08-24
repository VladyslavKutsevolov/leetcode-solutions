// You are given the heads of two sorted linked lists list1 and list2.
//
//     Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
//
//     Return the head of the merged linked list.
//
//
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:
//
// Input: list1 = [], list2 = []
// Output: []
// Example 3:
//
// Input: list1 = [], list2 = [0]
// Output: [0]
//
//
// Constraints:
//
//     The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

function ListNode(val) {
    this.val = val
    this.head = null
}

// solution1: iterative
// time complexity: O(n)
// space complexity: O(1)

const mergeTwoLists = (l1, l2) => {
const dummyHead = new ListNode(-1);
    let current = dummyHead;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            current.next = l1;

            l1 = l1.next;
        } else {
            current.next = l2;

            l2 = l2.next;
        }

        current = current.next;
    }

    current.next = l1 || l2;

    return dummyHead.next;
}

// solution2: recursive
// time complexity: O(n)
// space complexity: O(n)

const mergeTwoLists2 = (l1, l2) => {
    const merge = (l1, l2) => {
        if (!l1 || !l2) return l1 || l2;

        if (l1.val <= l2.val) {
            l1.next = merge(l1.next, l2);

            return l1;
        } else {
            l2.next = merge(l1, l2.next);

            return l2;
        }
    }

    return merge(l1, l2);
}

console.log(mergeTwoLists([1,2,4], [1,3,4]))
console.log(mergeTwoLists([], []))
console.log(mergeTwoLists([], [0]))

console.log(mergeTwoLists2([1,2,4], [1,3,4, 5]))
console.log(mergeTwoLists2([], []))
console.log(mergeTwoLists2([], [0]))