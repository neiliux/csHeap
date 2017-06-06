export default class UnitOfWork {
    // Add's two numbers which are represented
    // as linked lists. Each number starts with the
    // 1's position at the head of the list

    add(a: Node, b: Node): Node {
        let aNumber = this.convertToNumber(a);
        let bNumber = this.convertToNumber(b);
        let sum = aNumber + bNumber;

        return this.convertToLinkedList(sum);
    }

    private convertToNumber(head: Node): number {
        let place = 1;
        let number = 0;
        let node = head;
        while (node != null) {
            number += node.value * place;
            place *= 10;
            node = node.next;
        }
        return number;
    }

    private convertToLinkedList(value: number): Node {
        let place = 1;
        while (value / place > 1) {
            place *= 10;
        }
        place /= 10;

        let d = value / place;
        let r = value % place;
        let head: Node = new Node(d);
        while (place > 1) {
            place /= 10;
            d = r / place;
            r = r % place;
            let node = new Node(d);
            node.next = head;
            head = node;
        }

        return head;
    }
}

export class Node {
    public value: number;
    public next: Node;

    constructor(v: number) {
        this.value = v;
    }
}
