export default class UnitOfWork {
    // TODO: Implement this without using any additional data structures

    pivot(value: number, head: Node): Node {
        let pivotNode = this.findPivotNode(value, head);
        if (!pivotNode) {
            console.log('no pivot node found');
            return;
        }

        let before: Stack<Node> = new Stack<Node>();
        let after: Stack<Node> = new Stack<Node>();

        let newHead = pivotNode;

        while (head) {
            if (head.value < pivotNode.value) {
                before.push(head);
            } else if (head.value > pivotNode.value) {
                after.push(head);
            }
            head = head.next;
        }

        while (before.peek() !== null) {
            let node = before.pop();
            node.next = newHead;
            newHead = node;
        }

        while (after.peek() !== null) {
            let node = after.pop();
            pivotNode.next = node;
            pivotNode = node;
            node.next = null;
        }

        return newHead;
    }

    findPivotNode(value: number, head: Node): Node {
        let previousNode: Node = null;
        if (head.next === null
            && head.value === value) {
            return head;
        }

        while (head) {
            if (head.value === value) {
                if (previousNode) {
                    previousNode.next = head.next;
                }
                return head;
            }
            previousNode = head;
            head = head.next;
        }

        return null;
    }
}

export class Node {
    public value: number;
    public next: Node;
}

export class Stack<T> {
    private _values: Array<T> = [];

    public pop(): T {
        if (!this._values.length) {
            return null;
        }

        return this._values.pop();
    }

    public push(item: T): void {
        this._values.push(item);
    }

    public length(): number {
        return this._values.length;
    }

    public peek(): T {
        if (!this._values.length) {
            return null;
        }

        return this._values[this._values.length-1];
    }
}
