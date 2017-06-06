export class UnitOfWork {
    encode(value: string, trueLength: number): string {
        // Time complexity: O(N)
        // Note: This algorithm is passed the true length of the
        // string after encoding. The implementation should create a fixed-sized
        // array, but this is JS.

        let chars: Array<string> = [];

        for (let i=0; i<value.length; i++) {
            if (value[i] === ' ') {
              chars.push('%');
              chars.push('2');
              chars.push('0');
              continue;
            }

            chars.push(value[i]);
        }

        return chars.join('');
    }
}
