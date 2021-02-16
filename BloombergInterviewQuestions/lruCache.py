class Node:
    def __init__(self, key, val):
        self.key = key
        self.val = val
        self.prev = None
        self.next = None
        
        
# we use a Doubly Linked List and a Hashmap
# DLL allows us to remove and put in front in O(1)
# hashmap allows us do a get in O(1)

class LRUCache:

    def __init__(self, capacity: int):
        self.size = 0
        self.capacity = capacity
        self.head = Node(0, 0)
        self.tail = Node(0, 0)
        self.head.next = self.tail
        self.tail.prev = self.head
        self.cache = {}
        

    def get(self, key: int) -> int:
        node = self.cache.get(key)
        if node:
            # move node to head. 1 Detach Node, 2. Move to front
            self.deleteNode(node)
            self.addToFront(node)
            return node.val
        return -1
        

    def put(self, key: int, value: int) -> None:
        if key not in self.cache:
            node = Node(key, value)
            self.cache[key] = node
            self.addToFront(node)
            self.size += 1
            
            if self.size > self.capacity:
                
                # remove tail
                lastNode = self.tail.prev
                self.deleteNode(lastNode)
                del self.cache[lastNode.key]
        else:
            node = self.cache.get(key)
            node.val = value
            self.deleteNode(node)
            self.addToFront(node)
            
                
        
        
    def deleteNode(self, node):
        prev = node.prev
        
        nextNode = node.next
        prev.next = nextNode
        nextNode.prev = prev
        
    def addToFront(self, node):
        nextNode = self.head.next
        self.head.next = node
        node.prev = self.head
        node.next = nextNode
        nextNode.prev = node
        
        


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)