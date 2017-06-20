export default class UnitOfWork {
    deleteNodeRevA(value: number, head: Node<number>): Node<number> {
        // Delete via storing ref to previous node.

        if (head.value === value) {
            return head.next;
        }

        let currentNode = head.next;
        let previousNode: Node<number> = head;

        while (currentNode) {
            if (currentNode.value === value) {
                previousNode.next = currentNode.next;
                break;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        return head;

    }

    deleteNodeRevB(value: number, head: Node<number>): Node<number> {
        // Delete via moving values from nodes and removing tail

        if (head.value === value) {
            return head.next;
        }

        let currentNode = head.next;
        while (currentNode) {
            if (currentNode.value === value) {
                let nextNode = currentNode.next;
                while (nextNode) {

                    currentNode.value = nextNode.value;

                    if (!nextNode.next) {
                        currentNode.next = null;
                        break;
                    }

                    currentNode = currentNode.next;
                    nextNode = nextNode.next;
                }
                break;
            }
            currentNode = currentNode.next;
        }

        return head;
    }

    deleteNodeRevC(value: number, head: Node<number>): Node<number> {
        // Recursive delete

        return null;

    }
}

export class Node<T> {
    public value: T;
    public next: Node<T>;
}
