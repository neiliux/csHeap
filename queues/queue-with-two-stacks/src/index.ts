export default class UnitOfWork {
    private _queue: Queue<number>;

    constructor() {
        this._queue = new Queue<number>();
    }

    enqueue(value: number): void {
        this._queue.enqueue(value);
    }

    dequeue(): number {
        return this._queue.dequeue();
    }
}

export class Queue<T> {
    private _stackA: Stack<T>;
    private _stackB: Stack<T>;

    constructor() {
        this._stackA = new Stack<T>();
        this._stackB = new Stack<T>();
    }

    enqueue(value: T) {
        this._stackA.push(value);
    }

    dequeue(): T {
        this._stackB = new Stack<T>();
        let returnValue: T;

        while (this._stackA.peek() != null) {
            let v = this._stackA.pop();
            if (this._stackA.peek() != null) {
                this._stackB.push(v);
                continue;
            }

            returnValue = v;
        }

        while (this._stackB.peek() != null) {
            this._stackA.push(this._stackB.pop());
        }

        return returnValue;
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
