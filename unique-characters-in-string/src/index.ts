export default function hasUniqueCharacters(value: string): boolean {
    if (!value) {
        return true;
    }

    for (let i=0; i<value.length; i++) {
        for (let x=i+1; x<value.length; x++) {
            if (value[i] === value[x]) {
                return false;
            }
        }
    }
    
    return true;
}
