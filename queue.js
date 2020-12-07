function Node(data, next = null) {
  this.data = data
  this.next = next
}

function Queue() {
  this.head = null
}

Queue.prototype.enqueue = function (data) {
  if (!this.head) {
    this.head = new Node(data)
    return
  }
  let current = this.head
  while (current.next) {
    current = current.next
  }
  current.next = new Node(data)
}

Queue.prototype.dequeue = function () {
  this.head = this.head?.next
}

Queue.prototype.getQueue = function () {
  let current = this.head
  while (current) {
    console.log(current.data)
    current = current.next
  }
}

const q = new Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
q.enqueue(4)
q.enqueue(5)
q.enqueue(6)
q.dequeue()
q.dequeue()
q.getQueue()