import Strings from '../js/Strings';

test('capitalize given string', () => {
  expect(Strings.capitalize('string')).toBe('String');
});

test('reverse given string', () => {
  expect(Strings.reverseString('asdf')).toBe('fdsa');
});
