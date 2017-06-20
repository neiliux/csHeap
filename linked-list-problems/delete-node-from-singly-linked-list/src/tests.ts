let expect = require('chai').expect;
import UnitOfWork, { Node } from './index';

describe('main', () => {
    let unitOfWork: UnitOfWork = new UnitOfWork();

    it('Should delete node as expected with rev a', () => {
        let head = buildLinkedList(1, 5);
        console.log(listToString(head));
        unitOfWork.deleteNodeRevA(4, head);

        let result = listToString(head);
        expect(result).to.equal('1,2,3,5');
    });

    it('Should delete node as expected with rev b', () => {
        let head = buildLinkedList(1, 5);
        console.log(listToString(head));
        unitOfWork.deleteNodeRevB(4, head);

        let result = listToString(head);
        expect(result).to.equal('1,2,3,5');
    });

    function buildLinkedList(startValue: number, numberNodes: number): Node<number> {
        let head: Node<number> = new Node<number>();
        head.value = startValue;

        let nextNode: Node<number> = head;
        for (let i=1; i<numberNodes; i++) {
            nextNode.next = new Node<number>();
            nextNode.next.value = ++startValue;
            nextNode = nextNode.next;
        }

        return head;
    }

    function listToString(head: Node<number>): string {
        let values: Array<number> = [];
        while (head) {
            values.push(head.value);
            head = head.next;
        }
        return values.join(',');
    }
});
