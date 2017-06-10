let expect = require('chai').expect;
import UnitOfWork from './index';

describe('main', () => {
    let unitOfWork = new UnitOfWork();

    it('solve', () => {
            unitOfWork.solve([3,2,1]);
            //unitOfWork.solve([3,2,1]);
    });
});
