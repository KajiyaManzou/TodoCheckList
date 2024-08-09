
export abstract class Money {
    protected _amount: number = 0;

    public equals(object: object): boolean {
        if (!(object instanceof Money)) return false;
        return this._amount === object._amount && this.constructor.name === object.constructor.name;
    }

    get amount(): number {
        return this._amount;
    }

    public abstract times(multiplier: number): Money;

    public static Dollar(amount: number): Money {
        return new Dollar(amount);
    }

    public static Franc(amount: number): Money {
        return new Franc(amount);
    }
}

export class Dollar extends Money {
    constructor(amount: number) {
        super();
        this._amount = amount;
    };

    times(multiplier: number): Money {
        return new Dollar(this._amount * multiplier);
    };

}

export class Franc extends Money {
    constructor(amount: number) {
        super();
        this._amount = amount;
    };

    public times(multiplier: number): Money {
        return new Franc(this._amount * multiplier);
    };
}