export type Matrix = Array<Array<number>>;

export class UnitOfWork {
    rotate(matrix: Matrix): Matrix {
        // Time complexity: O(N*N)
        let rotatedMatrix: Matrix = [];

        for (let y=0; y<matrix.length; y++) {
            let rx: number = matrix[y].length-y-1;
            rotatedMatrix[rx] = [];
            for (let x=0; x<matrix[y].length; x++) {
                rotatedMatrix[rx][x] = matrix[x][y];
            }
        }

        return rotatedMatrix;
    }
}
