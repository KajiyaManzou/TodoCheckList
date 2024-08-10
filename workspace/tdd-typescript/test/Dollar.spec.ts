import { Money } from '../src/Money';
import { Expression } from '../src/Expression';
import { Bank } from '../src/Bank';
import { Sum } from '../src/Sum';

test("test Multiplication", () => {
  const five = Money.Dollar(5);
  expect(Money.Dollar(10)).toEqual(five.times(2));
  expect(Money.Dollar(15)).toEqual(five.times(3));
});

test("test Equality", () =>{
  expect(Money.Dollar(5).equals(Money.Dollar(5))).toBeTruthy();
  expect(Money.Dollar(5).equals(Money.Dollar(6))).toBeFalsy();
  expect(Money.Franc(5).equals(Money.Dollar(5))).toBeFalsy();
})

test("test Currency", () => {
  expect(Money.Dollar(1).currency).toBe("USD");
  expect(Money.Franc(1).currency).toBe("CHF");
})

test("test Simple Addition", () => {
  const five: Money = Money.Dollar(5);
  const sum: Expression = five.plus(five);
  const bank = new Bank();
  const redused: Money = bank.reduce(sum, "USD");
  expect(Money.Dollar(10)).toEqual(redused);
})

test("test Plus Returns Sum", () => {
  const five: Money = Money.Dollar(5);
  const result: Expression = five.plus(five);
  const sum: Sum = result as Sum;
  expect(five).toEqual(sum.augend);
  expect(five).toEqual(sum.addend);
})

test("test Reduce Sum", () => {
  const sum: Expression = new Sum(Money.Dollar(3), Money.Dollar(4));
  const bank: Bank = new Bank();
  const result: Money = bank.reduce(sum, "USD");
  expect(Money.Dollar(7)).toEqual(result);
})

test("test Reduce Money", () => {
  const bank: Bank = new Bank();
  const result: Money = bank.reduce(Money.Dollar(1), "USD");
  expect(Money.Dollar(1)).toEqual(result);
})

test("test Reduce Money Different Currency", () => {
  const bank: Bank = new Bank();
  bank.addRate("CHF", "USD", 2);
  const result: Money = bank.reduce(Money.Franc(2), "USD");
  expect(Money.Dollar(1)).toEqual(result);
})

test("test Identity Rate", () => {
  expect(1).toBe(new Bank().rate("USD", "USD"));
})

test("test Mixed Addition", () => {
  const fiveBucks: Expression = Money.Dollar(5);
  const tenFrancs: Expression = Money.Franc(10);
  const bank: Bank = new Bank();
  bank.addRate("CHF", "USD", 2);
  const result: Money = bank.reduce(fiveBucks.plus(tenFrancs), "USD");
  expect(Money.Dollar(10)).toEqual(result);
})