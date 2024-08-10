
export abstract class Money {
    protected _amount: number;
    protected _currency: string;

    constructor(amount: number, currency: string) {
        this._amount = amount;
        this._currency = currency;
    }

    public equals(object: object): boolean {
        if (!(object instanceof Money)) return false;
        return this._amount === object._amount && this.constructor.name === object.constructor.name;
    }

    get amount(): number {
        return this._amount;
    }

    public abstract times(multiplier: number): Money;

    public currency(): string {
        return this._currency;
    }

    public static Dollar(amount: number): Money {
        return new Dollar(amount, "USD");
    }

    public static Franc(amount: number): Money {
        return new Franc(amount, "CHF");
    }
}

export class Dollar extends Money {
    constructor(amount: number, currency: string) {
        super(amount, currency);
    };

    public times(multiplier: number): Money {
        return Money.Dollar(this._amount * multiplier);
    };
}

export class Franc extends Money {
    constructor(amount: number, currency: string) {
        super(amount, currency);
    };

    public times(multiplier: number): Money {
        return Money.Franc(this._amount * multiplier);
    };
}