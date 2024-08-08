export class Franc{
    private _amount: number = 0;
    constructor(amount: number) {
        this._amount = amount;
    };

    public times(multiplier: number): Franc {
        return new Franc(this._amount * multiplier);
    };

    public equals(object: object): boolean {
        if (!(object instanceof Franc)) return false;
        if (JSON.stringify(this) === JSON.stringify(object)) return true;
        return false;
    }
}