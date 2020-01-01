class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


def reverse_list(head):
    prev = None
    current = head
    while current is not None:
        next = current.next
        current.next = prev
        prev = current
        current = next
    return prev


def sum_list(n1, n2):
    n1 = reverse_list(n1)
    n2 = reverse_list(n2)
    result = Node(0)
    head = result
    carry = 0
    while n1 or n2 or carry:
        s = (
            (n1.data if n1 is not None else 0)
            + (n2.data if n2 is not None else 0)
            + carry
        )
        head.next = Node(s % 10)
        carry = s // 10
        head = head.next
        n1 = n1.next if n1 is not None else None
        n2 = n2.next if n2 is not None else None

    return result.next


def printLinkedList(node):
    while node is not None:
        print(node.data)
        node = node.next


# node1 = Node(5)
# node1.next = Node(3)
# node1.next.next = Node(7)
# node1.next.next.next = Node(1)
# node1.next.next.next.next = Node(4)


# node2 = Node(3)
# node2.next = Node(1)
# node2.next.next = Node(3)

node1 = Node(5)
node1.next = Node(5)
node1.next.next = Node(5)

node2 = Node(5)
node2.next = Node(5)
node2.next.next = Node(5)

printLinkedList(reverse_list(sum_list(node1, node2)))
