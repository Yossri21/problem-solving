//const func = require('./main');

import { intToRoman } from './main.js';

test('Outputs III', () => {
  expect(intToRoman(3)).toBe('III');
});

test('Outputs IV', () => {
  expect(intToRoman(5)).toBe('V');
});

test('Outputs IX', () => {
  expect(intToRoman(9)).toBe('IX');
});
