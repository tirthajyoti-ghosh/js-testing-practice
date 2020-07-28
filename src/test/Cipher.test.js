import caeserCipher from '../js/Cipher';

const cipher = caeserCipher();

test('cipher.encrypt() -> encrypts a given msg with key', () => {
  expect(cipher.encrypt('attack at dawn', 3)).toBe('dwwdfn dw gdzq');
});

test('cipher.encrypt() -> takes upper case msg and returns upper case encrypted msg', () => {
  expect(cipher.encrypt('ATTACK AT DAWN', 3)).toBe('DWWDFN DW GDZQ');
});

test('cipher.encrypt() -> takes mixed case msg and returns mixed case encrypted msg', () => {
  expect(cipher.encrypt('AtTacK aT dAWn', 3)).toBe('DwWdfN dW gDZq');
});

test('cipher.encrypt() -> encrypts a given msg with ANY key', () => {
  expect(cipher.encrypt('attack at dawn', 5)).toBe('fyyfhp fy ifbs');
});

test('cipher.encrypt() ->  encrypts a given msg that contains numbers', () => {
  expect(cipher.encrypt('at6t5ack a52t da78wn', 5)).toBe('fy6y5fhp f52y if78bs');
});

test('cipher.encrypt() ->  encrypts a given msg that contains special characters and punctuations', () => {
  expect(cipher.encrypt('..#$attack, at. dawn!', 5)).toBe('..#$fyyfhp, fy. ifbs!');
});

test('cipher.encrypt() ->  takes care of character wrapping (z -> a, y -> b) according to given key', () => {
  expect(cipher.encrypt('z y x w u', 5)).toBe('e d c b z');
});
