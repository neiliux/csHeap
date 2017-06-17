let expect = require('chai').expect;
import UnitOfWork, { Node } from './index';

describe('main', () => {
    let unitOfWork = new UnitOfWork();

    it('Should find expected node', () => {
        let head: Node<number> = buildLinkedList(0, 20);
        console.log(listToString(head));

        let node = unitOfWork.find(5, head);
        expect(node.value).to.equal(5);
    });

    it('Should return null when node is not found', () => {
            let head: Node<number> = buildLinkedList(0, 20);
            let node = unitOfWork.find(21, head);
            expect(node).to.be.null;
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
