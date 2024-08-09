//import { Dollar } from '../src/dollar';
//import { Franc } from '../src/franc';
import { Money } from '../src/money';

test("test Multiplication", () => {
  const five = Money.Dollar(5);
  expect(Money.Dollar(10).amount).toBe(five.times(2).amount);
  expect(Money.Dollar(15).amount).toBe(five.times(3).amount);
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
  expect(Money.Franc(10).amount).toBe(five.times(2).amount);
  expect(Money.Franc(15).amount).toBe(five.times(3).amount);
})