class Node {
  constructor() {
    this.key = null;
    this.value = null;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;

    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;

    this.cache = new Map();
    this.size = 0;
  }

  get(key) {
    if (this.cache.has(key)) {
      let node = this.cache.get(key);

      this.moveToHead(node);

      return node.value;
    }

    return -1;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      node.value = value;
      this.moveToHead(node);
    } else {
      const node = new Node();
      node.key = key;
      node.value = value;

      this.cache.set(key, node);
      this.addToFront(node);
      this.size++;

      if (this.size > this.capacity) {
        this.removeLRUEntry();
      }
    }
  }

  removeLRUEntry() {
    const tail = this.popTail();
    this.cache.delete(tail.key);
    this.size--;
  }

  popTail() {
    const tail = this.tail.prev;
    this.removeNode(tail);
    return tail;
  }

  removeNode(node) {
    const prev = node.prev;
    const next = node.next;

    prev.next = node.next;
    next.prev = prev;
  }

  addToFront(node) {
    node.prev = this.head;
    node.next = this.head.next;

    this.head.next.prev = node;
    this.head.next = node;
  }

  moveToHead(node) {
    this.removeNode(node);
    this.addToFront(node);
  }
}

const cache = new LRUCache(2);

cache.put(1, 1);
cache.put(2, 2);
cache.get(1); // returns 1
cache.put(3, 3); // evicts key 2
cache.get(2); // returns -1 (not found)
cache.put(4, 4); // evicts key 1
cache.get(1); // returns -1 (not found)
cache.get(3); // returns 3
cache.get(4); // returns 4
