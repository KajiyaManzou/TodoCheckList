import { Expression, Bank, Money } from '../src/money';

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