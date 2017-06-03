export default class UnitOfWork {
    sortAscending(set: Array<number>): Array<number> {
        if (!set || set.length === 0) {
            return [];
        }

        if (set.length === 1) {
            return [set[0]];
        }

        for (let i=1; i<set.length; i++) {
            let v = set[i];
            let z = i-1;
            while (z >= 0 && set[z] > v) {
                set[z+1] = set[z];
                z = z - 1;
            }
            set[z+1] = v;
        }

        return set;
    }
}
