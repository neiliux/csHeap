let expect = require('chai').expect;
import UnitOfWork from './index';

describe('main', () => {
    let unitOfWork: UnitOfWork ;

    beforeEach(() => {
        unitOfWork = new UnitOfWork();
    });

    it('Should create N stacks when max for each is reached', () => {
        pushItems(20);
        expect(unitOfWork.stacksLength()).to.equal(4);
    });

    it('Should contain X stacks after popping several items', () => {
        pushItems(20);
        popItems(5);
        expect(unitOfWork.stacksLength()).to.equal(3);
    });

    function pushItems(itemCount: number): void {
        for (let i=0; i<itemCount; i++) {
            unitOfWork.push(i);
        }
    }

    function popItems(count: number): void {
        for (let i=0; i<count; i++) {
            unitOfWork.pop();
        }
    }
});
