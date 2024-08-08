export class Dollar {
    private _amount: number = 0;

    constructor(amount: number) {
        this._amount = amount;
    };

    times(multiplier: number): Dollar {
        return new Dollar(this._amount * multiplier);
    };

    equals(object: object): boolean {
        if (!(object instanceof Dollar)) return false;
        if (JSON.stringify(this) === JSON.stringify(object)) return true;
        return false;
    };

    get amount(): number {
        return this._amount;
    }
}