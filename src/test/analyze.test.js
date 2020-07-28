import analyze from "../js/Analyze.js";

const array = analyze([1,8,3,4,2,6]);

test('analyze() returns an object', () => {
  expect(typeof array).toBe('object');
});

test('analyze() does not return a null', () => {
  expect(typeof array).not.toBe(null);
});

test('analyze().average returns average of the given array', () => {
  expect(array.average).toBe(4);
});

test('analyze().min returns smallest element of the given array', () => {
  expect(array.min).toBe(1);
});

test('analyze().max returns largest element of the given array', () => {
  expect(array.max).toBe(8);
});

test('analyze().length returns length of the given array', () => {
  expect(array.length).toBe(6);
});
