let expect = require('chai').expect;
import { UnitOfWork } from './index';

describe('main', () => {
    let unitOfWork = new UnitOfWork();

    it('should return compressed string', () => {
        let result: string = unitOfWork.compress('AABBCCDDDD');
        expect(result).to.equal("A2B2C2D4");
    });

    it('should return original string when compressed string is same length', () => {
        let result: string = unitOfWork.compress('AABBCC');
        expect(result).to.equal('AABBCC');
    });

    it('should return original string when no compression can be applied', () => {
        let result: string = unitOfWork.compress('ABCDEFG');
        expect(result).to.equal('ABCDEFG');
    });
});
