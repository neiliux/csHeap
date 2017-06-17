let expect = require('chai').expect;
import UnitOfWork, { Node } from './index';

describe('main', () => {
    let unitOfWork = new UnitOfWork();

    it('Should pivot linked list', () => {
        let list = createLinkedList();
        console.log(listToString(list));

        let resultingList = unitOfWork.pivot(4, list);
        console.log(listToString(resultingList));
    });

    function createLinkedList(): Node {
        let head: Node = new Node();
        head.value = 0;

        let tail = head;
        for (let i=1; i<10; i++) {
            let node: Node = new Node();
            node.value = i;
            tail.next = node;
            tail = node;
        }

        return head;
    }

    function listToString(head: Node): string {
        let values: Array<number> = [];

        while (head) {
            values.push(head.value);
            head = head.next;
        }

        return values.join(',');
    }
});
