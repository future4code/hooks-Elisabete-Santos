// 📖 Exercício 1
    
// Faça a implementação de uma Lista Ligada em *Typescript*. Implemente o método que adiciona um elemento ao final da lista e um método que imprima todos elementos presentes nela.
    
// **Realize testes para verificar se a sua implementação está correta, antes de ver o gabarito**

class LinkedListNode {
   constructor (
   public value: any,
   public next: LinkedListNode | null = null
   ) {}
}

class LinkedList {
   constructor(public head?: LinkedListNode) {}
 
   public add(value: number) {
     if (!this.head) {
       this.head = new LinkedListNode(value);
     } else {
       let node = this.head;
       while (node.next) {
         node = node.next;
       }
       node.next = new LinkedListNode(value);
     }
   }
 }
 
 const myList = new LinkedList();
 
   myList.add(1);
   myList.add(2);
   myList.add(3);
   myList.add(4);
 
// console.log(myList);


// 📖 Exercício 2
    
// Faça a implementação de uma Pilha em *Typescript* e utilizando uma Lista Ligada como estrutura de base (em aula, usamos um Array). Implemente os métodos:
    
// `isEmpty`: que indica se ela está vazia
    
// `push`: que adiciona um elemento à pilha
    
// `pop`: que retira um elemento da pilha
    
// `print`: que imprima todos os elementos da pilha
    
// **Realize testes para verificar se a sua implementação está correta, antes de ver o gabarito**

class stack {
   constructor(
     public items: any[] = [],
     public length: number = 0
   ) { }
 
   public push(item: any){
     this.items.push(item);
     this.length++;
   }
 
   public pop(){
     if (this.length === 0) {
      return undefined;
     }
     this.length--;
     return this.items.pop();
   }
 
   public peek(){
     if (this.length === 0) {
      return console.log(undefined);
     }
     return console.log(this.items[this.length - 1]);
   }
 
   public isEmpty(){
     return this.length === 0;
   }
 
   public print(){
     console.log(this.items);
   }
}
 
const myStack = new stack();
 
// myStack.push(1);
// myStack.push(2);
// myStack.push(3);
// myStack.print()
// myStack.pop();

// 📖 Exercício 3
    
// Faça a implementação de uma Fila em *Typescript* e utilizando um Array como estrutura de base (em aula, usamos uma Lista Ligada). Implemente os métodos:
    
// `isEmpty`: que indica se ela está vazia
    
// `enqueue`: que adiciona um elemento à fila
    
// `dequeue`: que retira um elemento da fila
    
// `print`: que imprima todos os elementos da fila
    
// **Realize testes para verificar se a sua implementação está correta, antes de ver o gabarito**

class Queue {
   constructor() {}
   public list: any[] = [];
   public length: number = 0;
 
   public isEmpty = (): boolean => {
     if (!this.length) {
       return true;
     } else {
       return false;
     }
   };
 
   public enqueue = (item: any) => {
     this.list.push(item);
     this.length = this.list.length;
 
     console.log(this.list);
     console.log(this.length);
   };
   public dequeue = () => {
     // tirar o primeiro item
     // colocar o index+1 no lugar de index
     // diminuir o tamanho do array da lista
 
     for (let i = 0; i < this.length; i++) {
       this.list[i] = this.list[i + 1];
     }
     this.list.length = this.list.length - 1;
     this.length = this.list.length;
 
     console.log(this.list);
     console.log(this.length);
   };
 
   public print = () => {
     console.log(this.list);
   }
 }
 
const myQueue = new Queue();
myQueue.isEmpty();
myQueue.enqueue("oi");
myQueue.enqueue("oi de novo");
myQueue.dequeue();
myQueue.print();

// 🏅 Desafios

// 📖 Exercício 4
    
// Existe um outro tipo de estruturas de dados que não foi visto na aula: a Lista Duplamente Ligada (*Doubly Linked List*). Ela possui as características da Lista Ligada e uma a mais: seus elementos possuem um outro apontador (`previous`) para o elemento anterior a eles.
    
// O elemento inicial da lista não possui nenhum valor nesse apontador, já que, antes dele, não existe nenhum elemento. 
    
// Implemente uma Lista Duplamente Ligada, com os métodos:
    
// `appendToTail`: que deve adicionar um elemento à lista 
    
// `print`: que deve imprimir todos os elementos da lista
    
// `searchElement`: que deve retornar o primeiro elemento cujo valor seja o número procurado
    
// `deleteElement`: que procurar um elemento, deletá-lo da lista e devolver o nó deletado

export class DoublyLinkedList {
   constructor(public start?: DoublyLinkedListNode) {}
 
   public appendToTail(value: number) {
     const newNode = new DoublyLinkedListNode(value);
 
     if (!this.start) {
       this.start = newNode;
     } else {
       let node = this.start;
       while (node.getNext() !== undefined) {
         node = node.getNext()!;
       }
       node.setNext(newNode);
       newNode.setPrevious(node);
     }
   }
 
   public print(): void {
     let i = 1;
     let node = this.start;
     while (node !== undefined) {
       console.log(`Elemento ${i}`);
       console.log(" ", node);
       node = node.getNext();
       i++;
     }
     console.log();
   }
 
   public searchElement(value: number): DoublyLinkedListNode | undefined {
     let node = this.start;
     while (node !== undefined && node.value !== value) {
       node = node.getNext();
     }
     return node;
   }
 
   public deleteElement(value: number): DoublyLinkedListNode | undefined {
     let node = this.searchElement(value);
     if (node) {
       const previous = node.getPrevious();
       const next = node.getNext();
       if (next) {
         next.setPrevious(previous);
       }
       if (previous) {
         previous.setNext(next);
       } else {
         this.start = next;
       }
     }
     return node;
   }
 }
 
 export class DoublyLinkedListNode {
   constructor(public value: number) {}
 
   private previous?: DoublyLinkedListNode;
   private next?: DoublyLinkedListNode;
 
   public setPrevious(node?: DoublyLinkedListNode) {
     this.previous = node;
   }
 
   public getPrevious(): DoublyLinkedListNode | undefined {
     return this.previous;
   }
 
   public setNext(node?: DoublyLinkedListNode) {
     this.next = node;
   }
 
   public getNext(): DoublyLinkedListNode | undefined {
     return this.next;
   }
 }