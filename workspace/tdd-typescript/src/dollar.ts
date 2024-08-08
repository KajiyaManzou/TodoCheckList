export class Dollar {
    private _amount: number = 0;

    constructor(amount: number) {
        this._amount = amount;
    };

    times(multiplier: number): Dollar {
        return new Dollar(this._amount * multiplier);
    };

    get amount(): number {
        return this._amount;
    }
}