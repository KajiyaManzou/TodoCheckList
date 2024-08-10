
export class Money {
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

    public times(multiplier: number): Money {
        return new Money(this._amount * multiplier, this._currency);
    };

    public currency(): string {
        return this._currency;
    };

    public static Dollar(amount: number): Money {
        return new Money(amount, "USD");
    };

    public static Franc(amount: number): Money {
        return new Money(amount, "CHF");
    };
}