import { Money } from './money';

export class Dollar extends Money {
    constructor(amount: number) {
        super();
        this._amount = amount;
    };

    times(multiplier: number): Money {
        return new Dollar(this._amount * multiplier);
    };

}