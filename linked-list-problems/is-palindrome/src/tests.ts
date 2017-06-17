let expect = require('chai').expect;
import UnitOfWork, { Node } from './index';

describe('main', () => {
    let unitOfWork = new UnitOfWork();

    it('should return true when palindrom', () => {
        let head = buildPalindrome('madam');
        console.log(listToString(head));

        let result = unitOfWork.isPalindrome(head);
        expect(result).to.be.true;
    });

    it('should return false when not palindrom', () => {
        let head = buildPalindrome('fderftghg');
        console.log(listToString(head));

        let result = unitOfWork.isPalindrome(head);
        expect(result).to.be.false;
    });

    function buildPalindrome(value: string): Node {
        let head: Node  = new Node();
        head.value = value[0];

        let tail: Node = head;
        for (let i=1; i<value.length; i++) {
            tail.next = new Node();
            tail.next.value = value[i];
            tail = tail.next;

        }

        return head;
    }

    function listToString(head: Node): string {
        let values: Array<string> = [];

        while (head) {
            values.push(head.value);
            head = head.next;
        }

        return values.join(',');
    }
});
