let expect = require('chai').expect;
import { UnitOfWork } from './index';

describe('main', () => {
    let unitOfWork: UnitOfWork = new UnitOfWork();

    it('should encode string as expected', () => {
        let value: string = 'hello world';
        expect(unitOfWork.encode(value, 13)).to.equal("hello%20world");
    });

    it('should not modify string when no whitespaces are present', () => {
      let value: string = 'hello_world';
      expect(unitOfWork.encode(value, 11)).to.equal('hello_world');
    });

    it('should encode head and tail whitespaces', () => {
      let value: string = ' hello world ';
      expect(unitOfWork.encode(value, 19)).to.equal('%20hello%20world%20');
    });
});
