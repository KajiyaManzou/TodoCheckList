export class Money {
    protected _amount: number = 0;

    public equals(object: object): boolean {
        if (!(object instanceof Money)) return false;
        return this._amount === object._amount && this.constructor.name === object.constructor.name;
    }

    get amount(): number {
        return this._amount;
    }
}