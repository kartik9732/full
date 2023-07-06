class Generic_class{
    class Stack<T> {
        private elements: T[] = [];
      
        push(element: T): void {
          this.elements.unshift(element);
        }
      
        pop(): T | undefined {
          return this.elements.shift();
        }
      
        count(): number {
          return this.elements.length;
        }
      
        peek(): T | -1 {
          return this.elements.length > 0 ? this.elements[0] : -1;
        }
      
        isEmpty(): boolean {
          return this.elements.length === 0;
        }
      }
      
}