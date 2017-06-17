export default class UnitOfWork {
    public find (value: number, head: Node<number>): Node<number> {
        if (!head) {
            return null;
        }

        if (head.value === value) {
            return head;
        }

        return this.find(value, head.next);
    }
}

export class Node<T> {
    public value: T;
    public next: Node<T>;
}
