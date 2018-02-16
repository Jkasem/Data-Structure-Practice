/*Linked-List
╔═══════════╦═════════╦════════════╗
║ Algorithm ║ Average ║ Worst Case ║
╠═══════════╬═════════╬════════════╣
║ Space     ║ O(n)    ║ O(n)       ║
║ Search    ║ O(n)    ║ O(n)       ║
║ Insert    ║ O(1)    ║ O(1)       ║
║ Delete    ║ O(1)    ║ O(1)       ║
╚═══════════╩═════════╩════════════╝*/

function linkedList (){
  let length = 0;
  let head = null;

  let Node = function(element) {
    this.element = element;
    this.next = null;
  }

  this.size = () => return length;

  this.head = () => return head;

  this.add = function(element) {
    let node = new Node(element);
    if(head === null){
      head = node;
    } else {
      let currentNode = head;

      while(currentNode.next){
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    length++;
  };
}
