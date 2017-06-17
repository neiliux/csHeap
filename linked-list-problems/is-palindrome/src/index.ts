export default class UnitOfWork {
    isPalindrome(head: Node): boolean {
        let index: number = 1;
        let node: Node = head;

        while(node) {
            let tailNode = this.getNodeFromEnd(head, index);
            if (tailNode.value !== node.value) {
                return false;
            }
            node = node.next;
            index++;
        }

        return true;
    }

    private getNodeFromEnd(head: Node, k: number): Node {
        let aheadNode: Node = head;
        let index: number = 1;
        while (index !== k) {
            aheadNode = aheadNode.next;
            index++;
        }

        let node = head;
        let previousNode = node;
        while (aheadNode) {
            previousNode = node;
            node = node.next;
            aheadNode = aheadNode.next;
        }

        return previousNode;
    }
}

export class Node {
    public value: string;
    public next: Node;
}

// Start from head, index = 0
// Iterate over list until Kth element from end
// Compare
// Start over in loop, increment index
