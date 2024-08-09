export class Money {
    protected _amount: number = 0;

    public equals(object: object): boolean {
        if (!(object instanceof Money)) return false;
        if (this._amount === object._amount) return true;
        return false;
    }

    get amount(): number {
        return this._amount;
    }
}