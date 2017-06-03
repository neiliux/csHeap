let expect = require('chai').expect;
import UnitOfWork from './index';

describe('main', () => {
    let unitOfWork = new UnitOfWork();

    it('Should sort ascending', () => {
        let result = unitOfWork.sortAscending([5, 3, 4, 2, 1]);
        expect(result).to.eql([1, 2, 3, 4, 5]);
    });

    it('Should return empty array when passed falsey value', () => {
        let result = unitOfWork.sortAscending(null);
        expect(result).to.eql([]);
    });

    it('Should return array with single element when source has single element', () => {
        let result = unitOfWork.sortAscending([3]);
        expect(result).to.eql([3]);
    })
});
