import Calculator from '../js/Calculator';

test('add two given numbers', () => {
  expect(Calculator.add(3, 5)).toBe(8);
});

test('subtract param2 from param1', () => {
  expect(Calculator.subtract(10, 5)).toBe(5);
});

test('multiply param1 by param2', () => {
  expect(Calculator.multiply(15, 2)).toBe(30);
});

test('divide param1 by param2', () => {
  expect(Calculator.divide(20, 10)).toBe(2);
});
