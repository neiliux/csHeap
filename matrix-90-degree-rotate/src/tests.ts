import { UnitOfWork, Matrix } from './index';
let expect = require('chai').expect;

describe('main', () => {
    let unitOfWork: UnitOfWork = new UnitOfWork();

    it('should rotate matrix', () => {
        let matrix: Matrix = [];

        for (let i=0; i<4; i++) {
            matrix[i] = [];
            for (let z=0; z<4; z++) {
                matrix[i].push(i+1);
            }
        }
        
        let result: Matrix = unitOfWork.rotate(matrix);

        console.log(matrix);
        console.log(result);
        expect(result[0][0]).to.equal(1);
        expect(result[3][0]).to.equal(1);
        expect(result[0][3]).to.equal(4);
        expect(result[3][3]).to.equal(4);
    });
});
