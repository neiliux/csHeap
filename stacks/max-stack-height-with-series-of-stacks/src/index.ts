export default class UnitOfWork {
    private _values: Array<Stack<number>> = [];
    private _maxItems: number = 5;

    public pop(): number {
        if (!this._values.length) {
            return null;
        }

        let item = this._values[this._values.length-1].pop();

        if (this._values[this._values.length-1].length() === 0) {
            this._values.pop();
        }
    }

    public push(item: number): void {
        if (!this._values.length
            || this._values[this._values.length-1].length() === this._maxItems) {
            this._values.push(new Stack<number>());
        }

        this._values[this._values.length-1].push(item);
    }

    public stacksLength(): number {
        return this._values.length;
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
}
