class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  // adds an element at the end of list
  add(data) {
    const node = new Node(data)

    if (!this.head) {
      this.head = node
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }

    this.size++
  }

  // inserts an element at the given index
  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      return null
    }

    const node = new Node(data)
    let current = this.head

    if (index === 0) {
      node.next = current
      this.head = node
    } else {
      let previous
      let i = 0
      while (i < index) {
        previous = current
        current = current.next
        i++
      }
      node.next = current
      previous.next = node
    }

    this.size++
  }

  // removes an element from the given index
  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null
    }

    let current = this.head

    if (index === 0) {
      this.head = current.next
    } else {
      let previous
      let i = 0
      while (i < index) {
        previous = current
        current = current.next
        i++
      }
      previous.next = current.next
    }

    this.size--

    return current.data
  }

  // removes a given element from the list
  remove(data) {
    let current = this.head
    let previous = null

    while (current != null) {
      if (current.data === data) {
        if (previous === null) {
          this.head = current.next
        } else {
          previous.next = current.next
        }
        this.size--
        return current.data
      }
      previous = current
      current = current.next
    }

    return null
  }

  // returns the element at the given index
  get(index) {
    if (index < 0 || index >= this.size) {
      return null
    }

    let current = this.head
    let i = 0

    while (i < index) {
      current = current.next
      i++
    }

    return current.data
  }

  // returns the index of a given element
  indexOf(data) {
    let current = this.head
    let index = 0

    while (current != null) {
      if (current.data === data) {
        return index
      }
      current = current.next
      index++
    }

    return -1
  }

  // checks if the list is empty
  isEmpty() {
    return this.size === 0
  }

  // returns the size of the list
  getSize() {
    return this.size
  }

  // prints the list elements
  print() {
    let current = this.head
    let str = ''

    while (current != null) {
      str += current.data + ' '
      current = current.next
    }

    console.log(str)
  }
}

// const ll = new LinkedList();

// ll.add(5);
// ll.add(10);
// ll.add(15);
// ll.add(20);

// ll.print();
