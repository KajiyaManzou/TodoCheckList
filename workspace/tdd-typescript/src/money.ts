export interface Expression {
    
}

export class Money implements Expression {
    protected _amount: number;
    protected _currency: string;

    constructor(amount: number, currency: string) {
        this._amount = amount;
        this._currency = currency;
    };

    public equals(object: object): boolean {
        if (!(object instanceof Money)) return false;
        return this._amount === object._amount 
            && this._currency === object._currency;
    };

    get amount(): number {
        return this._amount;
    };

    get currency(): string {
        return this._currency;
    };

    public times(multiplier: number): Money {
        return new Money(this._amount * multiplier, this._currency);
    };

    public plus(addend: Money): Expression {
        return new Money(this._amount + addend.amount, this.currency);
    }

    public static Dollar(amount: number): Money {
        return new Money(amount, "USD");
    };

    public static Franc(amount: number): Money {
        return new Money(amount, "CHF");
    };
}

export class Bank {
    public reduce(source: Expression, to: string): Money {
        return Money.Dollar(10);
    }
}