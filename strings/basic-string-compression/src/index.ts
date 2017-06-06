export class UnitOfWork {
    public compress(value: string): string {
        // Time complexity: O(N)
        
        if (!value) {
            return null;
        }

        let char: string;
        let count: number;
        let compressedString: string = '';
        let appliedCompression: boolean = false;

        char = value[0];
        count = 1;
        for (let i=1; i<value.length; i++) {
            if (value[i] === char) {
                count++;
                appliedCompression = true;
            } else {
                compressedString += `${char}${count}`;
                char = value[i];
                count = 1;
            }
        }

        compressedString += `${char}${count}`;

        return compressedString.length === value.length
            || !appliedCompression
            ? value
            : compressedString;
    }
}
