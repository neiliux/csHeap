let expect = require('chai').expect;
import { UnitOfWork } from './index';

describe('main', () => {
    let unitOfWork: UnitOfWork = new UnitOfWork();

    it('should return true when string is permutation of other string', () => {
        let result: boolean = unitOfWork.isPermutation('abc', 'bca');
        expect(result).to.equal(true);
    });

    it('should return false when string is not a permutation of other string', () => {
        let result: boolean = unitOfWork.isPermutation('abc', 'qwe');
        expect(result).to.equal(false);
    });

    it('should return true when string is permutation of other string', () => {
        let result: boolean = unitOfWork.isPermutation('aaabbbcccddeee', 'dabceabceabced');
        expect(result).to.equal(true);
    });

    it('should return false when string contains permutation with additional characters of other string', () => {
        let result: boolean = unitOfWork.isPermutation('abca', 'abcw');
        expect(result).to.equal(false);
    });
});
