
import { Dollar } from '../src/dollar';
import { Franc } from '../src/franc';

test("$5 * 2 = $10", () => {
    const five = new Dollar(5);
    let product: Dollar = five.times(2);
    expect(product.amount).toBe(10);
    product = five.times(3);
    expect(product.amount).toBe(15);
  });

test("equal object", () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
    expect(new Dollar(5).equals(new Dollar(10))).toBeFalsy();
    const dt = new Date();
    expect(new Dollar(5).equals(dt)).toBeFalsy();
});

test("multiplication", () =>{
  const five = new Dollar(5);
  expect(five.times(2).equals(new Dollar(10))).toBeTruthy();
  expect(five.times(3).equals(new Dollar(15))).toBeTruthy();
})

test("test Franc Multiplication", () => {
  const five = new Franc(5);
  expect(five.times(2).equals(new Franc(10))).toBeTruthy();
  expect(five.times(3).equals(new Franc(15))).toBeTruthy();
})