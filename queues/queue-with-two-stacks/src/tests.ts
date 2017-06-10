let expect = require('chai').expect;
import UnitOfWork from './index';

describe('main', () => {
    let unitOfWork = new UnitOfWork();

    it('Should behave like a queue', () => {
        [1,2,3].forEach(v => unitOfWork.enqueue(v));

        for (let i=1; i<4; i++) {
            expect(unitOfWork.dequeue()).to.equal(i);
        }
    });
});
