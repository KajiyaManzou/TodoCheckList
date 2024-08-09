import { Money } from './money';

export class Franc extends Money {
    constructor(amount: number) {
        super();
        this._amount = amount;
    };

    public times(multiplier: number): Franc {
        return new Franc(this._amount * multiplier);
    };
}