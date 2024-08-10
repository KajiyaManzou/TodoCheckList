//import { Dollar } from '../src/dollar';
//import { Franc } from '../src/franc';
import { Franc, Money } from '../src/money';

test("test Multiplication", () => {
  const five = Money.Dollar(5);
  expect(Money.Dollar(10)).toEqual(five.times(2));
  expect(Money.Dollar(15)).toEqual(five.times(3));
});

test("test Equality", () =>{
  expect(Money.Dollar(5).equals(Money.Dollar(5))).toBeTruthy();
  expect(Money.Dollar(5).equals(Money.Dollar(6))).toBeFalsy();
  expect(Money.Franc(5).equals(Money.Franc(5))).toBeTruthy();
  expect(Money.Franc(5).equals(Money.Franc(6))).toBeFalsy();
  expect(Money.Franc(5).equals(Money.Dollar(5))).toBeFalsy();
})

test("test Franc Multiplication", () => {
  const five = Money.Franc(5);
  expect(Money.Franc(10)).toEqual(five.times(2));
  expect(Money.Franc(15)).toEqual(five.times(3));
})

test("test Currency", () => {
  expect(Money.Dollar(1).currency()).toBe("USD");
  expect(Money.Franc(1).currency()).toBe("CHF");
})

test("test Different Class Equality", () => {
  expect(new Money(10, "CHF").equals(new Franc(10, "CHF"))).toBeTruthy();
})