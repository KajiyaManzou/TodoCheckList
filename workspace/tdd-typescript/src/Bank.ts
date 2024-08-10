import { Expression } from './Expression';
import { Money } from './Money';
import { RateKey } from './RateKey';

export class Bank {
    /** 為替レートを管理するマップ */
    private rateMap = new Map<string, number>();
    public reduce(source: Expression, to: string): Money {
        return source.reduce(this, to);
    }

    addRate(from: string, to: string, rate: number): void {
        const key = new RateKey(from, to).value;
        this.rateMap.set(key, rate);
    }

    rate(from: string, to: string): number {
        //return (from == "CHF" && to == "USD") ? 2 : 1;
        return this.fetchRate(from, to);
    }

    /**
     * 為替レートを取得する
     * @param fromCurrency 変換前通貨
     * @param toCurrency 変換後通貨
     */
    fetchRate(fromCurrency: string, toCurrency: string): number {
        if (fromCurrency === toCurrency) return 1;
        const key = new RateKey(fromCurrency, toCurrency).value;
        const rate = this.rateMap.get(key);
        //assertIsDefined(rate);
        return rate as number;
    }
}