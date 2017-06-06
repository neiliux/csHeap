let expect = require('chai').expect;
import UnitOfWork, { Node } from './index';

describe('main', () => {
    let unitOfWork = new UnitOfWork();

    it('Should return expected sum', () => {
        const n: Node = unitOfWork.add(create100(), create200());
        assertList(n, [0, 0, 3]);

    });

    function assertList(node: Node, set: Array<number>) {
        for (let i=0; i<set.length; i++) {
            expect(node.value).to.equal(set[i]);
            node = node.next;
        }
    }

    function create100(): Node {
        let head: Node = new Node(0);
        head.next = new Node(0);
        head.next.next = new Node(1);
        return head;
    }

    function create200(): Node {
        let head: Node = new Node(0);
        head.next = new Node(0);
        head.next.next = new Node(2);
        return head;
    }
});
