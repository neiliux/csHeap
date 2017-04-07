export function hasUniqueCharacters(value: string): boolean {
    // Time complexity: O(n2)

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

export function hasUniqueCharactersRev1(value: string): boolean {
    // Time complexity: O(n)

    if (!value) {
        return true;
    }
    
    let set: Set<string> = new Set();
    for (let i=0; i<value.length; i++) {
        if (set.has(value[i])) {
            return false;
        }
        set.add(value[i]);
    }
    return true;
}
