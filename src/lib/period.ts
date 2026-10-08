import type { YearMonth } from '@/types/components';

const MONTHS = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];

const parse = (ym: YearMonth) => {
  const [year = 0, month = 1] = ym.split('-').map(Number);
  return { year, month };
};

/** "2017-10" → 2017.75 (decimal year, used to place bars on the timeline). */
export const toDecimalYear = (ym: YearMonth) => {
  const { year, month } = parse(ym);
  return year + (month - 1) / 12;
};

const label = (ym: YearMonth) => {
  const { year, month } = parse(ym);
  return `${MONTHS[month - 1]}. ${year}`;
};

const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;

/** Inclusive length in months: mar–jun = 4. */
export const monthsBetween = (from: YearMonth, to: YearMonth) => {
  const a = parse(from), b = parse(to);
  return (b.year - a.year) * 12 + (b.month - a.month) + 1;
};

/** "feb. 2026 - actualidad" | "oct. 2017 - feb. 2023 · 5 años 5 meses" */
export const formatPeriod = (from: YearMonth, to?: YearMonth) => {
  if (!to) return `${label(from)} - actualidad`;
  const total = monthsBetween(from, to);
  const years = Math.floor(total / 12), months = total % 12;
  const length = [years && plural(years, 'año', 'años'), months && plural(months, 'mes', 'meses')].filter(Boolean).join(' ');
  return `${label(from)} - ${label(to)} · ${length}`;
};
