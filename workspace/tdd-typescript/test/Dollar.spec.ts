import { Dollar } from '../src/dollar';
import { Franc } from '../src/franc';

test("test Multiplication", () => {
  const five = new Dollar(5);
  expect(new Dollar(10).amount).toBe(five.times(2).amount);
  expect(new Dollar(15).amount).toBe(five.times(3).amount);
});

test("test Equality", () =>{
  expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
  expect(new Dollar(10).equals(new Dollar(10))).toBeTruthy();
  expect(new Franc(5).equals(new Franc(5))).toBeTruthy();
  expect(new Franc(10).equals(new Franc(10))).toBeTruthy();
})

test("test Franc Multiplication", () => {
  const five = new Franc(5);
  expect(new Dollar(10).amount).toBe(five.times(2).amount);
  expect(new Dollar(15).amount).toBe(five.times(3).amount);
})