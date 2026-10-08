import { expect, test } from 'bun:test';
import { formatPeriod, toDecimalYear } from './period';

// Same strings the site showed when `period` was written by hand
test('formatPeriod reproduces the original copy', () => {
  expect(formatPeriod('2026-02')).toBe('feb. 2026 - actualidad');
  expect(formatPeriod('2025-03', '2025-06')).toBe('mar. 2025 - jun. 2025 · 4 meses');
  expect(formatPeriod('2017-10', '2023-02')).toBe('oct. 2017 - feb. 2023 · 5 años 5 meses');
  expect(formatPeriod('2017-01', '2023-02')).toBe('ene. 2017 - feb. 2023 · 6 años 2 meses');
  expect(formatPeriod('2014-12', '2016-12')).toBe('dic. 2014 - dic. 2016 · 2 años 1 mes');
  expect(formatPeriod('2020-01', '2020-12')).toBe('ene. 2020 - dic. 2020 · 1 año');
});

test('toDecimalYear', () => {
  expect(toDecimalYear('2017-10')).toBe(2017.75);
  expect(toDecimalYear('2020-01')).toBe(2020);
});
