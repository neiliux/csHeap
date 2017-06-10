export default class UnitOfWork {
    private _sets: Array<Stack<number>>;
    private _lastDestination: number = null;
    private _indexMap = {
        0: [1,2],
        1: [0,2],
        2: [0, 1]
    };

    solve(set: Array<number>) {
            let numberOfMoves = 0;
            let hasSolved = false;
            let possibleLocations: Array<number>;

            this.initialize(set);

            while (!hasSolved) {
                numberOfMoves++;

                possibleLocations = this.possibleMoveLocations(0);
                if (possibleLocations.length > 0) {
                    this.moveItem(0, possibleLocations);
                    continue;
                }

                possibleLocations = this.possibleMoveLocations(1);
                if (possibleLocations.length > 0) {
                    this.moveItem(1, possibleLocations);
                    continue;
                }

                possibleLocations = this.possibleMoveLocations(2);
                if (possibleLocations.length > 0) {
                    this.moveItem(2, possibleLocations);
                    continue;
                }

                hasSolved = true;
            }

            console.log('completed, number of moves: ', numberOfMoves);
    }

    private moveItem(source: number, possibleDestinations: Array<number>) {
        if (possibleDestinations.length === 0) {
            return;
        }

        if (possibleDestinations.length === 1) {
            this.move(source, possibleDestinations[0]);
            return;
        }

        // TODO: Improve this. Given there are multiple choices
        // we should determine the most efficent move.
        this.move(source, possibleDestinations[possibleDestinations.length-1]);
    }

    private possibleMoveLocations(source: number): Array<number> {
        if (source === this._lastDestination) {
            return [];
        }

        let s = this._sets[source].peek();
        if (!s) {
            return [];
        }

        return this._indexMap[source].filter(d => {
            let v = this._sets[d].peek();
            return !v || s < v;
        });
    }

    private initialize(set: Array<number>): void {
        this._sets = [];
        this._sets[0] = new Stack<number>();
        this._sets[1] = new Stack<number>();
        this._sets[2] = new Stack<number>();

        set.forEach(s => this._sets[0].push(s));
    }

    private move(source: number, destination: number) {
        this._lastDestination = destination;
        let s = this._sets[source].pop();
        this._sets[destination].push(s);
    }
}

export class Stack<T> {
    private _values: Array<T> = [];

    public pop(): T {
        if (!this._values.length) {
            return null;
        }

        return this._values.pop();
    }

    public push(item: T): void {
        this._values.push(item);
    }

    public length(): number {
        return this._values.length;
    }

    public peek(): T {
        if (!this._values.length) {
            return null;
        }

        return this._values[this._values.length-1];
    }
}
